import React from "react";

function Sushi({ sushi, onEatSushi, moneyTotal }) {

  function handleClick() {
    if(moneyTotal >= sushi.price){
      onEatSushi(sushi.price);
      sushi.img_url="";
    }
  }


  return (
    <div className="sushi">
      <div className="plate" >
        {!sushi.img_url ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
            onClick={handleClick}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
