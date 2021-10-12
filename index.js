// Code your solution in this file!
const headquarters = 42
const block = 264;

function distanceFromHqInBlocks(dist) {
    return Math.abs(dist - headquarters)
}

function distanceFromHqInFeet(dist) {
    return distanceFromHqInBlocks(dist) * block;
}

function distanceTravelledInFeet(start, end) {
    let numblocks = Math.abs(end - start);
    return numblocks * block;
}

function calculatesFarePrice(start, end) {
    const feetTraveled = distanceTravelledInFeet(start, end);
    if (feetTraveled < 400) {
        return 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
        return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}