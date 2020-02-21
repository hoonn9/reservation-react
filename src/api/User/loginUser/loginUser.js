import { prisma } from "../../../../generated/prisma-client";
import "../../../env";
import { generateToken, cryptoCipher } from "../../../utils";
export default {
  Mutation: {
    loginUser: async (_, args) => {
      const { userId, password } = args;
      const secretPassword = cryptoCipher(password);

      try {
        const { id, password } = await prisma.user({ userId });
        if (password === secretPassword) {
          return generateToken(id);
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  }
};
