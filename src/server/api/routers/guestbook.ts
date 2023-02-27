import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

import { TRPCError } from "@trpc/server";

export const guestbookRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            try {
                return await ctx.prisma.guestbook.findMany({
                    select: {
                        id: true,
                        email: true,
                        hidden: true,
                        message: true,
                        createdAt: true,
                        user: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }),

    postMessage: protectedProcedure
        .input(z.object({
            email: z.string(),
            message: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.prisma.guestbook.create({
                    data: {
                        email: input.email,
                        message: input.message,
                        createdAt: new Date(Date.now()),
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }),

    deleteMessage: protectedProcedure
        .input(z.object({
            id: z.string(),
            email: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            if (ctx.session.user.email !== input.email) {
                throw new TRPCError({ code: "UNAUTHORIZED" });
            }

            try {
                await ctx.prisma.guestbook.delete({
                    where: {
                        id: input.id
                    }
                });
            } catch (e) {
                console.error(e);
            }
        })

})