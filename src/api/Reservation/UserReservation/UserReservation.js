import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    userReservation: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { typeId, checkIn, checkOut } = args;
      const reservation = await prisma.createReservation({
        type: {
          connect: { id: typeId }
        },
        user: {
          connect: { id: user.id }
        },
        checkIn,
        checkOut
      });
      return reservation;
    }
  }
};
