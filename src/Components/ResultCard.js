import Phonetics from "./Phonetics";
import PartOfSpeech from "./PartOfSpeech";
import Definitions from "./Definitions";
import "./ResultCard.css";

//From searchBar - to display results
const ResultCard = ({ word, meanings, phonetics }) => {
  const partOfSpeech = meanings.map((m) => m.partOfSpeech);
  const definitions = [];

  //to split the array into their own
  meanings.forEach((m) => {
    m.definitions.forEach((d) => {
      definitions.push(d);
    });
  });

  return (
    <div>
      <div className="words">
        {word}
        <Phonetics phonetics={phonetics} />
      </div>
      <PartOfSpeech partOfSpeech={partOfSpeech} />
      <Definitions definitions={definitions} />
    </div>
  );
};

export default ResultCard;
