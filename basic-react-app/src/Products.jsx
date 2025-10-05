import "./Products.css";

export default function Product({ title, price, features }) {
  let styles = {
    backgroundColor: "red",
  };

  return (
    <div className="product" style={styles}>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p style={{ backgroundColor: "yellow" }}>
        {price >= 1000 ? "Discount 5%" : null}
      </p>
    </div>
  );
}
