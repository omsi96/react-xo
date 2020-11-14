import React, { useEffect, useState } from "react";
import "../styles/XOButton.scss";

export default function XOGrid() {
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("");

  const click = (index) => {
    if (grid[index] !== "") {
      return;
    }
    const grid2 = [...grid];
    grid2[index] = counter % 2 === 0 ? "X" : "O";

    setGrid(grid2);
    setCounter(counter + 1);
  };

  const color = (index) => {
    return counter % 2 === 0 ? "green" : "red";
  };

  const player = (index) => {
    return counter % 2 === 0 ? "X" : "O";
  };

  useEffect(() => {
    checkWinner(counter % 2 !== 0 ? "X" : "O");
  });

  const checkWinner = (p) => {
    const row1 = [grid[0], grid[1], grid[2]].join("") === [p, p, p].join("");
    const row2 = [grid[3], grid[4], grid[5]].join("") === [p, p, p].join("");
    const row3 = [grid[6], grid[7], grid[8]].join("") === [p, p, p].join("");
    const col1 = [grid[0], grid[3], grid[6]].join("") === [p, p, p].join("");
    const col2 = [grid[1], grid[4], grid[7]].join("") === [p, p, p].join("");
    const col3 = [grid[2], grid[5], grid[8]].join("") === [p, p, p].join("");
    const dia1 = [grid[0], grid[4], grid[8]].join("") === [p, p, p].join("");
    const dia2 = [grid[2], grid[4], grid[6]].join("") === [p, p, p].join("");

    if (row1 || row2 || row3 || col1 | col2 || col3 || dia1 || dia2) {
      setStatus(`${p} Wins!`);

      setTimeout(() => {
        setGrid(["", "", "", "", "", "", "", "", ""]);
        setCounter(0);
        setStatus("");
      }, 1000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="XOGrid">
          <h1 style={{ position: "absolute", top: 0 }}>{status}</h1>

          {grid.map((item, index) => (
            <div
              onClick={() => click(index)}
              className={`XOButton ${color(index)}`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
