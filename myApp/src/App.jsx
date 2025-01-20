const App = () => {
  const x = 2;
  const y = 4;
  const fname = "Utkarsh";
  const lname = "Gupta";
  const isLive = true;
  return (
    <div>
      <h1>My First Component</h1>
      <h2>Hello World</h2>
      <h3>Aman Yadav</h3>
      <p>Kanpur waley</p>

      {x + y}
      <b>{fname + " " + lname}</b>

      {isLive && <h2>Contest is live</h2>}
    </div>
  );
};

export default App;
