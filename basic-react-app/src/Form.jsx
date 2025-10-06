function handleForm(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

export default function Form() {
  return (
    <div>
      <form onSubmit={handleForm}>
        <button>Submit</button>
      </form>
    </div>
  );
}
