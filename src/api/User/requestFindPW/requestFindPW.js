import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestFindPW: async (_, args) => {
      const { userId, email } = args;
      const loginSecret = generateSecret();
      try {
        const user = await prisma.user({ email });
        if (user.userId === userId) {
          await sendSecretMail(email, loginSecret);
          await prisma.updateUser({
            data: { loginSecret },
            where: { email: user.email }
          });
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
