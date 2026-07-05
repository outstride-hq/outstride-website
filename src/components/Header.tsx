"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className="sticky-top-slide">
      <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
        <div className="container position-relative">
          <div className="col-auto col-lg-2 d-inline-flex ps-lg-0">
            <Link className="logo" href="/" title="Ben" onClick={handleNavClick}>
              <img src="/images/logo.png" alt="Ben" />
            </Link>
          </div>
          <div className="col col-lg-8 navbar-accordion px-0">
            <button
              className={`navbar-toggler ms-auto ${isMenuOpen ? "show" : ""}`}
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-controls="header-nav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              id="header-nav"
              className={`collapse navbar-collapse justify-content-end ${
                isMenuOpen ? "show" : ""
              }`}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                    href="/"
                    onClick={handleNavClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname.startsWith("/os") ? "active" : ""
                    }`}
                    href="/os"
                    onClick={handleNavClick}
                  >
                    OS
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://blog.outstride.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/testimonials" ? "active" : ""
                    }`}
                    href="/testimonials"
                    onClick={handleNavClick}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/contact" ? "active" : ""
                    }`}
                    href="/contact"
                    onClick={handleNavClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end ps-0">
            <ul className="social-icons">
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://twitter.com/BenPeterJones"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://www.linkedin.com/in/benjaminpeterjones"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
