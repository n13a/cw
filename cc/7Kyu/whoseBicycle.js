// Whose bicycle?

// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }

// Return please :

// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.

// If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:

// const ageTable = {
//                   'firstSonAge': 14,
//                   'secondSonAge': 9,
//                   'thirdSonAge': 8
//                 }



const sum = x => Object.values(x).reduce((a, c) => a + +c, 0)
const whoseBicycle = (diary1, diary2, diary3) => {
    let highest = sum(diary1)
    const sc = [highest, sum(diary2), sum(diary3)]
    let index = 0
    for (let i = 1; i <= 2; i++) {
        if (sc[i] >= highest) {
            index = i
            highest = sc[i]
        }
    }
    return `I need to buy a bicycle for my ${['first', 'second', 'third'][index]} son.`
}