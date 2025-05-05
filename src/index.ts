import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { usersTable } from "./db/schema";
import { ListCard } from "./app/store/ListCard";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  await db.insert(usersTable).values({
    id: ListCard[0].id,
    image: `${ListCard[0].image}`,
    name: `${ListCard[0].name}`,
    type: `${ListCard[0].type}`,
    description: `${ListCard[0].description}`,
  });
  //   const user: typeof usersTable.$inferInsert = {
  //     image:
  //       "https://static.wikitide.net/astralpartywiki/thumb/2/28/Attack_%28M%29.png/120px-Attack_%28M%29.png",
  //     name: "Attack (M)",
  //     type: "Attack",
  //     description: "ATK +1~3.\n(Only for attacker)",
  //   };

  //   await db.insert(usersTable).values(user);
  //   console.log("New user created!");

  //   const users = await db.select().from(usersTable);
  //   console.log("Getting all users from the database: ", users);

  //   await db
  //     .update(usersTable)
  //     .set({
  //       name: "DEF",
  //     })
  //     .where(eq(usersTable.type, user.type));
  //   console.log("User info updated!");

  //   await db.delete(usersTable).where(eq(usersTable.type, user.type));
  //   console.log("User deleted!");
}

main();
