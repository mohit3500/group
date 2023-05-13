import { Link } from 'react-router-dom';
import './navLinks.css';

const NavLink = () => {
  return (
    <ul className="navlist">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Features</Link>{' '}
      </li>
      <li>
        <Link to="/">Contact us</Link>{' '}
      </li>
      <li>
        <button className="btn">
          <Link to="/" id="login">
            Log in
          </Link>
        </button>
      </li>
      <li>
        <button className="btn">
          <Link to="/" id="signup">
            Sign up
          </Link>
        </button>
      </li>
    </ul>
  );
};
export default NavLink;
