import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeEventCount: async (_, args) => {
      const { eventType, period } = args;

      try {
        const count = await prisma
          .eventsConnection({ where: { eventType, period } })
          .aggregate()
          .count();
        return count;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },
};
