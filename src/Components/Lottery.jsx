import { useState } from "react";
import { genTickets, Sum } from "./helper";
import Tickets from "./Tickets";

export default function Lottery() {
  const [n, setN] = useState("");
  const [winningSum, setWinningSum] = useState("");
  const [ticket, setTicket] = useState([]);
  const [started, setStarted] = useState(false);

  const totalSum = Sum(ticket);
  const isWinning = totalSum === Number(winningSum);

  // Start lottery
  function handleStart() {
    const numTickets = Number(n);
    const winSum = Number(winningSum);

    if (numTickets > 0 && winSum >= 0) {
      setTicket(genTickets(numTickets));
      setStarted(true);
    }
  }

  // Regenerate tickets
  function buyTickets() {
    setTicket(genTickets(Number(n)));
  }

  // Reset everything
  function resetLottery() {
    setN("");
    setWinningSum("");
    setTicket([]);
    setStarted(false);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-4">
      {!started && (
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Start Your Lottery</h1>
          <input
            type="number"
            placeholder="Enter number of tickets"
            value={n}
            onChange={(e) => setN(e.target.value)}
            className="border p-2 rounded w-64"
            max={10}
          />
          <br />
          <input
            type="number"
            placeholder="Enter winning sum"
            value={winningSum}
            onChange={(e) => setWinningSum(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <br />
          <button
            onClick={handleStart}
            className="bg-blue-600 text-white p-2 rounded w-64"
          >
            Start Lottery
          </button>
        </div>
      )}

      {started && (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Your Lottery Tickets</h1>

          <Tickets ticket={ticket} />

          <div className="space-x-2 mt-4">
            <button
              onClick={buyTickets}
              className="bg-green-600 text-white p-2 rounded"
            >
              Buy Again
            </button>

            <button
              onClick={resetLottery}
              className="bg-red-600 text-white p-2 rounded"
            >
              Reset
            </button>
          </div>

          <div className="mt-4 text-lg">
            <p>
               Winning Sum: <strong>{winningSum}</strong>
            </p>
            <p>
              Your Total: <strong>{totalSum}</strong>
            </p>
          </div>

          {isWinning && (
            <h3 className="text-green-700 text-xl mt-2">
              Congratulations, you won!
            </h3>
          )}
          {!isWinning && (
            <h3 className="text-gray-500 text-md mt-2">Try again! </h3>
          )}
        </div>
      )}
    </div>
  );
}
