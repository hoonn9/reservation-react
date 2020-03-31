import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    noUserCheck: async (_, args) => {
      const { username, email } = args;

      const reservations = await prisma.reservations({
        where: { noUser: { username, email } },
        orderBy: "createdAt_DESC",
        first: 10
      });
      return reservations;
    }
  }
};
