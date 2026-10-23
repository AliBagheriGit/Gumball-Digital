'use client';

import React from 'react';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-banner banner-connect">
        <Masthead />
        <div className="w-layout-blockcontainer banner-inner w-container">
          <h1 className="banner-title text-shadow-large text-color-green">
            {t.contact.title}
          </h1>
        </div>
      </section>

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="w-row">
            <div className="w-col w-col-5">
              <p>{t.contact.intro1}</p>
              <h3>{t.contact.readyHeading}</h3>
              <p>{t.contact.intro2}</p>
            </div>
            <div className="w-col w-col-7">
              <div id="get-started" className="module bg-white box-shadow no-gutter">
                <h2 className="no-top-margin text-color-pink-dark">
                  {t.contact.formHeading}
                </h2>
                <p className="p-small">{t.contact.formSubtitle}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  );
}

