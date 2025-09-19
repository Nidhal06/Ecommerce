import { useState } from 'react';
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.png'
import expandmore from '../../assets/more.svg'

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className='navprofile' />
        <img
        src={expandmore}
        alt=""
        onClick={toggleDropdown}
        className={isDropdownOpen ? 'expandmore open' : 'expandmore'}
      />

      {isDropdownOpen && (
        <ul className="dropdown-list">
          <li className='facebook'>
            <a href="https://www.facebook.com/nidhal.gharbi.581?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> &nbsp;<span>Facebook</span>
            </a>
          </li>
          <li className='instagram'>
            <a href="https://www.instagram.com/nidhall_gharbi?igsh=MTBzenB5bG01YXA0Ng==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> &nbsp;<span>Instagram</span>
            </a>
          </li>
          <li className='email'>
            <a href="mailto:nidhalgharbi5@gmail.com">
              <i className="far fa-envelope"></i> &nbsp;<span>Email</span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Navbar