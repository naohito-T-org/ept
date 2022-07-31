import fs from 'fs/promises';
import cryptoJs from 'crypto-js';
import { EncryptOptions } from '@/types';

export const libEncrypt = async ({ file, key, name = 'encrypted' }: EncryptOptions) => {
  const fileName = name;
  const readFile = await fs.readFile(file, 'utf-8');

  let encrypted = '';
  const lines = readFile.split('\n');
  lines.forEach((line) => {
    if (line !== '') {
      const items = line.split('=');
      const encryptedValue = cryptoJs.AES.encrypt(items[1], key);
      encrypted += `${items[0]}=${encryptedValue}\n`;
    }
  });

  await fs.writeFile(fileName, encrypted);
};
