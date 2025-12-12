import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  // Типизируем body
  const body = await readBody<{ slug: string }>(event);
  const slug = body.slug; // теперь TypeScript не ругается
  console.log(slug);
});
