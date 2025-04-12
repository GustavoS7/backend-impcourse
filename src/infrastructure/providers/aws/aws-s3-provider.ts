import { RepositoryError } from '@/application/errors';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '@/infrastructure/lib';
import { env } from '@/main/app/config';
import {
  IUploadFileProvider,
  IUploadPublicFileProvider,
} from '@/application/protocols/providers';

export class AwsS3Provider
  implements IUploadFileProvider, IUploadPublicFileProvider
{
  async upload(file: Express.Multer.File): Promise<string> {
    try {
      const fileKey = `files/${Date.now()}_${file.originalname}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: env.AWS_BUCKET_NAME,
          Key: fileKey,
          Body: file.buffer,
          ContentType: file.mimetype,
        }),
      );

      return fileKey;
    } catch (error) {
      throw new RepositoryError();
    }
  }

  async uploadPublic(file: Express.Multer.File): Promise<string> {
    try {
      const fileKey = `public/${Date.now()}_${file.originalname}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: env.AWS_BUCKET_NAME,
          Key: fileKey,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: 'public-read',
        }),
      );

      return `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}>.amazonaws.com/${fileKey}`;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
