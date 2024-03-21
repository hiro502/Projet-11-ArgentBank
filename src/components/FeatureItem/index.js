import "./style.css"

export default function FeatureItem ({ imageUrl, title, text }){
  return (
    <div className="feature-item">
      <img src={imageUrl} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

