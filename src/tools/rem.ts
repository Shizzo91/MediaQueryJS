import isNumber from "./isNumber";

const DEFAULT_REM_PX: number = 16

const getRem = (): number => {

    try {
        const baseRem: number = parseFloat(getComputedStyle(document.documentElement).fontSize)

        return (isNumber(baseRem))
            ? baseRem
            : DEFAULT_REM_PX
    } catch (e) {
        return DEFAULT_REM_PX
    }
}

const fromRemToPx = (rem: number): number => (
    rem * getRem()
)

console.error({REM: getRem()})

export  {
    getRem,
    fromRemToPx
}