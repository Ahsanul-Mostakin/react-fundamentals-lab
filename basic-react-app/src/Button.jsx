function doSomething() {
  console.log("Toggle");
}

export default function Button() {
  return (
    <div>
      <button onMouseOver={doSomething}>Click Me!</button>
    </div>
  );
}
