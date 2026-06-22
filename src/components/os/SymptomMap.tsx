import {
  symptomMap,
  symptomMapIntro,
  symptomMapOutro,
} from "@/lib/os";
import { OsSectionHeader } from "./OsPageHeader";

export default function SymptomMap() {
  return (
    <div className="mt-5 pt-5 border-top">
      <OsSectionHeader
        eyebrow="Diagnostic Entry Point"
        title="The Symptom Map"
        description={symptomMapIntro}
        className="mb-5"
      />
      <div className="table-responsive os-table-wrap">
        <table className="table align-middle">
          <thead>
            <tr>
              <th className="fw-700">What you&apos;re saying</th>
              <th className="fw-700">What it usually points to</th>
            </tr>
          </thead>
          <tbody>
            {symptomMap.map((entry) => (
              <tr key={entry.id}>
                <td className="text-5">&ldquo;{entry.symptom}&rdquo;</td>
                <td className="text-5 text-muted">
                  {entry.capabilityTitles.join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-5 text-muted mt-4 mb-0">{symptomMapOutro}</p>
    </div>
  );
}
