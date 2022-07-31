export type Options = {
  file: string;
  key: string;
  name?: string;
  decrypt?: boolean;
  encrypt?: boolean;
  output?: string; // どこに出すか欲しいでしょ
};

export type EncryptOptions = Omit<Options, 'decrypt' | 'encrypt' | 'output'>;
