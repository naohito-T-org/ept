// 普通にenvに関してどんなファイルでもいいとは言えない。
import fs from 'fs/promises';

// FIXME: Phase2
// https://stackoverflow.com/questions/64947786/how-to-mock-fs-promises-writefile-with-jest
type FilesListArgs = {
  folderPath: string;
};

export default class FileService {
  constructor() {}

  async getJsonFiles(args: FilesListArgs): Promise<string[]> {
    const { folderPath } = args;
    try {
      // Get list of all files
      const files = await fs.readdir(folderPath);

      // Filter to only include JSON files
      const jsonFiles = files.filter((file) => file.includes('.json'));

      return jsonFiles;
    } catch (e: unknown) {
      throw e;
    }
  }

  async getTxtFiles(args: FilesListArgs): Promise<string[]> {
    const { folderPath } = args;
    try {
      // Get list of all files
      const files = await fs.readdir(folderPath);

      // Filter to only include JSON files
      const jsonFiles = files.filter((file) => file.includes('.txt'));

      return jsonFiles;
    } catch (e: unknown) {
      throw e;
    }
  }
}
