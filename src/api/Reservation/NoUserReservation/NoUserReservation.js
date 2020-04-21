import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    noUserReservation: async (_, args) => {
      const {
        roomId,
        packId,
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
        checkOut,
      } = args;
      try {
        const isNoUser = await prisma.$exists.noUser({
          email: reserveUserEmail,
        });
        if (isNoUser) {
          const noUser = await prisma.updateNoUser({
            where: { email: reserveUserEmail },
            data: {
              username: reserveUserName,
              bio: reserveUserSex,
              phoneNum: reserveUserPhone,
            },
          });
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
            noUser: {
              connect: { id: noUser.id },
            },
            guest: {
              connect: { id: guest.id },
            },
            price: room.price + pack.price,
            count,
            needs,
            adult,
            child,
            checkIn,
            checkOut,
          });
          return reservation;
        } else {
          const noUser = await prisma.createNoUser({
            username: reserveUserName,
            bio: reserveUserSex,
            phoneNum: reserveUserPhone,
            email: reserveUserEmail,
          });
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
            noUser: {
              connect: { id: noUser.id },
            },
            guest: {
              connect: { id: guest.id },
            },
            price: room.price + pack.price,
            count,
            needs,
            adult,
            child,
            checkIn,
            checkOut,
          });
          return reservation;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};
