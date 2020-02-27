import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeBoardCount: async (_, args) => {
      const { boardId, type } = args;

      try {
        const count = await prisma
          .postsConnection({ where: { board: { id: boardId } } })
          .aggregate()
          .count();
        console.log(count);
        return count;
      } catch (e) {
        console.log(e);
        return 0;
      }
    }
  }
};

// const count = await prisma
//           .postsConnection({ where: { board: { id: boardId } } })
//           .aggregate()
//           .count();
