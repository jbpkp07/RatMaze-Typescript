const mazeWidth = 6;
const mazeHeight = 6;
const startLocation = {
    isStart: true,
    xCoord: 5,
    yCoord: 5
};
const endLocation = {
    isEnd: true,
    xCoord: 0,
    yCoord: 0
};
const occupiedLocations = [
    { isOccupied: true, xCoord: 0, yCoord: 2 },
    { isOccupied: true, xCoord: 1, yCoord: 0 },
    { isOccupied: true, xCoord: 1, yCoord: 4 },
    { isOccupied: true, xCoord: 2, yCoord: 0 },
    { isOccupied: true, xCoord: 2, yCoord: 1 },
    { isOccupied: true, xCoord: 2, yCoord: 2 },
    { isOccupied: true, xCoord: 2, yCoord: 3 },
    { isOccupied: true, xCoord: 2, yCoord: 4 },
    { isOccupied: true, xCoord: 4, yCoord: 1 },
    { isOccupied: true, xCoord: 4, yCoord: 2 },
    { isOccupied: true, xCoord: 4, yCoord: 3 },
    { isOccupied: true, xCoord: 4, yCoord: 4 },
    { isOccupied: true, xCoord: 4, yCoord: 5 }
];
const map = {
    mazeWidth,
    mazeHeight,
    startLocation,
    endLocation,
    occupiedLocations
};
module.exports = map;
