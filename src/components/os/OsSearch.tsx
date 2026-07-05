"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { capabilities, formatToolType, tools } from "@/lib/os";

type OsSearchItem = {
  type: "Capability" | "Tool";
  title: string;
  href: string;
  eyebrow: string;
  description: string;
};

const osSearchItems: OsSearchItem[] = [
  ...capabilities.map((capability) => ({
    type: "Capability" as const,
    title: capability.title,
    href: `/os/capabilities/${capability.id}/`,
    eyebrow: `Capability ${capability.number}`,
    description: capability.summary,
  })),
  ...tools.map((tool) => ({
    type: "Tool" as const,
    title: tool.title,
    href: `/os/tools/${tool.id}/`,
    eyebrow: formatToolType(tool.type),
    description: tool.description,
  })),
];

function buildAbsoluteUrl(href: string): string {
  return new URL(href, window.location.origin).toString();
}

function normalizeHref(href: string): string {
  return href.endsWith("/") ? href : `${href}/`;
}

type OsSearchProps = {
  variant: "desktop" | "mobile";
};

const DESKTOP_MEDIA_QUERY = "(min-width: 992px)";

function useOsSearchVariantActive(variant: OsSearchProps["variant"]): boolean {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

    function syncActive() {
      setActive(
        variant === "desktop" ? mediaQuery.matches : !mediaQuery.matches,
      );
    }

    syncActive();
    mediaQuery.addEventListener("change", syncActive);

    return () => {
      mediaQuery.removeEventListener("change", syncActive);
    };
  }, [variant]);

  return active;
}

async function copyTextToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.left = "-9999px";
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export default function OsSearch({ variant }: OsSearchProps) {
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const isActiveVariant = useOsSearchVariantActive(variant);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedHref, setCopiedHref] = useState<string | null>(null);
  const [currentCopied, setCurrentCopied] = useState(false);
  const [shortcutLabel, setShortcutLabel] = useState("Ctrl K");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return osSearchItems;
    }

    return osSearchItems.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
    setShortcutLabel(isMac ? "Cmd K" : "Ctrl K");
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isActiveVariant) {
      return;
    }

    function handleShortcut(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    }

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [isActiveVariant]);

  useEffect(() => {
    if (!isOpen || !isActiveVariant) {
      return;
    }

    inputRef.current?.focus();
    document.body.classList.add("os-search-open");

    return () => {
      document.body.classList.remove("os-search-open");
    };
  }, [isActiveVariant, isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!copiedHref) {
      return;
    }

    const timer = window.setTimeout(() => setCopiedHref(null), 1400);

    return () => window.clearTimeout(timer);
  }, [copiedHref]);

  useEffect(() => {
    if (!currentCopied) {
      return;
    }

    const timer = window.setTimeout(() => setCurrentCopied(false), 1400);

    return () => window.clearTimeout(timer);
  }, [currentCopied]);

  function closeSearch() {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }

  function openSearch() {
    setIsOpen(true);
  }

  async function copyHref(href: string) {
    await copyTextToClipboard(buildAbsoluteUrl(href));
    setCopiedHref(href);
  }

  async function copyCurrentPage() {
    await copyTextToClipboard(buildAbsoluteUrl(normalizeHref(pathname)));
    setCurrentCopied(true);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) =>
          results.length === 0 ? 0 : (index + 1) % results.length,
        );
        return;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) =>
          results.length === 0
            ? 0
            : (index - 1 + results.length) % results.length,
        );
        return;
      case "Enter": {
        const activeItem = results[activeIndex];

        if (activeItem) {
          event.preventDefault();
          closeSearch();
          router.push(activeItem.href);
        }

        return;
      }
      case "Escape":
        event.preventDefault();
        closeSearch();
        return;
      default:
        return;
    }
  }

  function handleResultCopy(
    event: MouseEvent<HTMLButtonElement>,
    href: string,
  ) {
    event.preventDefault();
    event.stopPropagation();
    void copyHref(href);
  }

  return (
    <div className="os-search">
      <div className="d-grid gap-2 mb-4">
        <button
          type="button"
          className="os-search-trigger"
          onClick={openSearch}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span>
            <i className="fa-solid fa-magnifying-glass me-2" aria-hidden="true" />
            Search OS
          </span>
          <kbd>{shortcutLabel}</kbd>
        </button>
        <button
          type="button"
          className="os-copy-current"
          onClick={() => void copyCurrentPage()}
        >
          <i className="fa-regular fa-copy me-2" aria-hidden="true" />
          {currentCopied ? "Copied page link" : "Copy page link"}
        </button>
      </div>

      {isMounted && isOpen && isActiveVariant
        ? createPortal(
            <div
              className="os-search-backdrop"
              role="presentation"
              onMouseDown={closeSearch}
            >
              <div
                className="os-search-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="os-search-title"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <div className="os-search-input-wrap">
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                  <input
                    ref={inputRef}
                    id="os-search-input"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleInputKeyDown}
                    type="search"
                    placeholder="Search tools and capabilities..."
                    aria-labelledby="os-search-title"
                    autoComplete="off"
                  />
                  <button type="button" onClick={closeSearch} aria-label="Close search">
                    Esc
                  </button>
                </div>

                <p id="os-search-title" className="os-search-title mb-0">
                  Outstride OS search
                </p>

                <div className="os-search-results" aria-live="polite">
                  {results.length > 0 ? (
                    results.map((item, index) => (
                      <div
                        key={item.href}
                        className={`os-search-result ${
                          index === activeIndex ? "is-active" : ""
                        }`}
                        onMouseEnter={() => setActiveIndex(index)}
                      >
                        <Link
                          href={item.href}
                          className="os-search-result-link"
                          onClick={closeSearch}
                        >
                          <span className="os-search-result-eyebrow">
                            {item.type} - {item.eyebrow}
                          </span>
                          <span className="os-search-result-title">{item.title}</span>
                          <span className="os-search-result-description">
                            {item.description}
                          </span>
                        </Link>
                        <button
                          type="button"
                          className="os-search-copy"
                          onClick={(event) => handleResultCopy(event, item.href)}
                          aria-label={`Copy link to ${item.title}`}
                        >
                          {copiedHref === item.href ? "Copied" : "Copy link"}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="os-search-empty">
                      No tools or capabilities match "{query}".
                    </div>
                  )}
                </div>

                <div className="os-search-footer">
                  <span>Enter to open</span>
                  <span>Arrow keys to move</span>
                  <span>Copy link to share</span>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
