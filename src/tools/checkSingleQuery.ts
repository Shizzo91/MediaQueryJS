import SingleQueryObject from "../SingleQuery/SingleQueryObject";
import SingleQueryObjectFilled from "../SingleQuery/SingleQueryObjectFilled";
import isNumber from "./isNumber";


const checkSingleQuery = (singleQueryObject: SingleQueryObject): SingleQueryObjectFilled => {
    if (!isNumber(singleQueryObject.min) && !isNumber(singleQueryObject.max)) {
        //TODO: add TypeError
    } else if (!isNumber(singleQueryObject.min)) {
        singleQueryObject.min = Number.MIN_SAFE_INTEGER
    } else if (!isNumber(singleQueryObject.max)) {
        singleQueryObject.max = Number.MAX_SAFE_INTEGER
    }

    return <SingleQueryObjectFilled> singleQueryObject
}

export default checkSingleQuery