export interface IUploadPublicFileProvider {
  uploadPublic: (file: Express.Multer.File) => Promise<string>;
}
