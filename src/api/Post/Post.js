import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    user: async ({ id }) => {
      const user = await prisma.post({ id }).user();
      return {
        updatedAt: "",
        email: "",
        username: "",
        loginSecret: "",
        bio: user.bio,
        id: user.id,
        phoneNum: "",
        createdAt: "",
        address: "",
        isAgree: false,
        userId: user.userId,
        password: "",
        nickname: user.nickname,
      };
    },
    board: ({ id }) => prisma.post({ id }).board(),
    comments: ({ id }) => prisma.post({ id }).comments(),
  },
};
