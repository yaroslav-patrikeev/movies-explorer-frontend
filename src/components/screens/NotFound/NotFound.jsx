import "./NotFound.css";

function NotFound() {
  return (
    <>
      <main className="not-found">
        <p className="not-found__code">404</p>
        <h2 className="not-found__title">Страница не найдена</h2>
        <button
          type="button"
          className="not-found__back-link"
          onClick={() => window.history.back()}
        >
          Назад
        </button>
      </main>
    </>
  );
}

export default NotFound;
