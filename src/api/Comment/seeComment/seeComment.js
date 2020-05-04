import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeComment: async (_, args) => {
      const { postId, first, last, skip } = args;

      return prisma.comments({
        where: {
          post: {
            id: postId,
          },
        },
        first,
        last,
        skip,
        orderBy: "createdAt_ASC",
      });
    },
  },
};
