import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeRoom: async (_, args) => {
      return prisma.rooms({});
    },
  },
};
