import "./standardPlaceholder.css";

function StandardPlaceholder({ src, link }: any) {
  return (
    <div className="standard_placeholder_container">
      <a href={link}>
        <img src={src} alt="navigation" />
      </a>
    </div>
  );
}

export default StandardPlaceholder;
