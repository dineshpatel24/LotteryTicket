import React from "react";
import TicketsNum from "./TicketsNum";

function Tickets({ ticket }) {
  return (
    <div className="m-2 ">
        <div className="border-2 p-2 w-96 text-center rounded text-3xl ">
             {ticket.map((num, idx) => {
        return <TicketsNum  num = {num} key={idx}/> 
      })}
        </div>
     
    </div>
  );
}

export default Tickets;
