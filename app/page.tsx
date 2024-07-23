import { Form } from "@/components/ui/form";
import Image from "next/image";

export default function Home() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  });
  return <Form></Form>;
}
