import { prisma } from "../../../../generated/prisma-client";
import { cryptoCipher } from "../../../utils";

export default {
  Mutation: {
    updatePW: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { currentPw, newPw } = args;

      try {
        const updateUser = await prisma.user({ id: user.id });
        if (updateUser.password === cryptoCipher(currentPw)) {
          await prisma.updateUser({
            data: { password: cryptoCipher(newPw) },
            where: { id: user.id }
          });
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
};
