import fs from 'fs/promises';
import cryptoJs from 'crypto-js';
import { EncryptOptions } from '@/types';

export const libDecrypt = async ({ file, key, name = 'decrypted' }: EncryptOptions) => {
  const fileName = name;
  const readFile = await fs.readFile(file, { encoding: 'utf8' });

  let decrypted = '';
  const lines = readFile.split('\n');

  lines.forEach((line) => {
    if (line !== '') {
      const items = line.split(/(?<=^[^=]+?)=/);
      const decryptedValue = cryptoJs.AES.decrypt(items[1], key).toString(cryptoJs.enc.Utf8);
      decrypted += `${items[0]}=${decryptedValue}\n`;
    }
  });

  await fs.writeFile(fileName, decrypted);
};
