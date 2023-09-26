import { useNavigate } from "react-router-dom";
import "./AuthHeader.css";

function AuthHeader({ greeting }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="auth-header">
        <div
          className="auth-header__logo element-hover"
          onClick={() => navigate("/")}
        ></div>
        <p className="auth-header__greeting">{greeting}</p>
      </section>
    </>
  );
}

export default AuthHeader;
