import React from 'react';
import ProjectCard from './ProjectCard';

const meusProjetos = [
  { id: 1, titulo: "Projeto 01 - E-commerce", descricao: "Uma loja virtual feita com HTML, CSS e JavaScript.", link: "#" },
  { id: 2, titulo: "Projeto 02 - Portfólio", descricao: "Meu portfólio de apresentação feito com tecnologias modernas", link: "#" },
  { id: 3, titulo: "Projeto 03 - Registro de Ponto", descricao: "Sistema web para registrar o ponto dos funcionários das empresas.", link: "#" }
];

function ProjectsSection() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-container">
        {meusProjetos.map((projeto) => (
          <ProjectCard
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;