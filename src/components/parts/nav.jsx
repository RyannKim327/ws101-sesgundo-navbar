import { Link } from "react-router-dom";
import "./css/nav.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <h3>Sesgundo's Navbar</h3>
      <nav>
        <ul>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </div>
  );
}
