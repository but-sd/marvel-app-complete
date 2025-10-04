import { NavLink, Outlet } from "react-router";
import { version } from '../package.json';

const Layout = () => {
    return (
        <>
            <header>
                <h1>Marvel App</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>-
                    <NavLink to="/about">About</NavLink>-
                    <NavLink to="/contact">Contact</NavLink>-
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Marvel App - { version } </p>
            </footer>
        </>
    );
};

export default Layout;