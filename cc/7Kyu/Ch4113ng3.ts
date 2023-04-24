// Ch4113ng3
// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/typescript


// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


export function nerdify(txt: string): string {
    return txt.replace(/[a|A]/g, '4').replace(/[e|E]/g, '3').replace(/l/g, '1')
}