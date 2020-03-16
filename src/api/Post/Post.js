import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    user: ({ id }) => prisma.post({ id }).user(),
    board: ({ id }) => prisma.post({ id }).board()
  }
};
