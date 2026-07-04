import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Binod" age={17} />
      <Card user="Bishal" age={18} />
    </div>
  );
};

export default App;
