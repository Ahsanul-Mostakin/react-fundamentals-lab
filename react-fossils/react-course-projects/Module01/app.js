/*
 *
 *  <div id ="parent">
 *     <div id="child1">
 *        <h1>Child 1</h1>
 *        <h2>Child 1</h2>
 *     </div>
 *   </div>
 *   ReactElement => object => Becomes HTML that browser can understand
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm Child 1"),
    React.createElement("h2", {}, "I'm Child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm Child 1"),
    React.createElement("h2", {}, "I'm Child 1"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello world from React!"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
