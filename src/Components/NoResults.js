import "./NoResults.css";

const NoResults = ({ title, message, resolution }) => {
  return (
    <div className="noResults animate__animated animate__bounceIn">
      <p className="title">{title}</p>
      <p className="message">{message}</p>
      <p className="resolution">{resolution}</p>
    </div>
  );
};

export default NoResults;
