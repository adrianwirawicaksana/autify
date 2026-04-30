import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.member.findMany({
      orderBy: { slotIndex: "asc" },
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { slotIndex, name, role, social, desc, photo } = body;

    // ✅ Hanya terima 0–4, slot 99 sudah tidak dipakai
    if (typeof slotIndex !== "number" || slotIndex < 0 || slotIndex > 4) {
      return NextResponse.json(
        { success: false, message: "slotIndex tidak valid (harus 0–4)" },
        { status: 400 },
      );
    }

    const updated = await prisma.member.upsert({
      where: { slotIndex },
      update: { name, role, social, desc, photo },
      create: { slotIndex, name, role, social, desc, photo },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal menyimpan data" },
      { status: 500 },
    );
  }
}
