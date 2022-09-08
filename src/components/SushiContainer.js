import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onEatSushi, moneyTotal }) {
  const [index, setIndex] = useState(0);

  const sushiDisplay = sushi.slice(index, index + 4);

  function handleClickMore() {
    setIndex(index + 4);
  }


  return (
    <div className="belt">
      {sushiDisplay.map((sushi) => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} moneyTotal={moneyTotal} />)}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
