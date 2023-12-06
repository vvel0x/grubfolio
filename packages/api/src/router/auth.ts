import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(async ({ ctx }) => {
    await delay(1000);
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return "you can see this secret message!";
  }),
});
