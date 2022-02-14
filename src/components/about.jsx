import React, { Component } from "react"

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a senior full-stack web and blockchain developer
                        from Canada with Computer Science as my major. I am more
                        challenged and love exploring new technologies.
                      </p>
                      <p>
                        Recently, I am interested in machine learning and image
                        processing and I started to research. I like mathematics
                        so I like logical projects and development.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my experiences
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p></p>
                    <p>
                      My major stack is MERN
                      <br />I have experience building websites using React,
                      Vue, and Svelte for UI and Node, PHP and Laravel for the
                      backend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Blockchain Development</h3>
                    <p>
                      After I was interested in blockchain, I have built many
                      Cryptogames, cryptocurrencies, and marketplace, with smart
                      contracts, and tokens like ERC21, ERC721, ERC1155 that I
                      have made. The major languages that I used are Solidity,
                      Viper and Rust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Software Development</h3>
                    <p>
                      During freelancer work, I have done many logical projects
                      like Machine Learning and Image Processing using Python,
                      Java, and C/C++/C#.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
