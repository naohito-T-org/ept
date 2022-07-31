/**
 * @thank https://qiita.com/vimyum/items/4ded9de3b784afd31025
 */

import { libEncrypt } from '@/libs';

jest.mock('fs/promises', () => ({
  readFile: jest.fn(() => `TEST=test env\nTEST2=test env2`),
  writeFile: jest.fn(() => console.log('OK')),
}));

describe('Encrypt test.', () => {
  it('Encrypt module test.', async () => {
    const mockPath = 'mock';
    const mockKey = 'key';
    await libEncrypt({ file: mockPath, key: mockKey });
  });
});
