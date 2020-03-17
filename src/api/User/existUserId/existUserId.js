import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    existUserId: (_, args) => {
      const { userId } = args;
      return prisma.$exists.user({ userId });
    }
  }
};
