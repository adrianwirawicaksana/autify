import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, age, gender } = body;

    if (!name || !age || !gender) {
      return NextResponse.json(
        { success: false, message: "Data tidak lengkap" },
        { status: 400 },
      );
    }

    // biasanya sini simpan ke DB

    return NextResponse.json({
      success: true,
      message: "Berhasil",
      data: { name, age, gender },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
