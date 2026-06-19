import {
  symptomMap,
  symptomMapIntro,
  symptomMapOutro,
} from "@/lib/os";

export default function SymptomMap() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-10 fw-600 text-center mb-4 wow fadeInUp">
              The Symptom Map
            </h2>
            <p className="text-5 text-muted text-center mb-5 wow fadeInUp">
              {symptomMapIntro}
            </p>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th className="fw-600">What you&apos;re saying</th>
                    <th className="fw-600">What it usually points to</th>
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
        </div>
      </div>
    </section>
  );
}
