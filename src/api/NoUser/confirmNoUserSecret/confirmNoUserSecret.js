import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    confirmNoUserSecret: async (_, args) => {
      const { email, secret } = args;
      const noUser = await prisma.noUser({ email });
      try {
        if (noUser.loginSecret === secret) {
          return true;
        } else {
          throw Error("Wrong email/secret combination");
        }
      } catch (e) {
        return false;
      }
    }
  }
};
