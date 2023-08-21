import MediaQuery from "../MediaQuery/MediaQuery";
import MediaCallbackWrapperInterface from "./MediaCallbackWrapperInterface";
import MediaCallback from "./MediaCallback";
import MediaCallbackWrapper from "./MediaCallbackWrapper";
import foundation from "./defaults/foundation";
import bootstrap from "./defaults/bootstrap";

class Media {

    public static get DEFAULT_FOUNDATION(): MediaQuery {
        return MediaQuery.fromRaw(foundation)
    }
    public static get DEFAULT_BOOTSTRAP(): MediaQuery {
        return MediaQuery.fromRaw(bootstrap)
    }

    constructor(
        protected mediaQuery: MediaQuery,
        protected mediaCallbacks: MediaCallbackWrapperInterface[] = []
    ) {}

    public addMatch(name: string, callback: MediaCallback): void {
        const mediaCallbackWrapper: MediaCallbackWrapper = new MediaCallbackWrapper(
            name,
            callback
        )
        this.addMediaCallbackWrapperInterfaceMatch(mediaCallbackWrapper)
    }

    public addMediaCallbackWrapperInterfaceMatch(mediaCallbackWrapper: MediaCallbackWrapperInterface): void {
        this.mediaCallbacks.push(mediaCallbackWrapper)
    }

    protected getViewportWidth(): number {
        return 1
    }




    public start(): void {
        window.addEventListener("resize", (): void => {
            this.run()
        })
    }

    private run(): void {
        const viewportWith: number = this.getViewportWidth()
        this.mediaCallbacks.forEach((mediaCallback: MediaCallbackWrapperInterface): void => {
            this.mediaQuery
        })
    }
}


export default Media