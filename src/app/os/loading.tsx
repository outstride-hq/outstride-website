export default function OsLoading() {
  return (
    <section
      className="os-content-card p-4 p-lg-5 mb-5"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="ui-kicker mb-2">Outstride OS</p>
      <div className="featured-box p-5 text-center">
        <div className="lds-ellipsis mb-3" aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
        </div>
        <p className="text-muted mb-0">Loading Outstride OS…</p>
      </div>
    </section>
  );
}
