export async function GET(request, {params}){

    const depa = params.depa

    const res = await fetch(`http://localhost:8080/arvore-produto-departamento/${depa}`);

    if (!res.ok) throw new Error("Algum problema");

    const data = await res.json();

    return NextResponse.json({data})


}