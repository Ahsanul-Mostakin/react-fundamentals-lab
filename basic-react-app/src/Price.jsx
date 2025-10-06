export default function Price({ oldprice, newprice }) {
  let styles = {
    textDecoration: "line-through",
  };
  return (
    <div>
      <span style={styles}>{oldprice}</span>
      &nbsp; &nbsp; &nbsp;
      <span>{newprice}</span>
    </div>
  );
}
