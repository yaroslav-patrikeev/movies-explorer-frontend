import { useRef } from "react";
import Footer from "../../App/children/Footer/Footer";
import Header from "../../App/children/Header/Header";
import LandingAbout from "./children/LandingAbout/LandingAbout";
import LandingStudent from "./children/LandingStudent/LandingStudent";
import LandingTech from "./children/LandingTech/LandingTech";
import LandingTitle from "./children/LandingTitle/LandingTitle";

function Landing() {
  const ref = useRef(null);
  const handleClickToLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <main className="main">
        <LandingTitle handleClickToLearnMore={handleClickToLearnMore} />
        <LandingAbout ref={ref} />
        <LandingTech />
        <LandingStudent />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
