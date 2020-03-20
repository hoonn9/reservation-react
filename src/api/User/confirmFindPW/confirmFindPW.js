import { prisma } from "../../../../generated/prisma-client";
import { generatePassword, cryptoCipher } from "../../../utils";
export default {
  Mutation: {
    confirmFindPW: async (_, args) => {
      const { email, userId, secret } = args;
      const user = await prisma.user({ email });

      try {
        if (userId === user.userId) {
          if (user.loginSecret === secret) {
            const genPassword = generatePassword();
            const secretPassword = cryptoCipher(genPassword);
            await prisma.updateUser({
              where: { id: user.id },
              data: {
                loginSecret: "",
                password: secretPassword
              }
            });
            return genPassword;
          } else {
            throw Error("Wrong email/secret combination");
          }
        } else {
          throw Error();
        }
      } catch (e) {
        return "";
      }
    }
  }
};
