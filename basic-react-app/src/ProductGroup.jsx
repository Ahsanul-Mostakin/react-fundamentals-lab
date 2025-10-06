import Product from "./Product";

export default function ProductGroup() {
  let styles = {
    height: "300px",
    width: "100%",
    border: "2px solid black",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Product title="Samsung Galaxy" desc="Better than iphone" />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
