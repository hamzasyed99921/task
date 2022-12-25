import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-center text-lg-start text-white"
        style={{ backgroundColor: "#172026" }}
      >
        <div className="container">
          <div className="row list">
            <div className="col-md-3 col-12">
              <ul className="list-unstyled">
                <p>General</p>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Telemetry</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Build</a>
                </li>
                <li>
                  <a href="#">Grants and Bounties</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <ul className="list-unstyled">
                <p>Technology</p>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Staking</a>
                </li>
                <li>
                  <a href="#">XCM</a>
                </li>
                <li>
                  <a href="#">Parachains</a>
                </li>
                <li>
                  <a href="#">Token</a>
                </li>
                <li>
                  <a href="#">Substrate</a>
                </li>
                <li>
                  <a href="#">Lightpaper</a>
                </li>
                <li>
                  <a href="#">Whitepaper</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <ul className="list-unstyled">
                <p>Community</p>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Academy</a>
                </li>
                <li>
                  <a href="#">Auctions</a>
                </li>
                <li>
                  <a href="#">Treasury</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Brand Assets</a>
                </li>
                <li>
                  <a href="#">Element Chat</a>
                </li>
                <li>
                  <a href="#">Medium</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12 icons px-4">
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <a href="#">
                    <BsTwitter
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaDiscord
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsGithub
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsYoutube
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsReddit
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
              </ul>
              <p>
                Subscribe to the newsletter to hear about Polkadot updates and
                events.
              </p>
              <button href="#"> Subscribe</button>
            </div>
          </div>
          <div className="mt-4 d-flex align-items-center">
            <div className="w-25">
              <img
                src="assets/images/footer_logo.svg "
                className="img-fluid w-75"
                alt=""
              />
            </div>
            <div className="" style={{ color: "#b7b8bb" }}>
              <strong>
                © 2022 Web3 Foundation | Impressum | Disclaimer | Privacy
              </strong>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer