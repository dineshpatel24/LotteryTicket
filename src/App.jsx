import { useState } from "react";
import "./App.css";
import { genTickets, Sum } from "./helper";

function App() {
  let [ticket, setTicket] = useState(genTickets(3));

  // if(Sum(ticket)===15){
  //   console.log("you won a lottery")
  // }

  let isWinning = Sum(ticket) === 15;


  function buyTickets(){
    setTicket(genTickets(3));
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col text-center">
        <h1 className="text-3xl font-bold">Lottery Tickets!</h1>
        <div className="border-2 p-2 w-96 m-2 rounded text-2xl">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
        <button onClick={buyTickets} className="border rounded p-2 bg-blue-600">Buy Tickets</button>
        <h3>{isWinning && "Congratulation you Won!"}</h3>
      </div>
    </>
  );
}

export default App;
