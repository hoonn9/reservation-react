import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchType: async (_, args) => {
      const typeList = await prisma.types();
      const { count, checkIn, checkOut } = args;
      const promises = typeList.map(async type => {
        const { typeCount, id: typeId } = type;
        let reservations = await prisma.type({ id: typeId }).reservations({
          where: { checkIn_gt: checkIn, checkOut_lt: checkOut }
        });
        if (reservations.length < typeCount - count) {
          return type;
        } else {
          return {
            updatedAt: "",
            price: 0,
            typeCount: 0,
            typeName: "",
            id: "",
            createdAt: ""
          };
        }
      });
      return await Promise.all(promises);
    }
  }
};
