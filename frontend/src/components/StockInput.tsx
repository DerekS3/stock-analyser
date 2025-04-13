import { useState } from "react";

const StockInput = () => {
  const [symbol, setSymbol] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted symbol:", symbol);
    //  call  backend API here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className=" bg-gray-200 tracking-wide px-3 rounded focus:bg-white"
          type="text"
          value={symbol}
          onChange={handleChange}
          placeholder="Enter stock symbol"
        />
      </form>
    </>
  );
};

export default StockInput;
