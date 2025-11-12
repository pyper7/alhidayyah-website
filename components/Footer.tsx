"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/3 -left-1/3 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-black/10 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="py-10 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-2">Support The Mission</p>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold leading-tight">
              Ready to make a lasting impact on the muslim ummah?
            </h3>
            <p className="text-white/80 mt-2 max-w-xl">
              Your donation helps us provide authentic Islamic knowledge, quality education, orphan care, and life-changing social support programs.
            </p>
          </div>
          <Link
            href="/donate"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-primary font-semibold shadow-xl shadow-black/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
          >
            Donate Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">AL-Hidayyah</h3>
              <p className="text-sm text-white/80 leading-relaxed mt-3">
                Serving humanity through faith, education, compassion, and dedicated community programs guided by authentic Islamic values.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  { label: "Facebook", href: "#", icon: (
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  )},
                  { label: "Twitter", href: "#", icon: (
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.959-.69 1.8-1.56 2.46-2.549z" />
                  )},
                  { label: "Instagram", href: "#", icon: (
                    <>
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Z" />
                      <path d="M16.987 6.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-4.987 2.55A3.75 3.75 0 1 0 12 17a3.75 3.75 0 0 0 0-7.5Z" />
                    </>
                  )},
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      {item.icon}
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-5">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Dawah", href: "/dawah" },
                { label: "Orphanage", href: "/orphanage" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Charity Works", href: "/charity-works" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-all duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-5">Our Programs</p>
            <ul className="space-y-3">
              {[
                "Widow Support & Relief",
                "Islamic Education & Dawah",
                "Orphanage Care & Development",
                "Rihad Saliheen School",
                "Community Outreach",
                "Emergency Assistance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/80">
                  <svg className="w-4 h-4 mt-1 flex-shrink-0 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Contact</p>
            <div className="space-y-4 text-white/80">
              <div>
                <p className="text-sm font-semibold text-white">Visit Us</p>
                <p className="text-sm leading-relaxed mt-1">123 Main Street, Kano, Nigeria</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Call</p>
                <p className="text-sm leading-relaxed mt-1">+234 (0) 800 0000 000</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <Link href="mailto:info@alhidayyah.org" className="text-sm leading-relaxed mt-1 hover:text-white">
                  info@alhidayyah.org
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/30 text-sm font-semibold text-white/90 hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center sm:text-left sm:flex sm:items-center sm:justify-between text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} Al-Hidayyah Islamic Foundation. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-0 flex items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/donate" className="hover:text-white transition-colors">Support</Link>
            </div>
            <button
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

