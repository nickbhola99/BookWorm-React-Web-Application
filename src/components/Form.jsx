import {useState, useEffect} from "react";
import "./Form.css"
export default function Form(props){
//Form component for searching books
  const [formData, setFormData] = useState({
    search: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.booksearch(formData.search);
  };
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={formData.search}
          className="inputField"
          placeholder="Enter A Book Title"
        />
        <div>
        <input type="submit" value="Search" />  
        </div>
        
      </form>
    </div>
    );
  };