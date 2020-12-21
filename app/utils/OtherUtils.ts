const asyncWait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const toFeet = (n: number) => {
    var realFeet = ((n * 0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return `${feet}' ${inches}"`;
}

export { asyncWait, toFeet };