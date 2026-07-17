import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const MESSAGES_FILE = path.join(process.cwd(), "data", "messages.json");

// Ensure the data directory and file exist
async function ensureFile() {
  const dir = path.dirname(MESSAGES_FILE);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    await fs.access(MESSAGES_FILE);
  } catch {
    await fs.writeFile(MESSAGES_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Vui lòng điền đầy đủ thông tin." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Email không hợp lệ." },
        { status: 400 }
      );
    }

    // Save message
    await ensureFile();
    const raw = await fs.readFile(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(raw);

    const newMessage = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");

    console.log(`📩 New contact message from: ${name} <${email}>`);

    return NextResponse.json(
      {
        success: true,
        message: "Tin nhắn đã được gửi thành công! Cảm ơn bạn đã liên hệ.",
        data: { id: newMessage.id, createdAt: newMessage.createdAt },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra lỗi máy chủ. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureFile();
    const raw = await fs.readFile(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(raw);

    return NextResponse.json({
      success: true,
      total: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error("❌ GET messages error:", error);
    return NextResponse.json(
      { success: false, error: "Không thể tải tin nhắn." },
      { status: 500 }
    );
  }
}
