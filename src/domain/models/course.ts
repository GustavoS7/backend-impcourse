import { Decimal } from '@prisma/client/runtime/library';
import { TContent, TContentInfo } from './content';
import { TUser, TUserInfo } from './user';
import { Course } from '@prisma/client';

export type TCourse = Course;

export type TCoursePopulate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  category: string | null;
  price: Decimal;
  authorId: string;
  author: TUser;
  content: TContent[];
};

export type TCourseInfo = {
  id: string;
  title: string;
  description: string;
  category: string | null;
  price: Decimal;
  author: TUserInfo;
  content: TContentInfo[];
};
