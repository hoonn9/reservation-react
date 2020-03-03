import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeType: async (_, args) => {
      return prisma.types({});
    }
  }
};
