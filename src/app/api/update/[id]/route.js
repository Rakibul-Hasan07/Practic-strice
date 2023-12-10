import { NextResponse } from "next/server"

export async function PUT(request, content) {
    console.log('content',content.params.id)
    return NextResponse.json('id')
    
}