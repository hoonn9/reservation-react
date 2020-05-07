import { prisma } from "../../../generated/prisma-client";

export default {
  Reservation: {
    room: ({ id }) => prisma.reservation({ id }).room(),
    pack: ({ id }) => prisma.reservation({ id }).pack(),
    user: async ({ id }) => {
      const user = await prisma.reservation({ id }).user();
      return {
        updatedAt: "",
        email: user.email,
        username: user.username,
        loginSecret: "",
        bio: user.bio,
        id: user.id,
        phoneNum: user.phoneNum,
        createdAt: "",
        address: "",
        isAgree: user.isAgree,
        userId: "",
        password: "",
        nickname: user.nickname,
      };
    },
    noUser: ({ id }) => prisma.reservation({ id }).noUser(),
    guest: ({ id }) => prisma.reservation({ id }).guest(),
  },
};
