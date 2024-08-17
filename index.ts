type TDirection = "N" | "E" | "S" | "W";

const directions: TDirection[] = ["N", "E", "S", "W"];

const movement: Record<TDirection, [number, number]> = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
};

const moveRover = (
  x: number,
  y: number,
  direction: TDirection,
  instructions: string
): string => {
  for (const instruction of instructions) {
    if (instruction === "L") {
      direction = directions[(directions.indexOf(direction) + 3) % 4];
    } else if (instruction === "R") {
      direction = directions[(directions.indexOf(direction) + 1) % 4];
    } else if (instruction === "M") {
      x += movement[direction][0];
      y += movement[direction][1];
    }
  }

  return `${x} ${y} ${direction}`;
};

const result1 = moveRover(1, 2, "N", "LMLMLMLMM");
const result2 = moveRover(3, 3, "E", "MMRMMRMRRM");

console.log(result1);
console.log(result2);
