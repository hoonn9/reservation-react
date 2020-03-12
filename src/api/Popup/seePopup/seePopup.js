import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePopup: async (_, args) => {
      return prisma.popups({
        orderBy: "createdAt_DESC"
      });
    }
  }
};
