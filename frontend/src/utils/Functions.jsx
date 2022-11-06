export const randomNumber = () => {
  const maxNum = 129;
  return Math.floor(Math.random() * maxNum);
};

export const randomOp = () => {
  const maxOp = 5;
  return Math.floor(Math.random() * maxOp);
};

export const operators = (op) => {
  const ops = ["-", "<<", "^", "+", "|"];
  return ops[op];
};

export const setNumber = (num, op) => {
  if (op === 1 && num > 5) {
    num = (num % 5) + 1;
  }
  return num;
};

export const bin = (int) => {
  return (int.toString(2) + "").padStart(8, "0");
};

export const hex = (int) => {
  return int.toString(16).toUpperCase();
};

export const checkAns = (ans, res) => {
  const isCorrect = ans.toUpperCase().localeCompare(hex(res));
  if (isCorrect === 0) {
    return true;
  } else {
    return false;
  }
};

export const getResult = (num1, num2, op) => {
  const result = [
    num1 - num2,
    num1 << num2,
    num1 ^ num2,
    num1 + num2,
    num1 | num2,
  ];
  return result[op];
};
