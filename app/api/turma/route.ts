// meu-primeiro-deploy/app/api/turma/route.ts
// Arquivo de rota da API para a rota /api/turma
// =============================================

// export const dynamic = "force-dynamic"; // garante resposta calculada a cada requisição, porém esse comando dynamic é redundante e não funciona no next.js 16

export async function GET() {
  console.log("API /turma chamada em", new Date().toISOString());
  return Response.json({
    turma: process.env.NOME_TURMA ?? "variável não definida",
  });
}
