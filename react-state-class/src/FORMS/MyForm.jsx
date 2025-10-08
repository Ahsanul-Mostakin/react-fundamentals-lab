import { useState } from "react";

export default function MyForm() {
  let [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
