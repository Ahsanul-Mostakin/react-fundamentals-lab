import Price from "./Price";

export default function Product({ title, desc, idx }) {
  let styles = {
    border: "2px solid  black",
    height: "200px",
    width: "200px",
    textAlign: "center",
  };

  let oldprices = ["1000", "8000", "2000", "12000"];
  let newprices = ["500", "8300", "1000", "10000"];
  return (
    <>
      <div style={styles}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
        <button>Order Now</button>
      </div>
    </>
  );
}
