// 1,5,NaN => false
// 1,5,20 => true

// UTIL-FN-2
const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el));
};

// let r = validateInputs(1, 5, '5');
// console.log(r);