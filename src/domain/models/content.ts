import { Content } from '@prisma/client';

export type TContent = Content;

export type TContentInfo = {
  title: string;
  type: string;
  position: number;
};
