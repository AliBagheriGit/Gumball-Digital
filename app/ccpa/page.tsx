'use client';

import React from 'react';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { ccpaData } from '@/lib/legalData';

export default function CcpaPage() {
  const { lang } = useLanguage();
  const data = ccpaData[lang];

  return (
    <>
      <Masthead standalone />

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic section-header w-container">
          <h3 className="header-leadin">{data.badge}</h3>
          <h1 className="no-top-margin">{data.title}</h1>
          <div className="w-richtext">
            <p>{data.intro}</p>

            <h2>{data.rightsHeading}</h2>
            <ul role="list">
              {data.rights.map((r, idx) => (
                <li key={idx}>
                  <strong>{r.title}:</strong> {r.desc}
                </li>
              ))}
            </ul>

            <h2>{data.contactHeading}</h2>
            <p>{data.contactText}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

