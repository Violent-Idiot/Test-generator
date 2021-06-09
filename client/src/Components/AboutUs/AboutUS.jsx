import React from "react";
import styles from "./About.module.css";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className={styles.Main}>
      <Fade>
        <div className={styles.Description}>
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            cursus pharetra, sociis sagittis commodo consectetur massa. Diam
            lorem aliquet nisl tellus id dapibus egestas. Lorem at sed
            condimentum eget nibh malesuada pharetra. Risus iaculis vitae,
            malesuada arcu, risus porta.
          </p>
        </div>
      </Fade>

      <div className="Columns"></div>
      <div className={styles.Socials}>
        <p>FIND US</p>
        <a href="">
          <i className={styles.icons}>
            <FaInstagram />
          </i>
        </a>
        <a href="">
          <i className={styles.icons}>
            <FaTwitter />
          </i>
        </a>
        <a href="">
          <i className={styles.icons}>
            <FaLinkedin />
          </i>
        </a>
      </div>
    </div>
  );
};
export default About;
