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
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(405).end();
  }
}
