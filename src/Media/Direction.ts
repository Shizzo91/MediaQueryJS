enum Direction {
    ONLY = 0,
    UP = 1,
    DOWN = 2,
}

function getDirectionByName(name: string|undefined): Direction {
    name = (typeof name === "string") ? name.toUpperCase() : null;
    switch (name) {
        case "ONLY":
            return Direction.ONLY
        case "DOWN":
            return Direction.DOWN
        default:
        case "UP":
            return Direction.UP
    }
}


export {
    getDirectionByName,
}
export default Direction