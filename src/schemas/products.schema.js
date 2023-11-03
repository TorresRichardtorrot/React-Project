import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string({
    required_error: "El título es obligatorio",
  }),
  price: z
    .number({
      required_error: "El precio es obligatorio",
    })
    .min(1, {
      message: "Precio no puede ser menor a 1",
    }),
  category: z.string({
    required_error: "La categoría es obligatoria",
  }),
  brand: z.string({
    required_error: "La marca es obligatoria",
  }),
  type: z.string({
    required_error: "El tipo es obligatorio",
  }),
  genre: z.string({
    required_error: "El género es obligatorio",
  }),
});
