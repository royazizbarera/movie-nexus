

import prisma from "../config/client";


export default async function testDummy() {
  try {
    await prisma.genre.create({
      data: {
        name: "Action",
      },
    });
  } catch (error) {
    throw new Error(String(error));
  }
}
