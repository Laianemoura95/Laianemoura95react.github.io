import React, { useState } from 'react';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import MinhasHabilidades from './components/MinhasHabilidades';
import AssistenteSocial from './components/AssistenteSocial';
import './index.css'; 
import fotoPerfil from './assets/perfil.jpg';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  return (
    <div className={`${temaEscuro ? 'dark-theme' : ''}`} style={{ minHeight: '100vh' }}>
      <Header alternarTema={alternarTema} temaEscuro={temaEscuro} />

      <main>
        
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <img src={fotoPerfil} alt="Foto de Laiane Moura" />
            <p>Sou Laiane Moura, Tenho 30 anos sou formada em Serviço Social e especialista em politicas publicas e intervenção social,
               atualmente migrando para o mundo da tecnolodia onde estou cursando pela 
              Uespi o curso de Sistema para internet.</p>
        </section>

        <MinhasHabilidades />
        <AssistenteSocial />

        <ProjectsSection />
        
        <section id="contato">
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label htmlFor="nome">Nome:</label>
              <input 
                id="nome" 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="campo">
              <label htmlFor="msg">Mensagem:</label>
              <textarea 
                id="msg" 
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Laiane Moura</p>
      </footer>
    </div>
  );
}

export default App;