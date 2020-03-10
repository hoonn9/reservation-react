import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeEvent: async (_, args) => {
      const { eventType, period, first, last, skip } = args;

      return prisma.events({
        where: {
          eventType,
          period
        },
        first,
        last,
        skip,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
