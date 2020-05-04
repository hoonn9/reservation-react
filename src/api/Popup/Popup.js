import { prisma } from "../../../generated/prisma-client";

export default {
  Popup: {
    files: async ({ id }) => prisma.popup({ id }).files(),
  },
};
