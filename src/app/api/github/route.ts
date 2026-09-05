import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userRes = await fetch("https://api.github.com/users/MaskDMoa", {
      next: { revalidate: 3600 }
    });
    const userData = await userRes.json();

    const reposRes = await fetch("https://api.github.com/users/MaskDMoa/repos?per_page=100", {
      next: { revalidate: 3600 }
    });
    const reposData = await reposRes.json();

    return NextResponse.json({ userData, reposData });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Github stats" }, { status: 500 });
  }
}
