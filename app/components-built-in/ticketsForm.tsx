"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ImageUpload from "./imageUpload";
import { X } from "lucide-react";

const formSchema = z.object({
  asunto: z.string().min(1, { message: "Por favor, seleccione un asunto." }),
  descripcion: z.string().min(10, { message: "La descripción debe tener al menos 10 caracteres." }),
  dni: z
      .string()
      .refine((val) => {
        const numberValue = Number(val);
        return !isNaN(numberValue) && /^\d{10}$/.test(val);
      }, { message: "El DNI debe ser un número y tener exactamente 10 dígitos." }),
  image1: z.any().nullable(),
  image2: z.any().nullable(),
  image3: z.any().nullable(),
});

export default function TicketsForm() {
    const methods = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            asunto: "",
            descripcion: "",
            dni: "",
            image1: null,
            image2: null,
            image3: null,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      const convertedValues = {
        ...values,
        dni: Number(values.dni),
      };
      console.log(convertedValues);
    }

    const handleDeleteImage = (imageName: "image1" | "image2" | "image3") => {
      methods.setValue(imageName, null);
    };

    return (
        <FormProvider {...methods}>
            <Form {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-2">
                        <div className="space-y-16">
                            <FormField
                                control={methods.control}
                                name="asunto"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Asunto</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seleccione un asunto" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="consulta">Consulta</SelectItem>
                                                <SelectItem value="reclamo">Reclamo</SelectItem>
                                                <SelectItem value="sugerencia">Sugerencia</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={methods.control}
                                name="descripcion"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Descripción</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Ingrese la descripción"
                                                className="min-h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={methods.control}
                                name="dni"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>DNI Estudiante</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Ingrese el DNI"
                                                {...field}
                                                maxLength={10}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-16">
                            {["image1", "image2", "image3"].map((imageName, index) => (
                                <FormField
                                    key={imageName}
                                    control={methods.control}
                                    name={imageName as "image1" | "image2" | "image3"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Imagen {index + 1}</FormLabel>
                                            <div className="relative">
                                                <ImageUpload name={imageName} />
                                                {field.value && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteImage(imageName as "image1" | "image2" | "image3")}
                                                        className="absolute top-0 right-5 p-1 bg-red-500 text-white rounded-full"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                )}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <Button className="text-primary-background" type="submit">
                            Enviar
                        </Button>
                    </div>
                </form>
            </Form>
        </FormProvider>
    );
}