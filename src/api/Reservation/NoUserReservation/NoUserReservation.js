import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    noUserReservation: async (_, args) => {
      const {
        typeId,
        subTypeId,
        reserveUserName,
        reserveUserSex,
        reserveUserPhone,
        reserveUserEmail,
        guestUserName,
        guestUserSex,
        guestUserPhone,
        guestUserEmail,
        count,
        adult,
        child,
        needs,
        checkIn,
        checkOut
      } = args;
      const noUser = await prisma.createNoUser({
        username: reserveUserName,
        bio: reserveUserSex,
        phoneNum: reserveUserPhone,
        email: reserveUserEmail
      });
      const guest = await prisma.createGuest({
        username: guestUserName,
        bio: guestUserSex,
        phoneNum: guestUserPhone,
        email: guestUserEmail
      });
      const type = await prisma.type({ id: typeId });
      const subType = await prisma.subType({ id: subTypeId });
      const reservation = await prisma.createReservation({
        type: {
          connect: { id: typeId }
        },
        subType: {
          connect: { id: subTypeId }
        },
        noUser: {
          connect: { id: noUser.id }
        },
        guest: {
          connect: { id: guest.id }
        },
        price: type.price + subType.price,
        count,
        needs,
        adult,
        child,
        checkIn,
        checkOut
      });

      return reservation;
    }
  }
};
