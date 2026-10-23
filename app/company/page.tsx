'use client';

import React from 'react';
import Link from 'next/link';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function CompanyPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-banner banner-company">
        <Masthead />
        <div className="w-layout-blockcontainer banner-inner banner-inner-company w-container">
          <h2 className="header-leadin text-color-green text-shadow-large">
            {t.company.badge}
          </h2>
          <h1 className="banner-title text-color-pink no-top-margin text-shadow-large">
            {t.company.title}
          </h1>
        </div>
      </section>

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="no-column">
            <p className="p-large">{t.company.intro}</p>
          </div>
        </div>
      </section>

      <section className="content bg-martinique">
        <div className="w-layout-blockcontainer section-container-basic section-header w-container">
          <div className="no-column">
            <h2 className="text-color-green">{t.company.journeyHeading}</h2>
            <p className="p-reverse text-color-tan">{t.company.journeySubtitle}</p>
          </div>
        </div>

        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="no-column">
            <div className="w-layout-hflex flex-block-6">
              <div className="w-layout-vflex bio-photo-wrapper">
                <div className="w-layout-vflex flex-center">
                  <a
                    href="https://www.linkedin.com/in/suryameetsingh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-bubble w-inline-block"
                  >
                    <img
                      src="/assets/65e21814df4c116a6d761bc3_Surya-Singh.jpg"
                      loading="lazy"
                      width={400}
                      sizes="(max-width: 479px) 84vw, (max-width: 767px) 65vw, 184px"
                      alt={t.company.suryaName}
                      srcSet="/assets/65e21814df4c116a6d761bc3_Surya-Singh-p-500.jpg 500w, /assets/65e21814df4c116a6d761bc3_Surya-Singh.jpg 800w"
                      className="image-bubble-photo"
                    />
                  </a>
                  <h4 className="no-margin text-color-tan">{t.company.suryaName}</h4>
                  <p className="p-small">
                    <em className="text-color-green-dark">{t.company.suryaRole}</em>
                  </p>
                </div>

                <div className="w-layout-vflex flex-center">
                  <a
                    href="https://bensmith.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-bubble w-inline-block"
                  >
                    <img
                      src="/assets/65e2181591a38e7cd99f775a_ben-smith.jpg"
                      loading="lazy"
                      width={400}
                      sizes="(max-width: 479px) 84vw, (max-width: 767px) 65vw, 184px"
                      alt={t.company.benName}
                      srcSet="/assets/65e2181591a38e7cd99f775a_ben-smith-p-500.jpg 500w, /assets/65e2181591a38e7cd99f775a_ben-smith.jpg 800w"
                      className="image-bubble-photo"
                    />
                  </a>
                  <h4 className="no-margin hide-link text-color-tan">{t.company.benName}</h4>
                  <p className="p-small">
                    <em className="text-color-green">{t.company.benRole}</em>
                  </p>
                </div>
              </div>

              <div className="w-layout-vflex flex-block-7">
                <h3 className="text-color-pink">{t.company.storyHeading}</h3>
                <p className="p-reverse text-color-tan">
                  {t.langName === 'English' ? (
                    <>
                      This narrative unfolds with the visionary leadership of{' '}
                      <a
                        href="https://www.linkedin.com/in/suryameetsingh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-alt"
                      >
                        Surya Singh
                      </a>
                      , CEO, and{' '}
                      <a
                        href="https://bensmith.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-alt"
                      >
                        Ben Smith
                      </a>
                      , Chief Strategy Officer—two individuals whose passion and profound expertise in
                      online marketing are the bedrock of their success.
                    </>
                  ) : (
                    t.company.storyP1
                  )}
                </p>
                <p className="p-reverse text-color-tan">{t.company.storyP2}</p>
                <p className="p-reverse text-color-tan">{t.company.storyP3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content bg-tan">
        <div className="w-layout-blockcontainer section-container-basic section-header text-center w-container">
          <h2 className="header-leadin text-color-pink">{t.company.valuesBadge}</h2>
          <h2 className="no-margin">{t.company.valuesTitle}</h2>
        </div>
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <p className="p-large text-center">{t.company.valuesSubtitle}</p>
          <div className="w-layout-grid values-grid">
            {t.company.values.map((val, idx) => (
              <div key={idx} className="module text-center box-shadow-small bg-white">
                <h3 className="text-color-green-dark">{val.title}</h3>
                <p className="p-small">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content bg-pink-dark">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <h2 className="text-center text-color-tan">{t.company.whyChooseTitle}</h2>
          <p className="text-center p-reverse text-color-tan">{t.company.whyChooseBody}</p>
          <div className="button-holder">
            <Link href="/contact" className="btn btn-secondary btn-reverse w-button">
              {t.company.workWithUsBtn}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

