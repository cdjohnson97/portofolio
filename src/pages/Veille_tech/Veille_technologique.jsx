import { useState } from 'react';
import { X, Server, Code, Cloud, GitBranch, Container, Settings, Zap, Cpu, Database, Network, ExternalLink, BookOpen } from 'lucide-react';

const Veille_technologique = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (section) => {
    setActivePopup(section);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const sections = [
    {
      id: 'automation',
      title: 'Automatisation du Code et DevOps',
      icon: <Code style={{width: '24px', height: '24px'}} />,
      content: `L'automatisation du code représente une révolution majeure dans le développement moderne. Les GitHub Actions, GitLab CI/CD et Jenkins ont transformé la façon dont nous déployons et testons nos applications. Ces outils permettent d'automatiser entièrement les processus de build, test, et déploiement, réduisant drastiquement les erreurs humaines et accélérant les cycles de livraison.

Les pipelines CI/CD modernes intègrent désormais des analyses de sécurité automatisées (SAST, DAST), des tests de performance, et même de l'Infrastructure as Code. Cette approche garantit une qualité constante et une traçabilité complète de chaque modification.

Outils clés :
• GitHub Actions : Automatisation native GitHub
• GitLab CI/CD : Pipeline intégré GitLab
• Jenkins : Serveur d'automatisation open-source
• Azure DevOps : Suite Microsoft complète
• CircleCI : Plateforme CI/CD cloud`
    },
    {
      id: 'containers',
      title: 'Containerisation et Orchestration',
      icon: <Container style={{width: '24px', height: '24px'}} />,
      content: `Docker a révolutionné la containerisation, mais c'est Kubernetes qui a transformé l'orchestration d'applications à grande échelle. K8s gère automatiquement la montée en charge, la répartition de charge, et la récupération après incident. Les concepts comme les pods, services, et ingress controllers sont devenus essentiels.

L'émergence de solutions comme Docker Swarm, Rancher, et des services managés (EKS, GKE, AKS) simplifie l'adoption. Les outils comme Helm pour la gestion des packages Kubernetes et Istio pour les service meshes ajoutent des couches de sophistication pour les architectures microservices complexes.

Écosystème Kubernetes :
• Docker : Containerisation d'applications
• Kubernetes : Orchestration de containers
• Helm : Gestionnaire de packages K8s
• Istio : Service mesh pour microservices
• Rancher : Plateforme de gestion K8s`
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure as Code (IaC)',
      icon: <Server style={{width: '24px', height: '24px'}} />,
      content: `Terraform s'est imposé comme l'outil de référence pour l'Infrastructure as Code, permettant de définir et gérer l'infrastructure via du code versionné. Cette approche garantit la reproductibilité, la traçabilité et la cohérence des environnements.

AWS CloudFormation, Azure ARM Templates, et Google Cloud Deployment Manager offrent des alternatives cloud-spécifiques. Pulumi apporte une approche moderne en permettant d'utiliser des langages de programmation traditionnels. L'IaC élimine la dérive de configuration et facilite la gestion d'environnements multiples (dev, staging, production).

Solutions IaC populaires :
• Terraform : Multi-cloud, syntaxe HCL
• AWS CloudFormation : Natif AWS, format JSON/YAML
• Pulumi : Langages de programmation traditionnels
• Ansible : Configuration et déploiement
• Azure ARM Templates : Natif Microsoft Azure`
    },
    {
      id: 'cloud-services',
      title: 'Services Cloud et Serverless',
      icon: <Cloud style={{width: '24px', height: '24px'}} />,
      content: `L'Infrastructure as a Service (IaaS) évolue vers des modèles plus abstraits. AWS Lambda, Azure Functions, et Google Cloud Functions permettent d'exécuter du code sans gérer de serveurs. Cette approche serverless réduit les coûts opérationnels et améliore l'élasticité.

Les services managés (RDS, DynamoDB, Cloud SQL) libèrent les équipes de la maintenance d'infrastructure. L'edge computing avec CloudFlare Workers et AWS Lambda@Edge rapproche le traitement des utilisateurs finaux. Les architectures event-driven deviennent la norme pour les applications modernes.

Plateformes Serverless :
• AWS Lambda : Functions as a Service AWS
• Azure Functions : Serverless Microsoft
• Google Cloud Functions : FaaS Google
• Vercel : Déploiement frontend optimisé
• Netlify : JAMstack et fonctions serverless`
    },
    {
      id: 'monitoring',
      title: 'Observabilité et Monitoring',
      icon: <Settings style={{width: '24px', height: '24px'}} />,
      content: `L'observabilité moderne repose sur trois piliers : logs, métriques, et traces. Prometheus et Grafana forment un duo incontournable pour le monitoring. ELK Stack (Elasticsearch, Logstash, Kibana) gère l'agrégation et l'analyse des logs à grande échelle.

Jaeger et Zipkin tracent les requêtes dans les architectures distribuées. Les solutions cloud comme AWS X-Ray, Azure Monitor, et Google Cloud Operations intègrent ces fonctionnalités nativement. L'AIOps utilise l'intelligence artificielle pour détecter les anomalies et prédire les incidents.

Stack d'observabilité :
• Prometheus : Collecte de métriques
• Grafana : Visualisation et dashboards
• ELK Stack : Logs et recherche (Elastic)
• Jaeger : Tracing distribué
• Datadog : Monitoring as a Service`
    },
    {
      id: 'security',
      title: 'DevSecOps et Sécurité',
      icon: <Zap style={{width: '24px', height: '24px'}} />,
      content: `DevSecOps intègre la sécurité dès les premières étapes du développement. Les scanners de vulnérabilités comme Snyk, OWASP ZAP, et SonarQube s'intègrent dans les pipelines CI/CD. La sécurité devient un processus continu, pas une étape finale.

Les outils de gestion des secrets (HashiCorp Vault, AWS Secrets Manager) sécurisent les credentials. L'analyse de composition logicielle (SCA) détecte les vulnérabilités dans les dépendances. Les politiques de sécurité as code avec Open Policy Agent (OPA) automatisent la gouvernance.

Outils DevSecOps :
• Snyk : Scan de vulnérabilités
• SonarQube : Qualité et sécurité du code
• HashiCorp Vault : Gestion des secrets
• OWASP ZAP : Tests de sécurité web
• Falco : Détection d'anomalies runtime`
    }
  ];

  const impacts = [
    {
      title: "Accélération du Time-to-Market",
      description: "Réduction de 70% du temps de déploiement grâce à l'automatisation",
      icon: <Zap style={{width: '20px', height: '20px'}} />
    },
    {
      title: "Réduction des Coûts Opérationnels",
      description: "Optimisation automatique des ressources et élimination du gaspillage",
      icon: <Cpu style={{width: '20px', height: '20px'}} />
    },
    {
      title: "Amélioration de la Fiabilité",
      description: "Diminution de 80% des incidents liés aux déploiements",
      icon: <Database style={{width: '20px', height: '20px'}} />
    },
    {
      title: "Scalabilité Automatique",
      description: "Adaptation en temps réel à la charge avec Kubernetes et le cloud",
      icon: <Network style={{width: '20px', height: '20px'}} />
    }
  ];

  const futureTrends = [
    "GitOps : Gestion d'infrastructure via Git comme source de vérité unique",
    "Edge Computing : Traitement distribué proche des utilisateurs",
    "AI/ML Ops : Automatisation du cycle de vie des modèles d'apprentissage automatique",
    "WebAssembly : Nouvelle approche pour les applications haute performance",
    "Service Mesh : Gestion avancée des communications microservices",
    "Chaos Engineering : Tests de résilience automatisés en production"
  ];

  const sources = [
    {
      name: "DEV Community",
      url: "https://dev.to",
      description: "Articles et discussions sur les dernières pratiques DevOps",
      category: "Communauté"
    },
    {
      name: "HashiCorp Blog",
      url: "https://www.hashicorp.com/blog",
      description: "Insights sur Terraform, Vault et l'infrastructure moderne",
      category: "Éditeur"
    },
    {
      name: "Kubernetes Blog",
      url: "https://kubernetes.io/blog",
      description: "Actualités officielles et bonnes pratiques Kubernetes",
      category: "Documentation officielle"
    },
    {
      name: "AWS Architecture Center",
      url: "https://aws.amazon.com/architecture",
      description: "Patterns et bonnes pratiques cloud AWS",
      category: "Cloud Provider"
    },
    {
      name: "The New Stack",
      url: "https://thenewstack.io",
      description: "Analyses approfondies sur les technologies cloud-native",
      category: "Média spécialisé"
    },
    {
      name: "InfoQ DevOps",
      url: "https://www.infoq.com/devops",
      description: "Articles experts et retours d'expérience DevOps",
      category: "Média technique"
    },
    {
      name: "CNCF Blog",
      url: "https://www.cncf.io/blog",
      description: "Actualités de la Cloud Native Computing Foundation",
      category: "Fondation"
    },
    {
      name: "Docker Blog",
      url: "https://www.docker.com/blog",
      description: "Nouveautés et cas d'usage de la containerisation",
      category: "Éditeur"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    },
    header: {
      marginBottom: '40px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '20px'
    },
    intro: {
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f0f9ff 100%)',
      padding: '25px',
      borderRadius: '8px',
      borderLeft: '4px solid #2196f3',
      marginBottom: '30px'
    },
    sectionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '40px'
    },
    sectionCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0',
      padding: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },
    sectionCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
    },
    sectionIcon: {
      color: '#2196f3',
      marginBottom: '15px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    sectionDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    },
    popup: {
      backgroundColor: 'white',
      borderRadius: '12px',
      maxWidth: '800px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto',
      position: 'relative',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    },
    popupHeader: {
      background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
      color: 'white',
      padding: '20px',
      borderRadius: '12px 12px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    popupTitle: {
      fontSize: '20px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '5px',
      borderRadius: '4px'
    },
    popupContent: {
      padding: '25px',
      whiteSpace: 'pre-line',
      fontSize: '15px',
      lineHeight: '1.7'
    },
    impactsSection: {
      marginTop: '50px'
    },
    sectionMainTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    impactsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    },
    impactCard: {
      background: 'linear-gradient(135deg, #e8f5e8 0%, #f0fff0 100%)',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #4caf50'
    },
    impactHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      gap: '12px'
    },
    impactIcon: {
      color: '#4caf50'
    },
    impactTitle: {
      fontWeight: '600',
      color: '#2c3e50'
    },
    impactDescription: {
      fontSize: '14px',
      color: '#555'
    },
    trendsSection: {
      marginTop: '50px'
    },
    trendsContainer: {
      background: 'linear-gradient(135deg, #f3e5f5 0%, #fce4ec 100%)',
      padding: '25px',
      borderRadius: '8px',
      border: '1px solid #9c27b0'
    },
    trendsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px'
    },
    trendItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    },
    trendBullet: {
      width: '8px',
      height: '8px',
      backgroundColor: '#9c27b0',
      borderRadius: '50%',
      marginTop: '8px',
      flexShrink: 0
    },
    trendText: {
      fontSize: '14px',
      color: '#555'
    },
    sourcesSection: {
      marginTop: '50px'
    },
    sourcesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    },
    sourceCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    sourceHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px'
    },
    sourceName: {
      fontWeight: '600',
      color: '#2c3e50',
      fontSize: '16px'
    },
    sourceCategory: {
      fontSize: '12px',
      backgroundColor: '#f0f0f0',
      padding: '4px 8px',
      borderRadius: '12px',
      color: '#666'
    },
    sourceDescription: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '10px'
    },
    sourceLink: {
      color: '#2196f3',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    conclusion: {
      marginTop: '50px',
      background: 'linear-gradient(135deg, #1a237e 0%, #3f51b5 100%)',
      color: 'white',
      padding: '30px',
      borderRadius: '8px'
    },
    conclusionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px'
    }
  };

  return (
    <article className="about active" data-page="about">
      <div style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.title}>
            DevOps & Automatisation
          </h2>
          <div style={styles.intro}>
            <p>
              L'écosystème DevOps connaît une transformation majeure avec l'émergence de nouvelles pratiques d'automatisation, 
              d'orchestration et de gestion d'infrastructure. Cette veille explore les technologies qui redéfinissent le 
              développement et le déploiement d'applications modernes.
            </p>
          </div>
        </header>

        <div style={styles.sectionsGrid}>
          {sections.map((section) => (
            <div 
              key={section.id} 
              style={styles.sectionCard}
              onClick={() => openPopup(section.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.sectionIcon}>
                {section.icon}
              </div>
              <h3 style={styles.sectionTitle}>
                {section.title}
              </h3>
              <p style={styles.sectionDescription}>
                Cliquez pour explorer en détail
              </p>
            </div>
          ))}
        </div>

        {activePopup && (
          <div style={styles.overlay} onClick={closePopup}>
            <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
              <div style={styles.popupHeader}>
                <div style={styles.popupTitle}>
                  {sections.find(s => s.id === activePopup)?.icon}
                  {sections.find(s => s.id === activePopup)?.title}
                </div>
                <button style={styles.closeButton} onClick={closePopup}>
                  <X size={24} />
                </button>
              </div>
              <div style={styles.popupContent}>
                {sections.find(s => s.id === activePopup)?.content}
              </div>
            </div>
          </div>
        )}

        <section style={styles.impactsSection}>
          <h3 style={styles.sectionMainTitle}>
            <GitBranch style={{width: '24px', height: '24px', color: '#4caf50'}} />
            Impacts et Transformations
          </h3>
          <div style={styles.impactsGrid}>
            {impacts.map((impact, index) => (
              <div key={index} style={styles.impactCard}>
                <div style={styles.impactHeader}>
                  <div style={styles.impactIcon}>
                    {impact.icon}
                  </div>
                  <h4 style={styles.impactTitle}>{impact.title}</h4>
                </div>
                <p style={styles.impactDescription}>{impact.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.trendsSection}>
          <h3 style={styles.sectionMainTitle}>
            <Zap style={{width: '24px', height: '24px', color: '#9c27b0'}} />
            Tendances Émergentes
          </h3>
          <div style={styles.trendsContainer}>
            <div style={styles.trendsGrid}>
              {futureTrends.map((trend, index) => (
                <div key={index} style={styles.trendItem}>
                  <div style={styles.trendBullet}></div>
                  <p style={styles.trendText}>{trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.sourcesSection}>
          <h3 style={styles.sectionMainTitle}>
            <BookOpen style={{width: '24px', height: '24px', color: '#ff9800'}} />
            Sources et Références
          </h3>
          <div style={styles.sourcesGrid}>
            {sources.map((source, index) => (
              <div key={index} style={styles.sourceCard}>
                <div style={styles.sourceHeader}>
                  <h4 style={styles.sourceName}>{source.name}</h4>
                  <span style={styles.sourceCategory}>{source.category}</span>
                </div>
                <p style={styles.sourceDescription}>{source.description}</p>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.sourceLink}
                >
                  Visiter le site <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.conclusion}>
          <h3 style={styles.conclusionTitle}>Conclusion</h3>
          <p>
            L'écosystème DevOps continue d'évoluer vers plus d'automatisation, d'intelligence et de simplicité. 
            Les développeurs doivent désormais maîtriser non seulement le code, mais aussi l'infrastructure, 
            la sécurité et l'observabilité. Cette convergence des compétences redéfinit le métier de développeur 
            et ouvre de nouvelles perspectives professionnelles passionnantes.
          </p>
          <p style={{marginTop: '15px'}}>
            L'avenir appartient aux équipes qui sauront tirer parti de ces technologies pour créer des systèmes 
            plus robustes, sécurisés et efficaces, tout en maintenant une vitesse de développement élevée.
          </p>
        </section>
      </div>
    </article>
  );
};

export default Veille_technologique;