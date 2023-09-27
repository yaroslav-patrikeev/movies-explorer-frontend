import Films from "../../App/children/Films/Films";
import Footer from "../../App/children/Footer/Footer";
import Header from "../../App/children/Header/Header";
import Search from "../../App/children/Search/Search";
import MoreFilmsButton from "../../App/ui/MoreFilmsButton/MoreFilmsButton";

function SavedMovies() {
  return (
    <>
      <Header theme="light" authorized={true} />
      <Search />
      <Films type="saved" />
      <MoreFilmsButton />
      <Footer />
    </>
  );
}

export default SavedMovies;
