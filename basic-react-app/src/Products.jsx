import "./Products.css";

export default function Product({ title, price, features }) {
  return (
    <div className="product">
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p style={{ backgroundColor: "green" }}>
        {price >= 1000 ? "Discount 5%" : null}
      </p>
    </div>
  );
}
