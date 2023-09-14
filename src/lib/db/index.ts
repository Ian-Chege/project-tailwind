import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DRIZZLE_DATABASE_URL environment variable")
}

const sql = neon(process.env.DATABASE_URL)
const db = drizzle(sql)
