import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OsDraftBannerGate from "@/components/os/OsDraftBannerGate";
import OsPrevNext from "@/components/os/OsPrevNext";
import OsSidebar from "@/components/os/OsSidebar";

export default function OSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-wrapper">
      <Header />
      <main id="content" role="main">
        <section className="section os-section">
          <div className="container">
            <div className="row g-4 align-items-start os-layout-row">
              <aside className="col-12 col-lg-3 os-layout-sidebar">
                <div className="os-sidebar-sticky">
                  <OsSidebar />
                </div>
              </aside>
              <div className="col-12 col-lg-9 os-layout-main">
                <OsDraftBannerGate />
                {children}
                <OsPrevNext />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
