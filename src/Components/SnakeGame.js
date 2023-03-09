import React, { useState, useEffect } from "react";

const GRID_SIZE = 20;
const GRID_WIDTH = 30;
const GRID_HEIGHT = 30;
const FRAME_RATE = 100;

const getRandomCoord = () => {
  return Math.floor(Math.random() * GRID_SIZE);
};

const initialState = {
  snake: [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
    { x: 7, y: 10 },
  ],
  food: { x: getRandomCoord(), y: getRandomCoord() },
  direction: "RIGHT",
  gameover: false,
};

const SnakeGame = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, FRAME_RATE);
    return () => clearInterval(interval);
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" && state.direction !== "LEFT") {
      setState({ ...state, direction: "RIGHT" });
    } else if (e.key === "ArrowDown" && state.direction !== "UP") {
      setState({ ...state, direction: "DOWN" });
    } else if (e.key === "ArrowLeft" && state.direction !== "RIGHT") {
      setState({ ...state, direction: "LEFT" });
    } else if (e.key === "ArrowUp" && state.direction !== "DOWN") {
      setState({ ...state, direction: "UP" });
    }
  };

  const moveSnake = () => {
    const { snake, food, direction } = state;
    const head = snake[0];

    let newHead;
    if (direction === "RIGHT") {
      newHead = { x: head.x + 1, y: head.y };
    } else if (direction === "LEFT") {
      newHead = { x: head.x - 1, y: head.y };
    } else if (direction === "DOWN") {
      newHead = { x: head.x, y: head.y + 1 };
    } else {
      newHead = { x: head.x, y: head.y - 1 };
    }

    // check if the new head collides with the walls or itself
    if (
      newHead.x < 0 ||
      newHead.x >= GRID_WIDTH ||
      newHead.y < 0 ||
      newHead.y >= GRID_HEIGHT ||
      snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setState({ ...state, gameover: true });
      return;
    }

    const newSnake = [newHead, ...snake.slice(0, -1)];
    if (newHead.x === food.x && newHead.y === food.y) {
      // snake ate food, add a new food and increase the length of the snake
      const newFood = { x: getRandomCoord(), y: getRandomCoord() };
      setState({ ...state, snake: newSnake, food: newFood });
    } else {
      setState({ ...state, snake: newSnake });
    }
  };

  return (
    <div className="snake-game" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="grid">
        {Array.from({ length: GRID_HEIGHT }, (_, y) => (
          <div key={y} className="row">
            {Array.from({ length: GRID_WIDTH }, (_, x) => {
              const className = `cell${
                state.snake.some(
                  (segment) => segment.x === x && segment.y === y
                )
                  ? " snake"
                  : ""
              }${state.food.x === x && state.food.y === y ? " food" : ""}`;
              return <div key={x} className={className}></div>;
            })}
          </div>
        ))}
      </div>
      {state.gameover && (
        <div className="gameover">
          <p>Game Over</p>
          <button onClick={() => setState(initialState)}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
