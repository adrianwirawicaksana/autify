import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  age: string;
  gender: string;
};

export const useForm = () => {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/screening", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/screening/quiz");
      }
      console.log("Success:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return { form, handleChange, handleSubmit };
};
