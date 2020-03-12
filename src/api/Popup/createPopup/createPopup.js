import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createPopup: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { title, content, url } = args;
      const popup = await prisma.createPopup({
        title,
        content,
        url
      });
      return popup;
    }
  }
};
