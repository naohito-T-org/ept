/**
 * @thank https://qiita.com/vimyum/items/4ded9de3b784afd31025
 */

import { libDecrypt } from '@/libs';

jest.mock('fs/promises', () => ({
  readFile: jest.fn(() => `TEST=ccccccc\nTEST2=laganalkea`),
  writeFile: jest.fn(() => console.log('OK')),
}));

describe('Encrypt test.', () => {
  it('Encrypt module test.', async () => {
    const mockPath = 'mock';
    const mockKey = 'key';
    await libDecrypt({ file: mockPath, key: mockKey });
  });
});
