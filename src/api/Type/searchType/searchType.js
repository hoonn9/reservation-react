import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchType: async (_, args) => {
      const typeList = await prisma.types();
      const { count, checkIn, checkOut } = args;
      console.log(checkIn, checkOut);
      const promises = typeList.map(async type => {
        const { typeCount, id: typeId } = type;
        let reservations = await prisma.type({ id: typeId }).reservations({
          where: { checkIn_gte: checkIn, checkOut_lte: checkOut }
        });
        console.log(type);
        let sum = 0;
        reservations.forEach(e => {
          sum += e.count;
        });
        console.log(sum);
        if (sum + count <= typeCount) {
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
