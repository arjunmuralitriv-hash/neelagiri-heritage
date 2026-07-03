import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Add timestamp
    const lead = {
      ...data,
      submittedAt: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), 'leads.json');
    
    let leads = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      leads = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist yet, which is fine
    }

    leads.push(lead);
    
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf8');

    return NextResponse.json({ success: true, message: 'Lead saved successfully' });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ success: false, error: 'Failed to save lead' }, { status: 500 });
  }
}
