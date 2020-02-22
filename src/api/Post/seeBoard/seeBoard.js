import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoard: async (_, args) => {
      const { type } = args;
      return prisma.posts({
        where: {
          type: type
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};
