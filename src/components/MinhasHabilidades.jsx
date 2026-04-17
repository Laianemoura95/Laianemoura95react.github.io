import React, { useState } from 'react';

const habilidades = [
  { nome: 'React', descricao: 'Biblioteca JavaScript para construção de interfaces de usuário interativas e reutilizáveis.' },
  { nome: 'Java', descricao: 'Linguagem de programação orientada a objetos, amplamente usada para desenvolvimento de aplicações empresariais.' },
  { nome: 'CSS', descricao: 'Linguagem de estilo para criar layouts visuais atraentes e responsivos em páginas web.' },
  { nome: 'Banco de Dados', descricao: 'Gerenciamento e armazenamento de dados, essencial para aplicações dinâmicas e eficientes.' }
];

function MinhasHabilidades() {
  const [selecionada, setSelecionada] = useState(null);

  const handleClick = (index) => {
    setSelecionada(selecionada === index ? null : index);
  };

  return (
    <section id="habilidades" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Minhas Habilidades</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        {habilidades.map((hab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              background: selecionada === index ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' : 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: selecionada === index ? 'scale(1.1)' : 'scale(1)',
              animation: 'float 3s ease-in-out infinite'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = selecionada === index ? 'scale(1.1)' : 'scale(1)'}
          >
            {hab.nome}
          </button>
        ))}
      </div>
      {selecionada !== null && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          <h3>{habilidades[selecionada].nome}</h3>
          <p>{habilidades[selecionada].descricao}</p>
        </div>
      )}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

export default MinhasHabilidades;