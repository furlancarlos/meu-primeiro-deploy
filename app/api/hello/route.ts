// meu-primeiro-deploy/app/api/hello/route.ts
// Arquivo de rota da API para a rota /api/hello
// =============================================

// export const dynamic = "force-dynamic"; // garante resposta calculada a cada requisição, porém esse comando dynamic é redundante e não funciona no next.js 16

export async function GET() {
  return Response.json({
    mensagem: "Olá! Esta resposta veio da minha API 🚀",
    horario: new Date().toISOString(),
  });
}
