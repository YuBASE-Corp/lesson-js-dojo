import * as fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const useBabel = () => {
  const removeVar = (varName, fileName) => {
    const code = fs.readFileSync(fileName, { encoding: 'utf-8' });
    const ast = parse(code);
    traverse.default(ast, {
      VariableDeclaration: (nodePath) => {
        const dec = nodePath.node.declarations;
        const { name } = dec[0].id;
        if (name === varName) {
          nodePath.remove();
        }
      },
    });
    return generate.default(ast).code;
  };

  return {
    removeVar,
  };
};

export default useBabel;
