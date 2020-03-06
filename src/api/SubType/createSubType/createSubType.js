import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createSubType: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { typeId, subTypeName, price, description } = args;
      const subType = await prisma.createSubType({
        type: { connect: { id: typeId } },
        subTypeName,
        price,
        description
      });
      return subType;
    }
  }
};
