import { prisma } from "../../../generated/prisma-client";

export default {
  Reservation: {
    room: ({ id }) => prisma.reservation({ id }).room(),
    pack: ({ id }) => prisma.reservation({ id }).pack(),
    user: ({ id }) => prisma.reservation({ id }).user(),
    noUser: ({ id }) => prisma.reservation({ id }).noUser(),
    guest: ({ id }) => prisma.reservation({ id }).guest(),
  },
};
