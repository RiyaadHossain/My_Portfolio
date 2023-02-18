import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 container mx-auto sticky top-0 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-xl font-thin">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl font-thin">
                About
              </Link>
            </li>
            <li>
              <Link to="/skill" className="text-xl font-thin">
                Skill
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-xl font-thin">
                Portfolio
              </Link>
              <Link className="text-xl font-thin" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl font-thin">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="/"
          to="/"
          class="text-white title2 normal-case font-bold text-base lg:text-2xl"
        >
          Riyad Hossain
        </a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="text-xl font-thin">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl font-thin">
              About
            </Link>
          </li>
          <li>
            <Link to="/skill" className="text-xl font-thin">
              Skill
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-xl font-thin">
              Portfolio
            </Link>
            <Link className="text-xl font-thin" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl font-thin">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
