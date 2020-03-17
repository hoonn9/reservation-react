import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    existUserEmail: (_, args) => {
      const { email } = args;
      return prisma.$exists.user({ email });
    }
  }
};
