import Link from "next/link";

export default function OsConversionCta() {
  return (
    <div className="ui-surface p-4 p-lg-5 mt-5">
      <p className="ui-kicker mb-2">Work with Ben</p>
      <h2 className="os-prose-heading mb-2">Want help installing this?</h2>
      <p className="os-prose-body os-prose-muted mb-3">
        Outstride OS is the system behind Ben&apos;s founder coaching — pre-seed
        to Series C. If this page names something you are living right now, start
        a conversation.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <Link href="/#contact" className="btn btn-primary rounded-pill">
          Get in touch
        </Link>
        <Link href="/testimonials/" className="btn btn-outline-primary rounded-pill">
          Read testimonials
        </Link>
      </div>
    </div>
  );
}
