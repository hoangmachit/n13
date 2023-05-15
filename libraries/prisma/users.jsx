import prisma from ".";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user });
    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getUserById(email = "hoangmach.website@gmail.com") {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log("email", email);
    return { user };
  } catch (error) {
    return { error };
  }
}
