import { NextRequest, NextResponse } from 'next/server';
import { getContent, saveContent, WebsiteContent } from '@/lib/content';

// Get specific section
export async function GET(
  request: NextRequest,
  { params }: { params: { section: string } }
) {
  try {
    const content = getContent();
    const section = params.section as keyof WebsiteContent;
    
    if (!content[section]) {
      return NextResponse.json(
        { error: 'Section not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(content[section]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// Update specific section
export async function PUT(
  request: NextRequest,
  { params }: { params: { section: string } }
) {
  try {
    const apiKey = request.headers.get('x-api-key');
    const expectedApiKey = process.env.ADMIN_API_KEY;

    if (!expectedApiKey) {
      return NextResponse.json(
        { error: 'API key not configured on server' },
        { status: 500 }
      );
    }

    if (!apiKey || apiKey !== expectedApiKey) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid API key' },
        { status: 401 }
      );
    }

    const content = getContent();
    const section = params.section as keyof WebsiteContent;
    const sectionData = await request.json();

    if (!content[section]) {
      return NextResponse.json(
        { error: 'Section not found' },
        { status: 404 }
      );
    }

    // Update the specific section
    const updatedContent = {
      ...content,
      [section]: sectionData,
    };

    saveContent(updatedContent);
    
    return NextResponse.json({ success: true, message: 'Section updated successfully' });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}

