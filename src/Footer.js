import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p class="text-center mt-5">
      This project was coded by{" "}
      <a href="mailto:silvialeelee7@gmail.com" class="footer-link">
        Silvia Lee
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/ishilbi/weather"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
      >
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
      >
        Netlify
      </a>
    </p>
  );
}
