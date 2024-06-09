import { NavLink } from "react-router-dom";

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Analytics", path: "/analytics" },
];

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                {navLinks.map((navLink, index) => {
                    const { id, name, path } = navLink;
                    return (
                        <li key={id} className='nav__item'>
                            <NavLink to={path} className='nav__link'>
                                {name}{" "}
                            </NavLink>
                            {index < navLinks.length - 1 ? <span>|</span> : ""}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Navbar;
