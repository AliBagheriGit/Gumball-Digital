'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

interface MastheadProps {
  standalone?: boolean;
}

export const Masthead: React.FC<MastheadProps> = ({ standalone = false }) => {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContent = (
    <div
      role="banner"
      className={`bubble-masthead w-nav ${standalone ? 'box-shadow-large' : ''}`}
      data-animation="default"
      data-collapse="small"
      data-duration="400"
    >
      <div className="w-layout-blockcontainer masthead-container w-container">
        <Link
          href="/"
          className={`brand w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}
          aria-label={t.brand}
        >
          <img
            src="/assets/65dd6684c0fad5c4f2c4d28b_gumball-logo-reverse.svg"
            loading="lazy"
            width={180}
            height={40}
            alt={t.brand}
            className="logo-masthead"
          />
        </Link>

        <nav
          role="navigation"
          className={`nav-menu w-nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}
        >
          <Link
            href="/engage"
            onClick={() => setMobileMenuOpen(false)}
            className={`nav-link-masthead w-nav-link ${
              pathname === '/engage' ? 'w--current' : ''
            }`}
          >
            {t.nav.engage}
          </Link>
          <Link
            href="/company"
            onClick={() => setMobileMenuOpen(false)}
            className={`nav-link-masthead w-nav-link ${
              pathname === '/company' ? 'w--current' : ''
            }`}
          >
            {t.nav.company}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`nav-link-masthead w-nav-link ${
              pathname === '/contact' ? 'w--current' : ''
            }`}
          >
            {t.nav.contact}
          </Link>

          {/* Interactive Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            className="lang-switcher-btn"
            title={lang === 'en' ? 'تغییر زبان به فارسی' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <span className={`lang-badge ${lang === 'en' ? 'active' : 'inactive'}`}>EN</span>
            <span style={{ opacity: 0.6 }}>|</span>
            <span className={`lang-badge ${lang === 'fa' ? 'active' : 'inactive'}`}>فا</span>
          </button>
        </nav>

        <div
          className="menu-button w-nav-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
        >
          <div className="icon w-icon-nav-menu" />
        </div>
      </div>
    </div>
  );

  if (standalone) {
    return (
      <section className="bubble-masthead-container">
        {navContent}
      </section>
    );
  }

  return navContent;
};

