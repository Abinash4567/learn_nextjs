export default function GET(request: Request){
    return new Response(JSON.stringify({data: "Abinash", message: "Requested"}), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}