import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    checkReservation: async (_, args) => {
      const { reservationId } = args;

      const reservation = await prisma.reservation({ id: reservationId });
      return reservation;
    }
  }
};
