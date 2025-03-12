import bcrypt from 'bcrypt';
import {
  IHashGeneratorProvider,
  IHashComparerProvider,
} from '@/application/protocols/providers';

export class BcryptProvider
  implements IHashGeneratorProvider, IHashComparerProvider
{
  constructor(private readonly salt: number) {}

  async hash(plaintext: any): Promise<string> {
    return bcrypt.hash(plaintext, this.salt);
  }

  async compare(plaitext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaitext, digest);
  }
}
