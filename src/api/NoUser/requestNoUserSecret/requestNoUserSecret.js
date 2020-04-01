import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestNoUserSecret: async (_, args) => {
      const { name, email } = args;
      const loginSecret = generateSecret();
      try {
        const noUser = await prisma.noUser({ email });
        if (name === noUser.username) {
          await sendSecretMail(email, loginSecret);
          await prisma.updateNoUser({
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
