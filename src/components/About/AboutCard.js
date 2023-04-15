import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm an english native, a single mum to 2 children. I am an aspiring
            software developer, recently finished a coding bootcamp with Code
            Your Future.
            <br />
            <br />
            Coding is something I find so much joy in...here are some other
            activities I do for fun...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "See the problem, find the fix"{" "}
          </p>
          <footer className="blockquote-footer">EmilyBarton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
