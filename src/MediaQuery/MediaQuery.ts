import MediaQueryObject from "./MediaQueryObject";
import MediaQueryObjectRaw from "./MediaQueryObjectRaw";
import SingleQuery from "../SingleQuery/SingleQuery";
import Direction from "../Media/Direction";

class MediaQuery {
    public static fromRaw(mediaQueryObjectRaw: MediaQueryObjectRaw): MediaQuery {
        const mediaQueryObject: MediaQueryObject = Object.fromEntries(
            Object.entries(mediaQueryObjectRaw)
                .map(entries => [ entries[0], new SingleQuery(entries[1]) ])
        )

        return new MediaQuery(mediaQueryObject);
    }
    constructor(
        protected mediaQueryObject: MediaQueryObject
    ){}

    public match(name: string, direction: Direction, viewportWith: number): boolean {
        if (!this.mediaQueryObject.hasOwnProperty(name)) {
            //TODO: add TypeError
        }

        const singleQuery: SingleQuery = this.mediaQueryObject[name]
        return singleQuery.match(direction, viewportWith)
    }

}

export default MediaQuery