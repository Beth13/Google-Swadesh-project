import { Link } from "react-router-dom";
import "../../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/" className="navigation__item">
          Головна
        </Link>
        <Link to="/form" className="navigation__item">
          Форма
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
