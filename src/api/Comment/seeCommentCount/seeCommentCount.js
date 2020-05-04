import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeCommentCount: async (_, args) => {
      const { postId } = args;

      try {
        const count = await prisma
          .commentsConnection({ where: { post: { id: postId } } })
          .aggregate()
          .count();
        return count;
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },
};
