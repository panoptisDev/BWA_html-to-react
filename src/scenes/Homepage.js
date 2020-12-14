import React from "react";
import Fade from "react-reveal/Fade";

import Section from "elements/Section";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

import HeroImage from "assets/images/hero-image.png";
import Feature01 from "assets/images/feature-tile-icon-01.svg";
import Feature02 from "assets/images/feature-tile-icon-02.svg";
import Feature03 from "assets/images/feature-tile-icon-03.svg";

export default function Homepage() {
  const features = [
    {
      imgSrc: Feature01,
      imgAlt: "Feature tile icon 01",
      title: "Fastest Course",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: Feature02,
      imgAlt: "Feature tile icon 02",
      title: "Forever Access",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: Feature03,
      imgAlt: "Feature tile icon 03",
      title: "Complete Class Task",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={200}>
                  <h1 className="mt-0 mb-16" data-reveal-delay="200">
                    Landing template for startups
                  </h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={400}>
                    <p className="mt-0 mb-32" data-reveal-delay="400">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                <Fade bottom delay={800}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMS={index * 500}
                    data={feature}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
