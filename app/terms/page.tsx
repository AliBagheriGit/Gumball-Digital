'use client';

import React from 'react';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { termsData } from '@/lib/legalData';

export default function TermsPage() {
  const { lang } = useLanguage();
  const data = termsData[lang];

  return (
    <>
      <Masthead standalone />

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic section-header w-container">
          <h1>{data.title}</h1>
          <div className="w-richtext">
            <p>
              <strong>{data.lastUpdated}</strong>
            </p>
            <p>{data.intro}</p>

            {data.sections.map((sec, idx) => (
              <React.Fragment key={idx}>
                <h2>{sec.heading}</h2>
                {sec.subheading && <h3>{sec.subheading}</h3>}
                <div style={{ whiteSpace: 'pre-line' }}>{sec.content}</div>

                {sec.definitions && (
                  <>
                    <h3>{sec.definitionsTitle}</h3>
                    <ul role="list">
                      {sec.definitions.map((def, defIdx) => (
                        <li key={defIdx}>
                          <strong>{def.term}:</strong> {def.def}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

