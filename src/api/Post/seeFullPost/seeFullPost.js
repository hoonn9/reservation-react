import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      try {
        const post = await prisma.post({ id });
        const { views } = post;
        try {
          await prisma.updatePost({
            data: { views: views + 1 },
            where: { id }
          });
          return post;
        } catch (e) {
          console.log(e);
          return post;
        }
      } catch (e) {
        return {};
      }
    }
  }
};
