import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoardCount: async (_, args) => {
      const { type } = args;

      return prisma
        .postsConnection({ where: { type_in: type } })
        .aggregate()
        .count();
    }
  }
};
