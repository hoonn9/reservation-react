import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchType: async (_, args) => {
      const { checkIn, checkOut } = args;
      //   const typeList = await prisma.types();
      //   console.log(typeList);
      //   const reservations = await prisma
      //     .type({ id: typeList[0].id })
      //     .reservations({
      //       where: { checkIn_gt: checkIn, checkOut_lt: checkOut }
      //     });

      return prisma.types();
    }
  }
};
