import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    userReservation: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const {
        roomId,
        packId,
        guestUserName,
        guestUserSex,
        guestUserPhone,
        guestUserEmail,
        count,
        adult,
        child,
        needs,
        checkIn,
        checkOut,
      } = args;
      const guest = await prisma.createGuest({
        username: guestUserName,
        bio: guestUserSex,
        phoneNum: guestUserPhone,
        email: guestUserEmail,
      });
      const room = await prisma.room({ id: roomId });
      const pack = await prisma.pack({ id: packId });
      const reservation = await prisma.createReservation({
        room: {
          connect: { id: roomId },
        },
        pack: {
          connect: { id: packId },
        },
        user: {
          connect: { id: user.id },
        },
        guest: {
          connect: { id: guest.id },
        },
        price: room.price + pack.price,
        count,
        needs,
        count,
        adult,
        child,
        checkIn,
        checkOut,
      });
      return reservation;
    },
  },
};
