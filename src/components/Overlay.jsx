import { useState } from "react";
import "./Overlay.css";
//creates overlay effect, a second page that displays more informmation on books like its description and publisher
export default function Overlay({ props }) {
  const [isVisible, setIsVisible] = useState(false);
  //overlay toggle
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  //function to redirect to the book's Google Books page
  const buttonLink = () => {
    window.open(props.volumeInfo.canonicalVolumeLink, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="overlay-page">
      <button onClick={toggle}>
        {isVisible ? "Show Less" : "See More"}
      </button>
      {isVisible && <div className="overlay" onClick={toggle}></div>}
      {isVisible && (
        <div className="overlay-content">
            <img src={props.volumeInfo.imageLinks.smallThumbnail} style={{border: "solid chocolate"}} /> 
          <h1>{props.volumeInfo.title}</h1>
          <h2>{props.volumeInfo.authors.map(author => (
                <div>{author}</div>
            ))}</h2>
            <h3>{props.volumeInfo.subtitle}</h3>
          <h4>
            {props.volumeInfo.publisher}
            <span>{props.volumeInfo.publishedDate}</span>
          </h4>
          <p>{props.volumeInfo.description}</p>
          <br />
          <button onClick={buttonLink}>Click Here For Store Options!</button>
        </div>
      )}
    </div>
  );
}

