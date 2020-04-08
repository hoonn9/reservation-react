import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    existUserNickName: (_, args) => {
      const { nickname } = args;
      return prisma.$exists.user({ nickname });
    },
  },
};
