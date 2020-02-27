import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoard: async (_, args) => {
      const { boardId, type, first, last, skip } = args;

      return prisma.posts({
        where: {
          board: {
            id: boardId
          },
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
