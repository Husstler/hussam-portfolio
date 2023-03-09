import React, { useState, useRef, useEffect } from 'react';
import Matter from 'matter-js';

const FlappyBird = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [bird, setBird] = useState(null);
  const [ground, setGround] = useState(null);
  const [pipes, setPipes] = useState([]);
  const [pipeFrequency, setPipeFrequency] = useState(100);
  const [pipeTimer, setPipeTimer] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    // Set up game world
    const birdBody = Matter.Bodies.rectangle(100, 200, 50, 50, { density: 0.04 });
    const groundBody = Matter.Bodies.rectangle(400, 500, 800, 50, { isStatic: true });
    const ceilingBody = Matter.Bodies.rectangle(400, -50, 800, 50, { isStatic: true });
    Matter.World.add(world, [birdBody, groundBody, ceilingBody]);

    setBird(birdBody);
    setGround(groundBody);

    // Add event listener for spacebar
    const handleKeyDown = e => {
      if (e.keyCode === 32) {
        Matter.Body.setVelocity(bird, { x: bird.velocity.x, y: -10 });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Start game loop
    const interval = setInterval(() => {
      if (gameOver) return;

      // Spawn pipes
      if (pipeTimer === pipeFrequency) {
        const xPos = 800;
        const gap = 150;
        const minY = gap / 2;
        const maxY = 500 - gap / 2;
        const randomY = Math.floor(Math.random() * (maxY - minY + 1) + minY);

        const topPipeBody = Matter.Bodies.rectangle(xPos, randomY - gap / 2, 50, randomY, { isStatic: true });
        const bottomPipeBody = Matter.Bodies.rectangle(xPos, randomY + gap / 2, 50, 500 - randomY, { isStatic: true });
        Matter.World.add(world, [topPipeBody, bottomPipeBody]);
        setPipes([...pipes, topPipeBody, bottomPipeBody]);
        setPipeTimer(0);
      } else {
        setPipeTimer(pipeTimer + 1);
      }

      // Update score
      const passedPipes = pipes.filter(pipe => {
        if (pipe.passed) {
          return false;
        } else if (bird.position.x > pipe.position.x) {
          pipe.passed = true;
          setScore(score + 1);
          return true;
        }
        return false;
      });
      setPipes(passedPipes);

      // Check for collision
      const isGameOver = pipes.some(pipe => {
        if (Matter.Bounds.overlaps(pipe.bounds, bird.bounds)) {
          return true;
        }
        return false;
      });

      if (isGameOver || bird.position.y > 500) {
        setGameOver(true);
        clearInterval(interval); // stop the game loop when the game is over
      }
    }, 10);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, [gameOver, bird, pipeTimer, pipeFrequency, pipes]); // dependencies array

  useEffect(() => {
    // Draw game world
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    const background = new Image();
    background.src = './bg.png';
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Draw bird
    if (bird) {
      const birdImg = new Image();
      birdImg.src = './bird.png';
      ctx.save();
      ctx.translate(bird.position.x, bird.position.y);
      ctx.rotate(bird.angle);
      ctx.drawImage(birdImg, -birdImg.width / 2, -birdImg.height / 2, birdImg.width, birdImg.height);
      ctx.restore();
    }

    // Draw ground
    if (ground) {
      const groundImg = new Image();
      groundImg.src = './ground.png';
      ctx.drawImage(groundImg, ground.position.x - groundImg.width / 2, ground.position.y - groundImg.height / 2, groundImg.width, groundImg.height);
    }

    // Draw pipes
    const pipeImg = new Image();
    pipeImg.src = './pipe.png';
    pipes.forEach(pipe => {
      ctx.save();
      ctx.translate(pipe.position.x, pipe.position.y);
      ctx.rotate(pipe.angle);
      if (pipe.label === 'TopPipe') {
        ctx.drawImage(pipeImg, -pipeImg.width / 2, -pipeImg.height, pipeImg.width, pipeImg.height);
      } else {
        ctx.drawImage(pipeImg, -pipeImg.width / 2, 0, pipeImg.width, pipeImg.height);
      }
      ctx.restore();
    });
  });

  return (
    <div className="game">
      <div className="game__score">{score}</div>
      <canvas
        ref={canvasRef}
        width="800"
        height="500"
      ></canvas>
      {gameOver && <div className="game__over">Game Over!</div>}
    </div>
  );
};

export default FlappyBird;
