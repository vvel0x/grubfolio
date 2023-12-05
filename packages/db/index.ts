import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { recipes } from "./schema/recipe";

const sql = neon(process.env.DATABASE_URL!);

neonConfig.fetchConnectionCache = true;

export * from "drizzle-orm";
export const schema = { ...recipes };
export const db = drizzle(sql, { schema });
