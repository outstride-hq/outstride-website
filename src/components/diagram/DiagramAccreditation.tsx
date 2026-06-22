import { formatAccreditation } from "@/lib/accreditation";
import type { Accreditation } from "@/lib/accreditation";

type DiagramAccreditationProps = {
  accreditation?: Accreditation;
  className?: string;
};

export default function DiagramAccreditation({
  accreditation,
  className = "text-muted small mt-3 mb-0",
}: DiagramAccreditationProps) {
  if (!accreditation) {
    return null;
  }

  const text = formatAccreditation(accreditation);
  if (!text && !accreditation.sourceUrl) {
    return null;
  }

  return (
    <p className={className}>
      <span className="fw-600">Credit:</span>{" "}
      {accreditation.sourceUrl ? (
        <a href={accreditation.sourceUrl} target="_blank" rel="noopener noreferrer">
          {text || accreditation.sourceUrl}
        </a>
      ) : (
        text
      )}
    </p>
  );
}
