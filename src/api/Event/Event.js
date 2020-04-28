import { prisma } from "../../../generated/prisma-client";

export default {
  Event: {
    files: async ({ id }) => prisma.event({ id }).files(),
  },
};
