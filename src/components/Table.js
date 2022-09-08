import React, {useState} from "react";

function Table({ plates = [], moneyRemaining, onAddCash }) {
  const [value, setValue] = useState('');

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const handleChange = (e) => {
    const result = e.target.value.replace(/\D/g, '');
    setValue(result);
  }

  function handleClick(e) {
    e.preventDefault();
    if(value !== ''){
      onAddCash(parseInt(e.target.cash.value));
      setValue('');
    }
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining! 
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <div className={moneyRemaining >= 10 ? "wallet-full" : "wallet-empty"} onSubmit={handleClick}>
        <form className="add-money">
          <label>$ 
            <input className="cash-input" type="text" name="cash" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Add Cash"/>
          
        </form>
      </div>
    </>
  );
}

export default Table;
