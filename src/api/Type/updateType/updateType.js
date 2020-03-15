import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updateType: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { typeId, typeName, price, files } = args;
      const type = await prisma.updateType({
        data: {
          typeName,
          price
        },
        where: {
          id: typeId
        }
      });
      files.forEach(
        async file =>
          await prisma.createFile({
            url: file,
            type: {
              connect: {
                id: typeId
              }
            }
          })
      );
      return type;
    }
  }
};
