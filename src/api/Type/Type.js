import { prisma } from "../../../generated/prisma-client";

export default {
  Type: {
    reservations: ({ id }) => prisma.type({ id }).reservations(),
    subTypes: ({ id }) => prisma.type({ id }).subTypes(),
    files: ({ id }) => prisma.type({ id }).files()
  }
};
