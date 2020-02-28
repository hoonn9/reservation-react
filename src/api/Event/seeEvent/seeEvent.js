import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeEvent: async (_, args) => {
      const { type, period, first, last, skip } = args;

      return prisma.events({
        where: {
          type: type,
          period: period
        },
        first,
        last,
        skip,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
