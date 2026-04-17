import React from 'react';

function Header({ alternarTema, temaEscuro }) {
  return (
    <header>
      <h1>Meu Portifólio</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#assistente-social">Assistente Social</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
          <li>
            <button id="btn-tema" onClick={alternarTema}>
              {temaEscuro ? 'Claro' : 'Escuro'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;