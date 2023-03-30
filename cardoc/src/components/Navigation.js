import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <nav class="navbar navbar-secondary navbar-expand-lg bg-light sticky-top">
          <div class="container-fluid">
            <Link class="navbar-brand navbar-links" to="/">
              CarDoc
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-sm-0 p-2">
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
