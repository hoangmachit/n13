import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const saltRounds = 10;
var pass = "Fkdj^45ci@Jad";
const prisma = new PrismaClient();
async function main() {
  await prisma.role.create({
    data: {
      role_name: "Supper Admin",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.role.create({
    data: {
      role_name: "Admin",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.role.create({
    data: {
      role_name: "Editor",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.permission.create({
    data: {
      permission_name: "user_edit",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.permission.create({
    data: {
      permission_name: "user_create",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.permission.create({
    data: {
      permission_name: "user_delete",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.permission.create({
    data: {
      permission_name: "user_view",
      created_at: "2020-03-19T14:21:00+02:00",
      updated_at: "2020-03-19T14:21:00+02:00",
      deleted_at: null
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 1,
      permission_id: 1
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 1,
      permission_id: 2
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 1,
      permission_id: 3
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 1,
      permission_id: 4
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 2,
      permission_id: 2
    }
  });
  await prisma.permisson_Group.create({
    data: {
      role_id: 2,
      permission_id: 3
    }
  });
  await bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(pass, salt, async function (err, hash) {
      console.log('hash', hash);
      console.log('error', err);
      await prisma.user.create({
        data: {
          id: 'clhjyd7jo0000u0jofkaigancnd',
          name: "Supper Admin",
          email: 'supper@gmail.com',
          emailVerified: null,
          image: 'https://lh3.googleusercontent.com/a/AGNmyxbTfUUIs7zHdt7ieqNTvXBOYM6lhS1MdX8cJlyk=s96-c',
          password: hash
        }
      });
    });
  });

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
