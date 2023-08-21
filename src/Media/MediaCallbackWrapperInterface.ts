import Direction from "./Direction";
import MediaCallback from "./MediaCallback";

export default interface MediaCallbackWrapperInterface {
    name(): string,
    direction(): Direction,
    callback(): MediaCallback,
}