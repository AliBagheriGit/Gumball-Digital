'use client';

import React from 'react';
import Link from 'next/link';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function EngagePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-banner banner-engage">
        <Masthead />
        <div className="w-layout-blockcontainer banner-inner banner-inner-engage w-container">
          <h2 className="header-leadin text-color-green text-shadow-large">
            {t.engage.badge}
          </h2>
          <h1 className="banner-title text-color-pink no-margin text-shadow-large">
            {t.engage.title}
          </h1>
        </div>
      </section>

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="no-column">
            <p>{t.engage.intro}</p>
          </div>
        </div>
      </section>

      <section className="content bg-east-bay">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="columns-7-5 w-row">
            <div className="w-col w-col-7">
              <h2 className="header-leadin text-color-green">{t.engage.advLeadin}</h2>
              <h2 className="no-top-margin text-color-tan">{t.engage.advTitle}</h2>
              <div className="spacer-2em" />
              <p className="p-reverse text-color-tan">{t.engage.advText}</p>
            </div>
            <div className="w-col w-col-5">
              <div className="image-holder box-shadow-large">
                <img
                  src="/assets/65e7625f9117faf423ae2a0c_target.jpg"
                  loading="lazy"
                  width={500}
                  sizes="(max-width: 479px) 182px, (max-width: 767px) 42vw, (max-width: 991px) 230px, 310px"
                  alt=""
                  srcSet="/assets/65e7625f9117faf423ae2a0c_target-p-500.jpg 500w, /assets/65e7625f9117faf423ae2a0c_target-p-800.jpg 800w, /assets/65e7625f9117faf423ae2a0c_target.jpg 1000w"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="module">
            <h3 className="text-center">{t.engage.advCtaTitle}</h3>
            <p className="text-center">{t.engage.advCtaSub}</p>
            <div className="w-layout-hflex button-holder">
              <Link href="/contact" className="btn btn-alt w-button">
                {t.engage.getStarted}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content bg-green-dark">
        <div className="w-layout-blockcontainer section-container-basic section-header w-container" />
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="columns-5-7 w-row">
            <div className="w-col w-col-5">
              <div className="image-holder image-holder-alt-border box-shadow-large">
                <img
                  src="/assets/65e7678ab3d7908c7af8e7d3_exclusive.jpg"
                  loading="lazy"
                  width={500}
                  sizes="(max-width: 479px) 182px, (max-width: 767px) 42vw, (max-width: 991px) 230px, 310px"
                  alt=""
                  srcSet="/assets/65e7678ab3d7908c7af8e7d3_exclusive-p-500.jpg 500w, /assets/65e7678ab3d7908c7af8e7d3_exclusive-p-800.jpg 800w, /assets/65e7678ab3d7908c7af8e7d3_exclusive.jpg 1000w"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-col w-col-7">
              <h2 className="text-color-pink headling-leadin">
                <strong className="header-leadin text-color-martinique">
                  {t.engage.pubLeadin}
                </strong>
              </h2>
              <h2 className="no-top-margin text-color-tan">{t.engage.pubTitle}</h2>
              <div className="spacer-2em" />
              <p className="p-reverse text-color-tan">{t.engage.pubText}</p>
            </div>
          </div>
        </div>

        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="module">
            <h3 className="text-center">{t.engage.pubCtaTitle}</h3>
            <p className="text-center">{t.engage.pubCtaSub}</p>
            <div className="w-layout-hflex button-holder">
              <Link href="/contact" className="btn btn-secondary w-button">
                {t.engage.getStarted}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

