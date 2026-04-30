// app/api/team-name/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.teamName.findFirst();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengambil nama tim" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { name, updatedBy } = await req.json();

    if (!name?.trim()) {
      return NextResponse.json(
        { success: false, message: "Nama tim tidak boleh kosong" },
        { status: 400 },
      );
    }

    const existing = await prisma.teamName.findFirst();

    const updated = existing
      ? await prisma.teamName.update({
          where: { id: existing.id },
          data: { name: name.trim(), updatedBy: updatedBy || "" },
        })
      : await prisma.teamName.create({
          data: { name: name.trim(), updatedBy: updatedBy || "" },
        });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal menyimpan nama tim" },
      { status: 500 },
    );
  }
}
