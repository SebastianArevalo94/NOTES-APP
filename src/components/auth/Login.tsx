import { LoginSVG } from "../assets/images";
import "../styles/components/Login/login.css";

export const Login = () => {
  return (
    <div className="global">
      <div className="login-logo">
        <LoginSVG />
      </div>
      <div className="login-container">
        <div className="login-note">
          <img src="https://iili.io/4TAgRt.png" alt="" width="270px" />
          <p>
            Welcome <br />
            To Notes <br />
            App
          </p>
        </div>
        <div className="login">
          <h2>Notes App</h2>
          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Email" />
            <button type="submit">Go</button>
          </form>
        </div>
        <p className="login-text">
          Don’t have an account? <br /> Create One here
        </p>
      </div>
    </div>
  );
};
