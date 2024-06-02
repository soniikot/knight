class Node {
  constructor(position, path) {
    this.position = position;
    this.path = path;
  }
}

function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [new Node(start, [start])];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const [x, y] = currentNode.position;

    if (x === end[0] && y === end[1]) {
      return currentNode.path;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];

      if (isValidMove(newX, newY) && !visited.has(newPosition.toString())) {
        visited.add(newPosition.toString());
        queue.push(
          new Node(newPosition, currentNode.path.concat([newPosition]))
        );
      }
    }
  }
}

function printResult(start, end) {
  const path = knightMoves(start, end);
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((position) => console.log(position));
}

// Test cases
printResult([0, 0], [1, 2]);
printResult([0, 0], [3, 3]);
printResult([3, 3], [0, 0]);
printResult([0, 0], [7, 7]);
printResult([3, 3], [4, 3]);
