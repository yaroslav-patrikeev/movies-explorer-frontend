import Films from "../../App/children/Films/Films";
import Footer from "../../App/children/Footer/Footer";
import Header from "../../App/children/Header/Header";
import MoreFilmsButton from "../../App/children/MoreFilmsButton/MoreFilmsButton";
import Search from "../../App/children/Search/Search";

function SavedMovies() {
  return (
    <>
      <Header theme="light" authorized={true} />
      <main className="main">
        <Search />
        <Films type="saved" />
        <MoreFilmsButton />
      </main>

      <Footer />
    </>
  );
}

export default SavedMovies;
