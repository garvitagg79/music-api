import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const jsonFilePath = path.join(process.cwd(), 'app/data', 'music-data.json');

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf8');
    const musicData = JSON.parse(fileContents);

    return NextResponse.json(musicData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load music data' }, { status: 500 });
  }
}
