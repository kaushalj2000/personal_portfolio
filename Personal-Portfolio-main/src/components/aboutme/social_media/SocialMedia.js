import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si"; // Import the Gmail icon
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://github.com/kaushalj2000"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/kaushaljavangula/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="mailto:kaushal.javangula@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiGmail />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
