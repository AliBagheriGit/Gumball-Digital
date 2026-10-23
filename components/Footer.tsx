'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

interface FooterProps {
  showCta?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showCta = true }) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <section className="footer-global">
      <div className="w-layout-blockcontainer footer-container w-container">
        <div className="footer-columns-top w-row">
          <div className="w-col w-col-5 w-col-stack w-col-small-small-stack">
            <div className="w-layout-hflex flex-block-3">
              <p className="tagline-footer">
                <em>{t.footer.tagline}</em>
              </p>
              <img
                src="/assets/65df8bd9319569c13b6d17a7_gumball-bug.svg"
                loading="lazy"
                width={80}
                height={40}
                alt={t.brand}
                className="logo-bug"
              />
            </div>
          </div>

          <div className="w-col w-col-7 w-col-stack w-col-small-small-stack">
            {showCta ? (
              <div className="w-layout-hflex cta-footer box-shadow-large">
                <h3 className="no-margin">{t.footer.readyTitle}</h3>
                <Link href="/contact" className="btn btn-alt w-button">
                  {t.footer.letsConnect}
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-row">
          <div className="w-col w-col-5">
            <p className="footer-text">{t.footer.copyright}</p>
          </div>
          <div className="column w-col w-col-7">
            <div className="w-layout-hflex nav-footer">
              <Link
                href="/terms"
                className={`nav-footer-link footer-text w-inline-block ${
                  pathname === '/terms' ? 'w--current' : ''
                }`}
              >
                <div>{t.footer.terms}</div>
              </Link>
              <Link
                href="/privacy"
                className={`nav-footer-link footer-text w-inline-block ${
                  pathname === '/privacy' ? 'w--current' : ''
                }`}
              >
                <div>{t.footer.privacy}</div>
              </Link>
              <Link
                href="/ccpa"
                className={`nav-footer-link footer-text w-inline-block ${
                  pathname === '/ccpa' ? 'w--current' : ''
                }`}
              >
                <div className="text-block-4">{t.footer.ccpa}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

