import SingleQueryObject from "./SingleQueryObject";
import SingleQueryObjectFilled from "./SingleQueryObjectFilled";
import Direction from "../Media/Direction";
import checkSingleQuery from "../tools/checkSingleQuery";
import betweenSingleQuery from "../tools/betweenSingleQuery";


class SingleQuery {

    private readonly singleQueryObject: SingleQueryObjectFilled
    constructor(
        singleQueryObject: SingleQueryObject,
    ) {
        this.singleQueryObject = checkSingleQuery(singleQueryObject)
    }


    public match(dircetion: Direction, viewportWidth: number): boolean {
        if (dircetion == Direction.ONLY) {
            return this.matchOnly(viewportWidth)
        } else if (dircetion == Direction.UP) {
            return this.matchUp(viewportWidth)
        } else if (dircetion == Direction.DOWN) {
            return this.matchDown(viewportWidth)
        } else {
            //TODO: adding TypeError
        }

    }

    public matchOnly(viewportWidth: number): boolean {
        return betweenSingleQuery(viewportWidth, this.only)
    }

    public matchUp(viewportWidth: number): boolean {
        return betweenSingleQuery(viewportWidth, this.up)
    }

    public matchDown(viewportWidth: number): boolean {
        return betweenSingleQuery(viewportWidth, this.down)
    }

    get only(): SingleQueryObjectFilled {
        return this.singleQueryObject
    }

    get up(): SingleQueryObjectFilled {
        return Object.assign({}, this.singleQueryObject, { max: Number.MAX_SAFE_INTEGER })
    }

    get down(): SingleQueryObjectFilled {
        return Object.assign({}, this.singleQueryObject, { min: Number.MIN_SAFE_INTEGER })
    }

}

export default SingleQuery