import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updateRoom: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId, name, price, files } = args;
      const room = await prisma.updateRoom({
        data: {
          name,
          price,
        },
        where: {
          id: roomId,
        },
      });
      files.forEach(
        async (file) =>
          await prisma.createFile({
            url: file,
            room: {
              connect: {
                id: roomId,
              },
            },
          })
      );
      return room;
    },
  },
};
