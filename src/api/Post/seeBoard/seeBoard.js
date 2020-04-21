import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoard: async (_, args) => {
      const { boardId, postType, first, last, skip } = args;

      return prisma.posts({
        where: {
          board: {
            id: boardId,
          },
          postType,
        },
        first,
        last,
        skip,
        orderBy: "createdAt_DESC",
      });
    },
  },
};
