import React from "react";
import "./App.css";
import img from "./assets/sound_on.jpeg";

function App() {
  const videoUrl =
    "https://embed.wistia.com/deliveries/16d2f2843a3e43c08e3e4e4939a72866.bin";
  return (
    <>
      <div className="container">
      <div className="black-header"></div>
        <div className="title">
          <h1>
            <span>“7-Minute Trick Turns My Phone Into A </span>
            <span className="highlight">$500/Day ATM Machine"</span>
          </h1>
        </div>

        <div className="video-container">
           <iframe
            className="video-player"
            src={videoUrl}
            title="Wistia video player"
            allow="autoplay; "
            width="100%"
            height="445"

          ></iframe>
        </div>

        <div className="important-notice">
          <p>
            <img src={img} alt="Important Icon" style={{ width: "24px" }} />
            <span style={{ color: "#d0190d" }}>IMPORTANT: </span> Make sure your
            sound is on.
            <br />
            Please allow the video up to 10 seconds to load.
          </p>
        </div>
      </div>
      <hr style={{ border: "0.3 grey", width: "100%" }} />
      <footer className="flt">
        <div className="container b">
          <p>
            <a
              href="/TOS/TermsAndPrivacyPolicy.html"
              target="_blank"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Privacy Policy &amp; Terms Of Service |{" "}
            </a>
            <a
              href="/cdn-cgi/l/email-protection#25565055554a575165554a464e4051564c5f40414451480b464a48"
              style={{ color: "#000", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "20px",
              color: "#333",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Copyright © <span id="cyear">2024</span> The Pocket Sized ATM
            Machine. All Right Reserved.
          </p>
          <p style={{ fontSize: "13px" }}>
            This site is not a part of the Facebook Inc. Additionally, this site
            is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of
            FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
