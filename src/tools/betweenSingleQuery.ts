import between from "./between";
import SingleQueryObjectFilled from "../SingleQuery/SingleQueryObjectFilled";
const betweenSingleQuery = (viewportWith: number, singleQuery: SingleQueryObjectFilled): boolean => (
    between(viewportWith, singleQuery.min, singleQuery.max)
)

export default betweenSingleQuery