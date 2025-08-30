"use client"; 

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import "@/styles/globals.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-cream shadow-sm">
      <div className="container">
        {/* Logo izquierda */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image 
            src="/images/logo-completo.png" 
            alt="Logo" 
            width={200}
            height={58}
            className="me-2"
          />
        </Link>

        {/* Botón hamburguesa para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links centro + login & dropdown derecha */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Enlaces centro */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Soluciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">Planes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">Testimonios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contacto</Link>
            </li>
          </ul>

          {/* Derecha */}
          <div className="d-flex align-items-center gap-2">
            {/* Botón login */}
            <Button type="action">
              Login
            </Button>

            {/* Dropdown idioma */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🌐 Idioma
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item">🇪🇸 Español</button></li>
                <li><button className="dropdown-item">🇺🇸 English</button></li>
                <li><button className="dropdown-item">🇧🇷 Português</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;