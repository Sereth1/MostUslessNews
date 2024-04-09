import { Link } from "react-router-dom";
import "../../css/text.css";
import "../../css/Btn.css";

function Intro() {
  return (
    <div>
      <div className="pixelated sizes" style={{ padding: 120 }}>
        <h1>
          Welcome to "The Most Useless News," where we serve up the world's
          useless news. Get ready for posts that will make you laugh, groan, and
          shake your head at the world's foolishness. Dive into stories so
          bizarre, you'll wonder why they're even news. Join us for a wild ride
          through human silliness—laughter is guaranteed, and face-palming is
          likely.
        </h1>
      </div>

      <div className="pixelated sizes" style={{ marginTop: 100 }}>
        <h1>
          This blog it's only for people that they are a little bit more special
          than the others
        </h1>
      </div>
      <div className="center">
        <Link className="pixelated but " to="/register">
          <h1>Register</h1>
        </Link>
        <Link className="pixelated but" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Intro;
