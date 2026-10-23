'use client';

import React from 'react';
import Link from 'next/link';
import { Masthead } from '@/components/Masthead';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-banner banner-home">
        <Masthead />
        <div className="w-layout-blockcontainer banner-inner banner-inner-home w-container">
          <h1 className="banner-title text-shadow-large text-color-tan">
            {t.home.title}
          </h1>
          <h4 className="text-color-green-dark banner-subtitle">
            {t.home.subtitle}
          </h4>
        </div>
      </section>

      <section className="content">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="w-row">
            <div className="w-col w-col-6">
              <h2>{t.home.sec1Heading}</h2>
              <p>{t.home.sec1Text}</p>
              <div className="w-layout-vflex button-holder btn-holder-left">
                <Link href="/engage" className="btn btn-secondary btn-small w-button">
                  {t.home.sec1Btn}
                </Link>
              </div>
            </div>
            <div className="w-col w-col-6">
              <div className="image-holder image-holder-no-border">
                <img
                  src="/assets/65e78163e4fab4861efd135b_unwrap.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 192px, (max-width: 767px) 384px, (max-width: 991px) 240px, 320px"
                  srcSet="/assets/65e78163e4fab4861efd135b_unwrap-p-500.jpg 500w, /assets/65e78163e4fab4861efd135b_unwrap-p-800.jpg 800w, /assets/65e78163e4fab4861efd135b_unwrap.jpg 1000w"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content bg-martinique">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <div className="w-row">
            <div className="w-col w-col-6">
              <div className="image-holder">
                <img
                  src="/assets/65e7625f9117faf423ae2a0c_target.jpg"
                  loading="lazy"
                  width={500}
                  sizes="(max-width: 479px) 182px, (max-width: 767px) 374px, (max-width: 991px) 230px, 310px"
                  alt=""
                  srcSet="/assets/65e7625f9117faf423ae2a0c_target-p-500.jpg 500w, /assets/65e7625f9117faf423ae2a0c_target-p-800.jpg 800w, /assets/65e7625f9117faf423ae2a0c_target.jpg 1000w"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-col w-col-6">
              <h2 className="text-color-green text-shadow-large">
                {t.home.sec2Heading}
              </h2>
              <p className="p-reverse text-color-tan text-shadow">
                {t.home.sec2Text}
              </p>
              <div className="w-layout-vflex button-holder btn-holder-left">
                <Link href="/company" className="btn btn-secondary btn-alt btn-small w-button">
                  {t.home.sec2Btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content bg-pink-dark">
        <div className="w-layout-blockcontainer section-container-basic w-container">
          <h2 className="header-leadin text-center">{t.home.missionHeading}</h2>
          <p className="p-huge p-reverse text-center text-color-tan">
            {t.home.missionText}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
