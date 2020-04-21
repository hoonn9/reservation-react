import { prisma } from "../../../generated/prisma-client";

export default {
  Room: {
    reservations: ({ id }) => prisma.room({ id }).reservations(),
    packs: ({ id }) => prisma.room({ id }).packs(),
    files: ({ id }) => prisma.room({ id }).files(),
  },
};
