export default function Product({ title, desc }) {
  let styles = {
    border: "2px solid  black",
    height: "200px",
    width: "200px",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <h4>Price</h4>
      <button>Order Now</button>
    </div>
  );
}
