"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import { questions } from "@/app/(screening)/screening/quiz/_types/questions";

const Page = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(20).fill(null),
  );

  const current = questions[index];

  const next = () => {
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const back = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleBack = () => {
    if (index === 0) {
      router.push("/screening/form");
    } else {
      back();
    }
  };

  // ✅ TAMBAHAN: pilih jawaban
  const selectAnswer = (value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  // ✅ cek apakah sudah jawab
  const isAnswered = answers[index] !== null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card>
        <div className="text-center text-gray-800 space-y-6 w-full">
          <header className="w-full space-y-4">
            {/* BADGE */}
            <div className="inline-flex font-semibold items-center px-3 py-1 text-[#008087] bg-[#F2FF00] border border-[#008087] rounded-2xl">
              <p className="text-sm">
                Pertanyaan ke {index + 1} dari {questions.length}
              </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full border border-gray-400 overflow-hidden">
              <div
                className="h-full bg-[linear-gradient(to_right,#f15b5b_0%,#195B94_30%,#008087_65%,#F2FF00_100%)] shadow-[0_0_25px_rgba(0,255,200,0.4)] transition-all duration-300"
                style={{
                  width: `${((index + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            {/* INDICATOR BULAT (jawaban status) */}
            <div className="flex flex-wrap gap-2 justify-center">
              {answers.map((ans, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    ans === "YA"
                      ? "bg-green-500"
                      : ans === "TIDAK"
                        ? "bg-red-500"
                        : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </header>

          {/* 🔥 CONTAINER KIRI-KANAN */}
          <div className="flex gap-6 items-center">
            {/* LEFT: QUESTION */}
            <div className="w-1/2 text-left space-y-4">
              <h2 className="text-lg font-semibold">{current.question}</h2>

              {/* ANSWER BUTTONS */}
              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => selectAnswer("YA")}
                  className={`w-full p-2 border rounded-lg transition ${
                    answers[index] === "YA"
                      ? "bg-green-500 text-black"
                      : "bg-transparent"
                  }`}
                >
                  Ya
                </Button>

                <Button
                  onClick={() => selectAnswer("TIDAK")}
                  className={`w-full p-2 border rounded-lg transition ${
                    answers[index] === "TIDAK"
                      ? "bg-red-600 text-white"
                      : "bg-transparent"
                  }`}
                >
                  Tidak
                </Button>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="w-1/2 flex justify-center">
              {current.image && (
                <div className="w-[200px] aspect-square relative">
                  <Image
                    src={current.image}
                    alt="question image"
                    fill
                    className="object-cover rounded-xl"
                    sizes="200px"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              onClick={handleBack}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 transition"
            >
              {index === 0 ? "Kembali ke Form" : "Kembali"}
            </button>

            <button
              onClick={next}
              disabled={!isAnswered || index === questions.length - 1}
              className={`w-full px-4 py-2 rounded-lg transition text-white font-medium
      ${
        !isAnswered || index === questions.length - 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      }
    `}
            >
              Lanjut
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Page;
