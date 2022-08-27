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
            <input type="password" placeholder="Password" />
            <button type="submit">
              <p>Go</p>
              <img width="25px" src="https://iili.io/4Tv5og.png" alt="" />
            </button>
          </form>
        </div>
        <div className="login-text">
          <p>Don’t have an account? <br /> Create One here</p>
          <img width="30px" src="https://iili.io/4Tv5og.png" alt="" />
        </div>
      </div>
    </div>
  );
};
