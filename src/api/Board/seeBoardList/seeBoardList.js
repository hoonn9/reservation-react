import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoardList: async (_, args) => {
      return prisma.boards();
    }
  }
};
