import { prisma } from "../../../../generated/prisma-client";

export default {
  // TODO: 관리자 권한 처리
  Mutation: {
    eventUpload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      //const { user } = request;
      const {
        eventType,
        title,
        subTitle,
        period,
        content,
        files,
        thumbnail
      } = args;
      const event = await prisma.createEvent({
        eventType,
        title,
        subTitle,
        period,
        content,
        thumbnail
      });
      files.forEach(
        async file =>
          await prisma.createFile({
            url: file,
            event: {
              connect: {
                id: event.id
              }
            }
          })
      );
      return event;
    }
  }
};
