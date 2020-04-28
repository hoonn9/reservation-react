import { prisma } from "../../../generated/prisma-client";

export default {
  Comment: {
    nickname: async ({ id }) => {
      const user = await prisma.comment({ id }).user();
      if (user.nickname) {
        return user.nickname;
      } else {
        return "";
      }
    },
  },
};
