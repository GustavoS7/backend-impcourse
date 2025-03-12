export interface IHashComparerProvider {
  compare: (plaitext: string, digest: string) => Promise<boolean>;
}
