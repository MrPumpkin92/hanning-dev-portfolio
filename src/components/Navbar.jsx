import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'; // We'll create this CSS module for specific nav styles

const Navbar = () => {
    return (
        <div className={classes.navWrapper}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <img src="/backend/wei.png" alt="Logo" style={{ height: '40px', borderRadius: '50%' }} />
                </div>
                <ul className={classes.navLinks}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
