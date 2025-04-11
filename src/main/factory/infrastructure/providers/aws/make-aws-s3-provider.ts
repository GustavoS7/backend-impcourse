import { AwsS3Provider } from '@/infrastructure/providers';

export const makeAwsS3Provider = (): AwsS3Provider => {
  return new AwsS3Provider();
};
