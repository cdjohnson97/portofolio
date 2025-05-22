/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Conception Web",
    description: "analyse approfondie des besoins, objectifs et du public cible, tout en étudiant la concurrence pour établir une bonne stratégie."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "développement web",
    description: "Développement des sites web et des applications web modernes en utilsant les dernière technologies."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Applications mobiles",
    description: "Dévopement des applications mobiles iOS et Android en utilisant les derniers outils."
  },
  {
    icon: "",
    title: "Mes stacks",
    description: (
      <>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
          {[
            "techLogos/React.svg",
            "techLogos/Angular.svg",
            "techLogos/Tailwind CSS.svg",
            "techLogos/Visual Studio Code (VS Code).svg",
            "techLogos/GitHub.svg", 
            "techLogos/Node.js.svg",
            "techLogos/Express.svg",
            "techLogos/Java.svg",
            "techLogos/Spring.svg",
            "techLogos/MySQL.svg",
            "techLogos/AWS.svg",
            "techLogos/Docker.svg",
            "techLogos/Kubernetes.svg",
            "techLogos/Apache.svg",
            "techLogos/HashiCorp Terraform.svg",
            "techLogos/PostgresSQL.svg",
            "techLogos/IntelliJ IDEA.svg",
            "techLogos/Python.svg",
            "techLogos/TypeScript.svg",
            "techLogos/Linux.svg",
            "techLogos/JavaScript.svg",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={img.split("/").pop().replace(".svg", "")}
              style={{ width: 32, height: 32, objectFit: "contain" }}
            />
          ))}
        </div>
      </>
    ),
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">A propos de moi</h2>
      </header>

      <section className="about-text">
        <p>
          Développeur Fullstack passionné par les technologies 
          web modernes et l'automatisation des processus de développement. 
          Mon expertise technique couvre l'ensemble de la stack de développement,
          de la conception d'interfaces utilisateur réactives avec React et Next.js jusqu'à l'implémentation
          de backends robustes en Node.js, Java Spring Boot et Python.
        </p>

        <p>
          Ma maîtrise des bases de données relationnelles (MySQL, PostgreSQL) 
          et NoSQL (MongoDB) me permet de concevoir des architectures de données
          efficaces et adaptées aux besoins spécifiques de chaque projet. Je développe des API REST performantes et sécurisées, en accordant une attention
          particulière aux bonnes pratiques et à la qualité du code.
        </p>

        <p>
          Particulièrement attiré par le DevOps et le Cloud Computing,
          je m'investis dans l'apprentissage et la mise en œuvre de pratiques
          d'automatisation avancées. Je travaille activement avec Docker pour 
          la containerisation, Kubernetes pour l'orchestration, et je m'intéresse 
          de près aux pipelines CI/CD pour optimiser les processus de déploiement.
          Mon engagement s'étend également vers AWS, où je souhaite approfondir 
          mes compétences dans l'utilisation des services cloud essentiels comme 
          EC2 pour le déploiement d'instances, S3 pour le stockage d'objets, RDS pour les bases de données managées, et Lambda pour les fonctions serverless. Mes compétences en administration de serveurs Linux (Ubuntu)
          et en gestion de services web (Apache) complètent mon profil polyvalent.
        </p>
      </section>

      {/* <!--
        - service
      --> */}

      <section className="service">

        <h3 className="h3 service-title"></h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <li key={index}>
              <Service
                icon={service.icon && service.icon.trim() !== "" ? service.icon : undefined}
                title={service.title}
                description={service.description}
              />
            </li>
          ))}
        </ul>

      </section>
    </article>
  )
}

export default About