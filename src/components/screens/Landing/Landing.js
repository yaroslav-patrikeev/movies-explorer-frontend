import Footer from "../../App/children/Footer/Footer";
import Header from "../../App/children/Header/Header";
import LandingAbout from "./children/LandingAbout/LandingAbout";
import LandingStudent from "./children/LandingStudent/LandingStudent";
import LandingTech from "./children/LandingTech/LandingTech";
import LandingTitleSection from "./children/LandingTitleSection/LandingTitleSection";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <LandingTitleSection />
        <LandingAbout />
        <LandingTech />
        <LandingStudent />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
