import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createComment: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { postId, text } = args;
      const comment = await prisma.createComment({
        user: {
          connect: { id: user.id },
        },
        post: {
          connect: { id: postId },
        },
        text,
      });
      return comment;
    },
  },
};
