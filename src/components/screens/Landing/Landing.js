import LandingAbout from "./children/LandingAbout/LandingAbout";
import LandingStudent from "./children/LandingStudent/LandingStudent";
import LandingTech from "./children/LandingTech/LandingTech";
import LandingTitleSection from "./children/LandingTitleSection/LandingTitleSection";

function Landing() {
  return (
    <>
      <LandingTitleSection />
      <LandingAbout />
      <LandingTech />
      <LandingStudent />
    </>
  );
}

export default Landing;
