import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    message: "",
    rating: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          placeholder="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <br />
        <br />
        <input
          type="number"
          placeholder="5"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
