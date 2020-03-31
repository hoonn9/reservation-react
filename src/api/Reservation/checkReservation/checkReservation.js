import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    checkReservation: async (_, args) => {
      const { id } = args;

      const reservation = await prisma.reservation({ id });
      return reservation;
    }
  }
};
