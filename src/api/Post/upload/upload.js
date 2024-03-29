import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { boardId, postType, title, content, files } = args;
      const post = await prisma.createPost({
        board: {
          connect: { id: boardId },
        },
        postType,
        title,
        content,
        views: 0,
        user: { connect: { id: user.id } },
      });
      files.forEach(
        async (file) =>
          await prisma.createFile({
            url: file,
            post: {
              connect: {
                id: post.id,
              },
            },
          })
      );
      return post;
    },
  },
};
