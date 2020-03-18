import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { name, email } = args;
      const loginSecret = generateSecret();
      try {
        const user = await prisma.user({ email });
        if (name === user.username) {
          await sendSecretMail(email, loginSecret);
          await prisma.updateUser({
            data: { loginSecret },
            where: { email }
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
