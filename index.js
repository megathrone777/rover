var directions = ["N", "E", "S", "W"];
var movement = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
};
var moveRover = function (x, y, direction, instructions) {
    for (var _i = 0, instructions_1 = instructions; _i < instructions_1.length; _i++) {
        var instruction = instructions_1[_i];
        if (instruction === "L") {
            direction = directions[(directions.indexOf(direction) + 3) % 4];
        }
        else if (instruction === "R") {
            direction = directions[(directions.indexOf(direction) + 1) % 4];
        }
        else if (instruction === "M") {
            x += movement[direction][0];
            y += movement[direction][1];
        }
    }
    return "".concat(x, " ").concat(y, " ").concat(direction);
};
var result1 = moveRover(1, 2, "N", "LMLMLMLMM");
var result2 = moveRover(3, 3, "E", "MMRMMRMRRM");
console.log(result1);
console.log(result2);
