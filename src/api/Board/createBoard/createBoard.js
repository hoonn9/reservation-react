import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    //async (_, args, {prisma}  context 사용
    createBoard: async (_, args) => {
      const { name } = args;

      await prisma.createBoard({
        name
      });
      return true;
    }
  }
};
