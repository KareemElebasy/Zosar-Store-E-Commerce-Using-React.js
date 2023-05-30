import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Reach at..</h4>
              <div className="contact_link_box">
                <div>
                  <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                  <span>Cairo , Egypt</span>
                </div>
                <div>
                  <i className="fa fa-phone me-2" aria-hidden="true"></i>
                  <span>01017151750</span>
                </div>
                <div>
                  <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                  <span>kareemelebasy@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <p className="footer-logo">ZOSAR STORE</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cupiditate ab deleniti nihil eaque necessitatibus
                error eligendi nulla iste illo libero qui, iusto quas unde quis
                pariatur nam, quia esse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
