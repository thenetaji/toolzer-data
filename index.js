/**
 * Main API file to send JSON response to toolzer frontend during build process powered by hono.js
 */
import { Hono } from "hono";
import { logger } from "hono/logger";
 
const app = new Hono();
app.use(logger());
 
 /**
  * get all the category of main tool supported for 'category' section rendering on /tools page eg. image
  */
//app.get("/category", async (ctx) => {
/**  const categoryFiles = await fs.readdir(`${path.join(__dirname, "list")}`, 
     { withFileTypes: true });
  console.info("Files being read for sending category", {
    categoryFiles
  });
  
  /**
   * category: [
   *   image: [form]
   * ]
   */
/**   ctx.json({
 //  });
//});**/

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app