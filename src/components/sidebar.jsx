import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.png)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Iwamoto Yuki</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> iyuki723@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="skype:AmazingDev?chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-skype" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/fcEkjzSb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-discord" />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/ddbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://www.linkedin.com/in/dbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://github.com/Cheetah0723"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://quidverse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2"></i>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Something coming soon !!</small>
              </p>
            </div> */}
          </aside>
        </div>
      </div>
    );
  }
}
