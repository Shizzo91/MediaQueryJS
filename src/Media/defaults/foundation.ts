import MediaQueryObjectRaw from "../../MediaQuery/MediaQueryObjectRaw";
import {fromRemToPx} from "../../tools/rem";

const foundation: MediaQueryObjectRaw = {
    small: {
        max: fromRemToPx(39.9375)
    },
    medium: {
        min: fromRemToPx(40),
        max: fromRemToPx(63.9375),
    },
    large: {
        min: fromRemToPx(64),
    }
}

export default foundation