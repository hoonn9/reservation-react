import { prisma } from "../../../../generated/prisma-client";
import "../../../env";
import { cryptoCipher } from "../../../utils";
export default {
  Mutation: {
    //async (_, args, {prisma}  context 사용
    createAccount: async (_, args) => {
      const { userId, password, username, email, phoneNum, address } = args;
      const exists = await prisma.$exists.user({
        OR: [{ userId }, { email }]
      });
      if (exists) {
        throw Error("This username / email is already taken");
      }

      const secretPassword = cryptoCipher(password);

      await prisma.createUser({
        userId,
        password: secretPassword,
        username,
        email,
        phoneNum,
        address
      });
      return true;
    }
  }
};
