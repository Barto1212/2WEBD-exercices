function App() {
  const users = ["pierre", "jonhy", "bill", "polo"];
  const htmlUserList = users.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h2>Les utilisateurs connectés sont :</h2>
      <ul>{htmlUserList}</ul>
    </>
  );
}

export default App;
