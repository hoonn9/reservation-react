import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    noUserCheck: async (_, args) => {
      const { username, email, loginSecret } = args;

      const noUser = await prisma.noUser({ email });
      try {
        if (noUser.loginSecret === loginSecret) {
          await prisma.updateNoUser({
            where: { id: noUser.id },
            data: {
              loginSecret: ""
            }
          });
          const reservations = await prisma.reservations({
            where: { noUser: { username, email } },
            orderBy: "createdAt_DESC",
            first: 10
          });
          return reservations;
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
};
