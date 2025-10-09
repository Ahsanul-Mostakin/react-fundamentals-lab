const App = () => {
  const city = ["Dhaka", "London", "Kolkata"];
  return (
    <div>
      <ol>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
