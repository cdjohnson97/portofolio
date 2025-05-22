import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);
  console.log('ProjectPage component rendered!');

  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    setProjectId(params.projectId);
  }, [location.pathname, params.projectId]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => console.error('Erreur lors du chargement des projets:', error));
  }, []);

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.image}</p>
    </div>
  );
};

export default ProjectPage;