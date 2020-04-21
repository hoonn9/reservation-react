import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePack: async (_, args) => {
      const { roomId } = args;

      return prisma.room({ id: roomId }).packs();
    },
  },
};
