import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeSubType: async (_, args) => {
      const { typeId } = args;

      return prisma.type({ id: typeId }).subTypes();
    }
  }
};
