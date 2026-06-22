export type Accreditation = {
  originator?: string;
  source?: string;
  sourceUrl?: string;
  note?: string;
};

export function formatAccreditation(accreditation: Accreditation): string {
  const parts: string[] = [];

  if (accreditation.originator) {
    parts.push(accreditation.originator);
  }

  if (accreditation.source) {
    parts.push(accreditation.source);
  }

  if (accreditation.note) {
    parts.push(accreditation.note);
  }

  return parts.join(" · ");
}
