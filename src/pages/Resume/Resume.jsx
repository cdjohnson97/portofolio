import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Mon Parcours</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="ESIC Ecole d'informatique et de commerce"
            date="2024 — 2025"
            description="Prépation du Bts Slam en conception et développément d'applications web."
          />
          <TimelineItem
            title="Licence en Droit des affaires sur la propriété intellectuelle"
            date="2017 — 2022"
            description="La licence en droit de la propriété intellectuelle est une formation spécialisée qui couvre les principaux droits de PI :
             brevets, marques, droits d'auteur, et dessins/modèles.
              Elle forme aux aspects juridiques de la protection des créations et innovations, incluant les contrats de licence."
          />
          <TimelineItem
            title="Baccalauréat littéraire"
            date="2017 — 2014"
            description="Spécialisé sur la langue anglaise."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Alternance Dévéloppeur web fulstack"
            date="2024 — Present"
            description="En tant que développeur fullstack, ma mission consiste à créer une application web complète, en gérant à la fois l'interface utilisateur (frontend en React/Vue.js) et le serveur
             (backend en Node.js/Python avec base de données),
              en assurant le déploiement et la maintenance de l'ensemble."
          />
          <TimelineItem
            title="Stage déveéloppeur fullstack"
            date="Juin 2024 — Août 2024"
            description="En tant que stagiaire, j'ai travaillé sur une application web en utilisant React, Node.js et PostgreSQL."
          />
          <TimelineItem
            title="Devloppeur Backend"
            date="2022 — 2023"
            description="En tant que devloppeur backend, j'ai travaillé sur une application web en utilisant Node.js et PostgreSQL
            la création des API REST, éffectué des tests avec Postman et la gestion du deploiement."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Mes compétences </h3>
        <ul className="skills-list content-card">
          <SkillItem title="Développement web frontend React, taiwind css, Angular" value={80} />
          <SkillItem title="Backend avec node.js, python, Java, SQL Mysql Postgresql, MongoDB" value={75} />
          <SkillItem title="Algorithmes et structures de données" value={50} />
          <SkillItem title="WordPress" value={70} />
          <SkillItem title="DevOPs,Git,Servers, CI/CD Docker, Kubernetes" value={45} />
          <SkillItem title="Cloud AWS S3, EC2" value={40} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
