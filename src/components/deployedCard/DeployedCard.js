import React from "react";
import "./DeployedCard.scss";
import { Fade } from "react-reveal";

export default function LandingPageCard({ site, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={isDark ? "dark-card-mode site-card-div" : "site-card-div"}
          key={site.id}
          onClick={() => openUrlInNewTab(site.url, site.name)}
        >
          <div className="site-name-div">
            <p className="site-name">{site.name}</p>
          </div>
          <div className="site-image-div">
            <img src={site.image} alt={site.name} className="site-image" />
          </div>
        </div>
      </div>
    </Fade>
  )
}
