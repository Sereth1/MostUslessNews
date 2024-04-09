import { Link } from "react-router-dom";
import "../../css/Register.css";

function LoginRegBtn() {
  return (
    <div className="gap-10 pixelated ">
      <Link to="/register">
        <button className="gap ">Register</button>
      </Link>
      <Link to="/login">
        <button className="gap ">Login</button>
      </Link>
      <Link to="/malakas"></Link>
    </div>
  );
}

export default LoginRegBtn;
