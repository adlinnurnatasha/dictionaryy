import RandomWord from "./RandomWord";
import Subtitle from "./Subtitle";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Subtitle />
      <div className="randomWord">
        <RandomWord />
      </div>
    </div>
  );
};

export default Banner;
