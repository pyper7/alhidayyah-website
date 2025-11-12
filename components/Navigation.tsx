"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/get-involved", 
      label: "Get Involved",
      submenu: [
        { href: "/orphanage", label: "Orphanage" },
        { href: "/dawah", label: "Dawah" },
      ]
    },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/rihad-saliheen-school", label: "Rihad Saliheen School" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group gap-3 fade-in">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="/images/logo.jpg"
                alt="AL-Hidayyah Islamic Foundation Logo"
                fill
                className="object-contain drop-shadow-sm"
                priority
                sizes="56px"
                unoptimized
              />
            </div>
            <div className="relative">
              <span className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 tracking-tight">
                AL-Hidayyah
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 relative group rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-3/4 transition-all duration-500"></span>
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 transform translate-y-2 group-hover:translate-y-0">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 rounded-lg mx-2"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/donate"
              className="ml-4 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Donate</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-text hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 px-2 text-base font-medium text-text hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block py-2.5 px-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/donate"
              className="block mt-4 mx-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3.5 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

