import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createFile: async (_, args, { request }) => {
      const { files, connectId, typeName } = args;
      let result = [];
      if (typeName === "event") {
        files.forEach(async (file) => {
          const createdFile = await prisma.createFile({
            url: file,
            event: {
              connect: {
                id: connectId,
              },
            },
          });
          result.push(createdFile);
          return createdFile;
        });
      } else {
        return null;
      }
      return result;
    },
  },
};
