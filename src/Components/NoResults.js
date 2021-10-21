const NoResults = ({ title, message, resolution }) => {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="notFound">{message}</p>
      <p className="resolution">{resolution}</p>
    </div>
  );
};

export default NoResults;
