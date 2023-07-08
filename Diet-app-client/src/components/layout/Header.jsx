import React from "react";
import { toast } from "react-toastify";
import { NavLink, Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";

import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart.js";

function Header() {
  const [auth, setAuth] = useAuth();
  // eslint-disable-next-line
  const [cart, setCart] = useCart();
  // logout function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("LogOut Succesfull");
  };
  return (
    <>
      <div className="bg-dark text-light px-4 py-1 fw-lighter">
        <span style={{ letterSpacing: "0.2em" }}>
          Send Your Query ( Mail-Id : freediet@support.com ){" "}
        </span>
        <span className="float-end">Call us : +012-3456789</span>
      </div>
      <nav className="container-fluid navbar bg-light navbar-expand-md shadow sticky-top bg-nav opacity-75">
        <div className="container text-uppercase fs-6 lh-lg ">
          {/* Logo */}
          <Link className="navbar-brand logo-font">Free Diet Plans</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div
              className="navbar-nav fs-5 ms-auto fw-bold text-black "
              style={{ letterSpacing: "0.2rem" }}
            >
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/home-category" className="nav-link">
                Category
              </NavLink>

              {!auth.user ? (
                <>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/plan" className="nav-link">
                    Plan
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                    className="nav-link"
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="nav-link"
                  >
                    Logout
                  </NavLink>
                  <NavLink to="/cart" className="nav-link">
                    Plan-List
                    <GrCart />
                    <span class="position-realtive top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart?.length}
                    </span>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
