import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchRoom: async (_, args) => {
      const roomList = await prisma.rooms();
      const { count, checkIn, checkOut } = args;
      console.log(checkIn, checkOut);
      const promises = roomList.map(async (room) => {
        const { count: roomCount, id: roomId } = room;
        let reservations = await prisma.room({ id: roomId }).reservations({
          where: { checkIn_gte: checkIn, checkOut_lte: checkOut },
        });
        console.log(room);
        let sum = 0;
        reservations.forEach((e) => {
          sum += e.count;
        });
        console.log(sum);
        if (sum + count <= roomCount) {
          return room;
        } else {
          return {
            updatedAt: "",
            price: 0,
            count: 0,
            name: "",
            id: "",
            createdAt: "",
          };
        }
      });
      return await Promise.all(promises);
    },
  },
};
