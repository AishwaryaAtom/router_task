import React from "react";
import All from "./All";
import { Link } from "react-router-dom";

export default function TaskRouter() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-border">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datascience">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fullstack">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cybersecurity">
                CYBER SECURITY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
