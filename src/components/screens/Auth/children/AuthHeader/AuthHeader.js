import { useNavigate } from "react-router-dom";
import "./AuthHeader.css";

function AuthHeader({ greeting }) {
  const navigate = useNavigate();
  return (
    <>
      <header className="auth-header">
        <div
          className="auth-header__logo element-hover"
          onClick={() => navigate("/")}
        ></div>
        <h1 className="auth-header__greeting">{greeting}</h1>
      </header>
    </>
  );
}

export default AuthHeader;
