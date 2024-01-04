// Flick Switch
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

const flickSwitch = (arr) => {
    let sw = true;
    return arr.map((word) => {
        if (word == 'flick') {
            sw = !sw;
        }
        return sw;
    });
};
