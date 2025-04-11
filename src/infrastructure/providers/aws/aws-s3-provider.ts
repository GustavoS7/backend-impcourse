import { IUploadFileProvider } from '@/application/protocols/providers';
import { RepositoryError } from '@/application/errors';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '@/infrastructure/lib';
import { env } from '@/main/app/config';

export class AwsS3Provider implements IUploadFileProvider {
  async upload(file: Express.Multer.File): Promise<string> {
    try {
      const fileKey = `${Date.now()}_${file.originalname}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: env.AWS_BUCKET_NAME,
          Key: fileKey,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: 'public-read',
        }),
      );

      return `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${fileKey}`;
    } catch (error) {
      throw new RepositoryError();
    }
  }
}
