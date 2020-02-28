import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullEvent: async (_, args) => {
      const { id } = args;

      try {
        const event = await prisma.event({ id });
        return event;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
