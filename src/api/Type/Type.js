import { prisma } from "../../../generated/prisma-client";

export default {
  Type: {
    reservations: ({ id }) => prisma.type({ id }).reservations()
  }
};
