export interface IHashGeneratorProvider {
  hash: (plaintext: any) => Promise<string>;
}
