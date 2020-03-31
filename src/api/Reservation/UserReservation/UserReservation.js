import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    userReservation: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const {
        typeId,
        subTypeId,
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
        user: {
          connect: { id: user.id }
        },
        guest: {
          connect: { id: guest.id }
        },
        price: type.price + subType.price,
        count,
        needs,
        count,
        adult,
        child,
        checkIn,
        checkOut
      });
      return reservation;
    }
  }
};
