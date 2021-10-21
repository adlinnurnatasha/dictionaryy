import Footer from "./Footer";
import ContributorList from "./ContributorList";
import "./About.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="about_us">
        About One Dictionary
        <div className="about_content">
          <p>
            For only 3 days, no food, no sleep, One Dictionary has been
            Besquare’s leading provider of language information. Each day, our
            award-winning website offer guidance to fifty-ish besquare visitors.{" "}
          </p>
          <p>
            One Dictionary services are backed by small team of beginner
            developers - also dictionary editors and writers, in Besquare.
          </p>
          <p>
            Thanks for expanding your ‘wor
            <span style={{ fontWeight: "bold" }}>l</span>d’ with us.
          </p>
        </div>
      </div>
      <div className="contributors">
        Contributors
        <ContributorList />
      </div>
      <Footer />
    </div>
  );
};

export default About;
