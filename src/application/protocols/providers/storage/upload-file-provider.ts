export interface IUploadFileProvider {
  upload: (file: Express.Multer.File) => Promise<string>;
}
