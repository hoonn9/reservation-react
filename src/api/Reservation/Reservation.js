import { prisma } from "../../../generated/prisma-client";

export default {
  Reservation: {
    type: ({ id }) => prisma.reservation({ id }).type(),
    subType: ({ id }) => prisma.reservation({ id }).subType(),
    user: ({ id }) => prisma.reservation({ id }).user(),
    noUser: ({ id }) => prisma.reservation({ id }).noUser(),
    guest: ({ id }) => prisma.reservation({ id }).guest()
  }
};
