import "./Products.css";

export default function Product({ title, price, features }) {
  return (
    <div className="product">
      <h1>{title}</h1>
      <p>{price}</p>
      <ul>
        {Array.isArray(features) && features.length > 0 ? (
          features.map((feature, index) => <li key={index}>{feature}</li>)
        ) : (
          <li>No features available</li>
        )}
      </ul>
    </div>
  );
}
