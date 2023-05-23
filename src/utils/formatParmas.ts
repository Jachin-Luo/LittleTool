
export const formatParmas = (raw: string) => {
    const arr = raw.slice(1).split('&');
    const obj: { [key: string]: string; } = {};
    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i].split('=');
        obj[subArr[0]] = subArr[1];
    }
    return obj
}

