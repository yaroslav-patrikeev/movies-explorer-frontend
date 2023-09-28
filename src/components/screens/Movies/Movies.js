import Films from "../../App/children/Films/Films";
import Footer from "../../App/children/Footer/Footer";
import Header from "../../App/children/Header/Header";
import MoreFilmsButton from "../../App/children/MoreFilmsButton/MoreFilmsButton";
import Search from "../../App/children/Search/Search";

function Movies() {
  return (
    <>
      <Header theme="light" authorized={true} />
      <main className="main">
        <Search />
        <Films />
        <MoreFilmsButton />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
