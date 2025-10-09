import { useState } from "react";

export default function MultipleForm() {
  let [formData, setFromData] = useState({
    username: "",
    email: "",
  });
  let handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username, formData.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> username</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          name="username"
          required
        />
        <br />
        <br />
        <label htmlFor="email"> Email</label>
        <br />
        <br />
        <input
          type="email"
          placeholder="enter email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
