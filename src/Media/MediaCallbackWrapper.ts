import MediaCallbackWrapperInterface from "./MediaCallbackWrapperInterface";
import MediaCallback from "./MediaCallback";
import Direction, {getDirectionByName} from "./Direction";

class MediaCallbackWrapper implements MediaCallbackWrapperInterface {

    protected readonly name_: string

    protected readonly direction_: Direction
    constructor(
        key: string,
        protected callback_: MediaCallback
    ) {
        const splitKey: string[] = key.split(" ")
        if (splitKey.length <= 0 || splitKey.length > 2) {
            //TODO: add TypeError
        }

        this.name_ = splitKey[0]
        this.direction_ = getDirectionByName(splitKey[1])
    }

    callback(): MediaCallback {
        return this.callback_
    }

    direction(): Direction {
        return this.direction_;
    }

    name(): string {
        return this.name_;
    }

}

export default MediaCallbackWrapper