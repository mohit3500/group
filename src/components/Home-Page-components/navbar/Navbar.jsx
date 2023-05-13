import NavLinks from '../navlinks/NavLinks';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLinks></NavLinks>
      {/* <button className='btn'><a href='#'>Log in</a></button>
           <button className='btn'><a href='#'>Sign up</a></button> */}
    </nav>
  );
};
export default NavBar;
