import MediaQueryObjectRaw from "../../MediaQuery/MediaQueryObjectRaw";
import {fromRemToPx} from "../../tools/rem";

const bootstrap: MediaQueryObjectRaw = {
    xs: {
        max: 575
    },
    sm: {
        min: 576,
        max: 767,
    },
    md: {
        min: 768,
        max: 991,
    },
    lg: {
        min: 992,
        max: 1199,
    },
    xl: {
        min: 1200,
        max: 1399,
    },
    xxl: {
        min: 1400,
    }
}

export default bootstrap