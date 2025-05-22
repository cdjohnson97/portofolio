import { useState, useEffect } from 'react';

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('Tout');

  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Erreur lors du chargement des projets:', error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'Tout') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  // Function to handle project selection
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
    setIsClosing(false);
  };

  // Function to close the popup with animation
  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 600); // Match this to the duration of the slideOut animation
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {['Tout', 'Ecole', 'Stage', 'Alternance', 'Personnel'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <button onClick={() => handleProjectClick(project)}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Popup with enhanced smooth transition */}
      {showPopup && (
        <div 
          className="popup-overlay" 
          onClick={handleClosePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(-5px)',
            animation: isClosing ? 'fadeOut 0.1s forwards' : 'fadeIn 0.1s forwards',
          }}
        >
          <style>{`
            @keyframes fadeIn {
              0% { background-color: rgba(0, 0, 0, 0); backdrop-filter: blur(0px); }
              100% { background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); }
            }
            
            @keyframes fadeOut {
              0% { background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); }
              100% { background-color: rgba(0, 0, 0, 0); backdrop-filter: blur(0px); }
            }
            
            @keyframes slideIn {
              0% { transform: translateY(50px) scale(0.95); opacity: 0; }
              100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            
            @keyframes slideOut {
              0% { transform: translateY(0) scale(1); opacity: 1; }
              100% { transform: translateY(50px) scale(0.95); opacity: 0; }
            }
            
            .popup-content::-webkit-scrollbar {
              width: 8px;
            }
            
            .popup-content::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 4px;
            }
            
            .popup-content::-webkit-scrollbar-thumb {
              background: #c1c1c1;
              border-radius: 4px;
            }
            
            .popup-content::-webkit-scrollbar-thumb:hover {
              background: #a8a8a8;
            }
          `}</style>
          
          {selectedProject && (
            <div 
              className="popup-content" 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                maxWidth: '90%',
                width: '1000px',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                animation: isClosing ? 'slideOut 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <button 
                className="close-popup" 
                onClick={handleClosePopup}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 10,
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
              >
                ✕
              </button>
              
              <div className="popup-image-container" style={{ 
                position: 'relative', 
                overflow: 'hidden',
                borderRadius: '12px 12px 0 0'
              }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={{ 
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    imageRendering: 'crisp-edges',
                    msInterpolationMode: 'nearest-neighbor',
                    display: 'block',
                    maxWidth: '100%',
                
                    minHeight: '400px'
                  }} 
                />
              </div>
              
              <div style={{ padding: '30px' }}>
                <h2 style={{ 
                  fontSize: '28px', 
                  marginBottom: '16px',
                  fontWeight: '600'
                }}>
                  {selectedProject.title}
                </h2>
                
                {/* Technologies Section */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      marginBottom: '12px',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Technologies utilisées
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px',
                      marginBottom: '16px'
                    }}>
                     
                    </div>
                    
                    {/* Tech Images */}
                    {selectedProject.techImages && selectedProject.techImages.length > 0 && (
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '12px',
                        alignItems: 'center'
                      }}>
                        {selectedProject.techImages.map((techImg, index) => (
                          <img 
                            key={index}
                            src={techImg} 
                            alt={selectedProject.technologies[index] || `Technology ${index + 1}`}
                            style={{
                              width: '40px',
                              height: '40px',
                              objectFit: 'contain',
                              borderRadius: '8px',
                              backgroundColor: '#f8f9fa',
                              padding: '4px'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                <div style={{
                  padding: '20px 0',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#333'
                }}>
                  <p>{selectedProject.description}</p>
                </div>
                
                {/* Links Section */}
                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {selectedProject.links?.live && (
                    <a 
                      href={selectedProject.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 24px',
                        backgroundColor: `${selectedProject.colors}`,
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '500',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a5ce5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a6cf7'}
                    >
                      Voir en ligne
                    </a>
                  )}
                  
                  {selectedProject.links?.github && (
                    <a 
                      href={selectedProject.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 24px',
                        backgroundColor: '#24292e',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '500',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1b1f23'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#24292e'}
                    >
                      Code source
                    </a>
                  )}
                  
                  {/* Fallback for old link structure */}
                  {selectedProject.link && !selectedProject.links && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 24px',
                        backgroundColor: '#4a6cf7',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '500',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a5ce5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = `${selectedProject.colors}` }
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Portfolio;