import Card from "react-bootstrap/Card";
import Overlay from "./Overlay";
//Books are displayed in a card showing the book's thumbnail, title, and authors, cards also have an Overlay function which displays even more information
export default function BookCard({ props }) {
  let thumbnail =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.smallThumbnail;
    let author = props.volumeInfo.authors;
  if (thumbnail != undefined && author != undefined) {
    return (
      <Card
        style={{
          backgroundColor: "beige",
          color: "black",
          width: "25rem",
          margin: "10px",
          boxShadow: "5px 5px 5px black",
          padding: "10px",
        }}
        key={props.id}
        className="card"
      >
        <Card.Img
          variant="top"
          src={`${thumbnail}/80px80`}
          style={{ border: "solid chocolate" }}
        />
        <Card.Body>
          <Card.Title>{props.volumeInfo.title}</Card.Title>
          <Card.Text>
            {props.volumeInfo.authors.map((author) => (
              <div>{author}</div>
            ))}
          </Card.Text>
          <Overlay props={props} />
        </Card.Body>
      </Card>
    );
  }
}
