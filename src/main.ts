import { Command } from 'commander';
import { libEncrypt, libDecrypt } from '@/libs';
import { Options } from '@/types';

const main = async ({
  file,
  key,
  name,
  decrypt = false,
  encrypt = true,
  output = process.cwd(),
}: Options) => {
  try {
    // Default is encryption
    if (encrypt && !decrypt) {
      await libEncrypt({ file, key, name });
    } else {
      await libDecrypt({ file, key, name });
    }
  } catch (e: unknown) {
    console.error(e);
  }
};

/**
 * @desc command validation
 */
const commandValidation = () => {
  const program = new Command();
  program
    .name('ept')
    .version('v0.0.1')
    .requiredOption('-f, --file [filename]', 'Add the specified the filepath.')
    .requiredOption('-k, --key [key]', 'Key used for encryption and decryption.')
    .option(
      '-n --name [new filename]',
      'Encrypting or Decrypting file name. Default filename encrypted or decrypted.',
    )
    .option('-e --encrypt [plane file]', 'Encrypting file.')
    .option('-d --decrypt [encrypted file]', 'Decrypting a file.')
    .option('-o --output [path]', 'File Output Destination.');

  program.on('-h, --help', () => {
    console.log('For more information, see');
    console.log('https://github.com/naohito-T-org/ept#readme');
  });

  program.parse(process.argv);

  const options: Options = program.opts();

  main(options);
};

commandValidation();
