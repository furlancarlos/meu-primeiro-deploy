// meu-primeiro-deploy/app/page.tsx
// Arquivo da página principal do aplicativo Next.js
// =================================================

"use client";

import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function chamarApi() {
    setCarregando(true);
    try {
      const res = await fetch(`/api/saudacao?nome=${encodeURIComponent(nome)}`);
      const dados = await res.json();
      setResposta(dados.mensagem);
    } catch {
      setResposta("Erro ao chamar a API.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 space-y-6">
        {/* Cabeçalho */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Next.js + Vercel
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Olá, DSM / FATEC! Agora com branch de API serverless em tempo real!
          </h1>
          <p className="text-sm text-slate-500">
            Digite seu nome abaixo para testar a rota de API serverless em tempo
            real.
          </p>
        </div>

        {/* Formulário */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome..."
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <button
              onClick={chamarApi}
              disabled={carregando}
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-sm px-5 py-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-150 flex items-center justify-center min-w-30 shadow-sm shadow-blue-500/20"
            >
              {carregando ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Buscando...
                </span>
              ) : (
                "Chamar API"
              )}
            </button>
          </div>
        </div>

        {/* Painel de Resposta da API */}
        {resposta && (
          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl space-y-1">
            <span className="text-[10px] font-semibold tracking-wider text-blue-600 uppercase">
              Resposta da API
            </span>
            <p className="text-base font-medium text-slate-800">{resposta}</p>
          </div>
        )}
      </div>
    </main>
  );
}
