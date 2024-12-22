import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../db';

export const taskRouter = router({
  getAll: publicProcedure.query(async () => {
    return await prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  create: publicProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ input }) => {
      return await prisma.task.create({
        data: { title: input.title },
      });
    }),

  toggle: publicProcedure
    .input(z.object({ id: z.string(), completed: z.boolean() }))
    .mutation(async ({ input }) => {
      return await prisma.task.update({
        where: { id: input.id },
        data: { completed: input.completed },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.task.delete({
        where: { id: input.id },
      });
    }),
});