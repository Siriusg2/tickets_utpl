/**
 * ! Executing this script will delete all data in your database and seed it with 10 role.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import { hash } from "argon2";

const main = async () => {
  const seed = await createSeedClient();
  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Seed the database with 10 role
  await seed.role([{ name: "Administrador" }, { name: "User" }]);
  await seed.period([
    { name: "Primer cuatrimestre" },
    { name: "Segundo cuatrimestre" },
    { name: "Tercer cuatrimestre" },
    { name: "Cuarto cuatrimestre" },
  ]);
  await seed.status([
    { name: "Pendiente" },
    { name: "Escalado" },
    { name: "En proceso" },
    { name: "Cerrado" },
  ]);

  await seed.priority([
    { name: "Alta" },
    { name: "Baja" },
    { name: "Media" },
    { name: "No establecida" },
  ]);
  await seed.nomenclature([
    { name: "No recibe correo para reiniciar la contraseña" },
    { name: "No se puede realizar orden de pago" },
    { name: "Ampliación de fecha para postular a beca" },
  ]);

  const encryptPassword = async (password: string) => {
    return await hash(password);
  };
  const encryptedPassword = await encryptPassword(
    process.env.ADMIN_PASS || "admin"
  );
  await seed.user([
    {
      username: "nherrada",
      password: encryptedPassword,
      role_id: 1,
      createdAt: Date.now(),
    },
  ]);

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();
