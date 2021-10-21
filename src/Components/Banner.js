import RandomWord from "./RandomWord";
import Subtitle from "./Subtitle";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner dark:bg-black">
      <Subtitle />
      <div className="randomWord animate__animated animate__fadeInRight">
        <RandomWord />
      </div>
    </div>
  );
};

export default Banner;
