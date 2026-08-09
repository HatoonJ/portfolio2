import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import "./TicTacToe.css";

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(Boolean)) return "draw";
  return null;
}

export default function TicTacToe() {
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const winner = getWinner(board);

  const play = (i) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = turn;
    setBoard(next);
    setTurn(turn === "X" ? "O" : "X");
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  let status;
  if (winner === "draw") status = "It's a draw";
  else if (winner) status = `Player ${winner} wins`;
  else status = `Player ${turn}'s turn`;

  return (
    <section className="easter-egg">
      <div className="container">
        <Reveal className="easter-egg__card">
          <div className="easter-egg__header">
            <div>
              <span className="eyebrow">Since you scrolled this far</span>
              <h3>Want to play a quick game?</h3>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Close" : "Play Tic-Tac-Toe"}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="easter-egg__game"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ttt">
                  <p className="ttt__status">{status}</p>
                  <div className="ttt__board">
                    {board.map((cell, i) => (
                      <button
                        key={i}
                        className="ttt__cell"
                        onClick={() => play(i)}
                        aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ", empty"}`}
                      >
                        {cell}
                      </button>
                    ))}
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={reset}>
                    Reset
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
