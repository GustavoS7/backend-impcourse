import { Decimal } from '@prisma/client/runtime/library';
import { Course } from '@prisma/client';
import { TContent } from './content';
import { TUser } from './user';

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
