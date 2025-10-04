import { NavLink, Outlet } from "react-router";

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
                <p>Marvel App - 2025</p>
            </footer>
        </>
    );
};

export default Layout;