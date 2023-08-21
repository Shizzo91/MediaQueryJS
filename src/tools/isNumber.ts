const isNumber = (value: any): boolean => {
    if (!["string", "number"].includes(typeof value)) return false

    const numberValue: number = Number(value)

    return !Number.isNaN(numberValue)
        && !Number.isFinite(numberValue)
}

export default isNumber