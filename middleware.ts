import { NextResponse } from "next/server"

const signedinPages = ['/', '/playlist', 'library']

export default function middleware(req){

    if(signedinPages.find(p => p === req.nextUrl.pathname)){
        const token = req.cookies.get('TRAX_ACCESS_TOKEN')?.value

        if(!token){
            const url = req.nextUrl.clone()
            url.pathname = '/signin'
            return NextResponse.redirect(url)
        }
    }
}