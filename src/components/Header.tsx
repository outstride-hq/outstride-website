"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header id="header" className="sticky-top-slide">
      <nav className="primary-menu navbar navbar-expand-lg text-uppercase navbar-line-under-text fw-600">
        <div className="container position-relative">
          <div className="col-auto col-lg-2 d-inline-flex ps-lg-0">
            <Link className="logo" href="/" title="Ben">
              <img src="/images/logo.png" alt="Ben" />
            </Link>
          </div>
          <div className="col col-lg-8 navbar-accordion px-0">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#header-nav"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              id="header-nav"
              className="collapse navbar-collapse justify-content-end"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/os" ? "active" : ""
                    }`}
                    href="/os"
                  >
                    OS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      pathname === "/testimonials" ? "active" : ""
                    }`}
                    href="/testimonials"
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
              <li className="social-icons-twitter">
                <a
                  data-bs-toggle="tooltip"
                  href="https://blog.outstride.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Medium"
                >
                  <i className="fab fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
