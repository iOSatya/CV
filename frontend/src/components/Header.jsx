import { NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {

  return ( <> 

    <div className="flex flex-row justify-center">
      <div className="fixed z-50 flex flex-row w-4/5" style={{backdropFilter: 'blur(2px)'}}>
        <NavLink to='/' className={({ isActive }) => [isActive && styles['active-link'], styles['nav-button']].join(' ')}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => [isActive && styles['active-link'], styles['nav-button']].join(' ')}>About</NavLink>
      </div>
    </div>

  
  </> );

}