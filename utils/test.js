import { execSync } from 'node:child_process';
import * as fs from 'fs';
import * as path from 'path';
import useStdout from './stdout.js';
import useBabel from './babel.js';
import testData from './data/testData.js';

const { showResult, showErrorMsg, showSummary } = useStdout();
const { removeVar } = useBabel();

const quizNum = process.argv[2];
const isArgExist = quizNum !== undefined;
const fileName = `${quizNum}.js`;
const isFileExist = fs.existsSync(fileName);

const validate = (flag, msg) => {
  if (flag) {
    showErrorMsg(msg);
    process.exit(1);
  }
};

// Validate Rules
validate(!isArgExist, '問題番号を指定してください 例) yarn test 001');
validate(!isFileExist, '指定した問題番号のファイルが存在しません');

// 対象問題のテストデータを取得
const dataArr = testData[quizNum];

const croppedCode = removeVar('data', fileName);

const outFileName = 'out.js';

const totalTestCase = dataArr.length;
const correctNum = dataArr.filter((data, index) => {
  const testNo = index + 1;
  const prefix = `const data = ${JSON.stringify(data.in)};`;
  fs.writeFileSync(
    path.join('./tmp/', outFileName),
    prefix + croppedCode,
  );
  const stdout = execSync(`node ./tmp/${outFileName}`).toString();
  return showResult(stdout, data.out, testNo);
}).length;

showSummary(correctNum, totalTestCase)