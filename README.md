# ept

Encrypt project environment variables.

## Getting started

### installation

First step is to install it using yarn or npm:

```bash
npm install

# or use yarn
yarn install
``` 

Second step

```bash
# Encrypting
$ yarn start -f [plane text] -k [key] -e

# Decrypting
$ yarn start -f [encrypted file] -k [key] -d

```

## Options

| summary  | Required | Description |
| -------- | -------- | ----------- |
| -f, --file [filename] |   ◯   | Add the specified the filepath    |  
| -k, --key [key] |  ◯   | Key used for encryption and decryption |
| -n --name [new filename] |     | Encrypting or Decrypting file name. Default filename encrypted or decrypted |
| -e --encrypt [plane file] |     | Encrypting file.    |
| -d --decrypt [encrypted file] |     |  Decrypting a file.   |
| -o --output [path] |     | File Output Destination |
