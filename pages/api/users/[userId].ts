import { NextApiResponse } from 'next';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';

import prisma from '../../../libs/prismadb';

export default async function handler(
  req: NextApiRequestQuery,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { userId }: any = req.query;

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID');
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followerCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return res.status(200).json({ ...existingUser, followerCount });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
