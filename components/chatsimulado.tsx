export const ChatSimulado = () => {
    const mensagens = [
      "Oi! Tudo bem? Como posso te ajudar hoje?",
      "Tudo ótimo! Queria saber se vocês entregam no meu endereço.",
      "Claro! Qual o seu CEP?",
      "04567-123",
      "Ótimo! A gente entrega sim. E o melhor: o frete é grátis para a sua região! :)",
      "Que demais! E quanto tempo leva?",
      "Se você pedir até as 16h de hoje, chega amanhã mesmo. Bem rapidinho, né?",
      "Perfeito! Vou pedir agora. Obrigado!",
      "Imagina! Qualquer coisa, é só me chamar ;)",
    ];
  
    return (
      <div className="bg-black min-h-screen flex items-center justify-center px-4">
        <div className="relative w-[320px] sm:w-[380px] rounded-[40px] border border-white/10 bg-neutral-900 p-6 shadow-xl">
          {/* Notch do topo */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-800 rounded-full z-10" />
  
          {/* Conversa */}
          <div className="mt-10 flex flex-col gap-4">
            {mensagens.map((msg, i) => (
              <div
                key={i}
                className="bg-neutral-800 text-white text-sm p-4 rounded-lg leading-snug"
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };