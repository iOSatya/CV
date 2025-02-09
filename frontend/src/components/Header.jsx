import { NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {

  return ( <> 
  
    <div className="flex flex-row">
      <NavLink to='/' className={({ isActive }) => [isActive && styles['active-link'], styles['nav-button']].join(' ')}>Home</NavLink>
      <NavLink to='/about' className={({ isActive }) => [isActive && styles['active-link'], styles['nav-button']].join(' ')}>About</NavLink>
    </div>
  
  </> );

}