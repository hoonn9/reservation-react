import { prisma } from "../../../generated/prisma-client";

export default {
  Reservation: {
    type: ({ id }) => prisma.reservation({ id }).type()
  }
};
