module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);

  const OPEN_BRACKETS = bracketsConfig.map((el) => el[0]);
  const CLOSE_BRACKETS = bracketsConfig.map((el) => el[1]);
  const BRACKETS_PAIR = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[`${CLOSE_BRACKETS[i]}`] = OPEN_BRACKETS[i];
  }


  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i];

    if (
      curSymbol === '|' &&
      str.slice(0, i).replace(/[^|]/g, '').length % 2 === 0
    ) {
      stack.push(curSymbol);
    } else if (OPEN_BRACKETS.includes(curSymbol) && curSymbol !== '|') {
      stack.push(curSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[curSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

