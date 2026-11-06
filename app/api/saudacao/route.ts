// meu-primeiro-deploy/app/api/saudacao/route.ts
// Arquivo de rota da API para a rota /api/saudacao
// ================================================

// export const dynamic = "force-dynamic"; // garante resposta calculada a cada requisição, porém esse comando dynamic é redundante e não funciona no next.js 16

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nome = searchParams.get("nome") || "visitante";

  return Response.json({
    mensagem: `Olá, ${nome}! Bem-vindo(a) à nuvem ☁️`,
  });
}
