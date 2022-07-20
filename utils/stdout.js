const useStdout = () => {
  const showErrorMsg = (msg) => {
    console.error('\x1b[31m-----------------------------');
    console.error(`\x1b[31m🔥 ERROR: ${msg}`);
    console.error('\x1b[31m-----------------------------\x1b[39m');
  };

  const cropLastNewLine = (str) => str.replace(/\r?\n$/, '');

  const showResult = (s1, s2, testNo) => {
    const userStr = cropLastNewLine(s1);
    const expectedStr = cropLastNewLine(s2);
    const correct = userStr === expectedStr;
    console.log(`【テストケース: ${testNo}】`);
    console.log(`USER: ${userStr}`);
    console.log(`EXP : ${expectedStr}`);
    if (correct) {
      console.log('▶︎ \x1b[32m💮 正解！\n\x1b[39m');
    } else {
      console.log('▶︎ \x1b[31m🥺 不正解\n\x1b[39m');
    }
    return correct;
  };

  const showSummary = (numer, denom) => {
    const passed = numer === denom
    console.log('\x1b[36mRESULT----------\x1b[39m');
    console.log(`${numer}/${denom} 通過`);
    console.log(passed ? '🎉 問題クリア' : '🔥 再チャレンジ');
    console.log('\x1b[36m----------------\x1b[39m\n');
  }

  return {
    showErrorMsg,
    showResult,
    showSummary
  };
};
export default useStdout;
