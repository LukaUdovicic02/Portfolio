import { NextResponse } from "next/server";

export async function GET() {
  const blobUrl =
    "https://mreimagestorage.blob.core.windows.net/imagecontainer/CV.pdf";

  const response = await fetch(blobUrl);
  if (!response.ok) {
    return new Response("Failed to fetch CV", { status: 500 });
  }

  const blob = await response.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV.pdf"',
    },
  });
}
