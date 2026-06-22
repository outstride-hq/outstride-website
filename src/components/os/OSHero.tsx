import { osQuote } from "@/lib/os";
import OsPageHeader from "./OsPageHeader";

export default function OSHero() {
  return (
    <OsPageHeader
      eyebrow="Operating System"
      title="Outstride OS"
      description="A practical operating system for founders scaling themselves, their teams and their companies."
    >
      <p className="ui-kicker mb-3">Core belief</p>
      <blockquote className="os-page-header-quote mb-0">{osQuote}</blockquote>
    </OsPageHeader>
  );
}
