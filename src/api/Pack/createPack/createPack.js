import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPack: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { roomId, name, price, description } = args;
      const pack = await prisma.createPack({
        room: { connect: { id: roomId } },
        name,
        price,
        description,
      });
      return pack;
    },
  },
};
