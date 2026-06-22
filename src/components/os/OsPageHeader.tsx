import type { ReactNode } from "react";

type OsPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  asideVariant?: "panel" | "square";
  className?: string;
};

type OsSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
};

export default function OsPageHeader({
  eyebrow = "Outstride OS",
  title,
  description,
  children,
  asideVariant = "panel",
  className = "",
}: OsPageHeaderProps) {
  const wrapperClassName = [
    "os-page-header",
    "ui-surface-elevated",
    "p-4",
    "p-lg-5",
    "mb-5",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <div className="row align-items-center g-4">
        <div className={children ? "col-lg-8" : "col-lg-10"}>
          {eyebrow ? <p className="ui-kicker mb-3">{eyebrow}</p> : null}
          <h1 className="text-10 fw-700 mb-3">{title}</h1>
          {description ? (
            <p className="text-5 text-muted mb-0">{description}</p>
          ) : null}
        </div>
        {children ? (
          <div
            className={
              asideVariant === "square"
                ? "col-lg-auto d-flex justify-content-center justify-content-lg-end"
                : "col-lg-4"
            }
          >
            <div
              className={[
                "os-page-header-panel",
                asideVariant === "square"
                  ? "os-page-header-panel-square"
                  : "p-4 h-100",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {children}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function OsSectionHeader({
  eyebrow,
  title,
  description,
  className = "mb-4",
}: OsSectionHeaderProps) {
  return (
    <div className={`row align-items-end ${className}`}>
      <div className="col-lg-8">
        {eyebrow ? <p className="ui-kicker mb-2">{eyebrow}</p> : null}
        <h2 className="text-8 fw-700 mb-3">{title}</h2>
        {description ? (
          <p className="text-5 text-muted mb-0">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
