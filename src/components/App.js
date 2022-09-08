import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [plates, setPlates] = useState([]);
  const [moneyTotal, setMoneyTotal] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setSushi(data))
  }, []);

  function handleEatSushi(money) {
    setMoneyTotal(moneyTotal - money)
    setPlates([...plates, money]);
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatSushi={handleEatSushi} moneyTotal={moneyTotal} />
      <Table plates={plates} moneyRemaining={moneyTotal} />
    </div>
  );
}

export default App;
