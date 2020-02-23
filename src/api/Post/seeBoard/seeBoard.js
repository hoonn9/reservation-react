import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoard: async (_, args) => {
      const { type, first, last, skip } = args;

      return prisma.posts({
        where: {
          type: type
        },
        first,
        last,
        skip,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
