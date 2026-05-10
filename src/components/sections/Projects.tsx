import { useState } from 'react';
import { projects } from '../../data/portfolio';

interface Feature {
  title: string;
  detail: string;
}

function ProjectFeatures({ features }: { features: Feature[] }) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="feature-panel">
      <ul className="feature-list">
        {features.map((feat, i) => (
          <li key={i}>
            <button
              className={`feature-item ${selected === i ? 'feature-item--active' : ''}`}
              onClick={() => setSelected(i)}
            >
              <span className="project-bullet">•</span>
              <span className="project-desc">{feat.title}</span>
            </button>
            <div className={`feature-detail-inline ${selected === i ? 'feature-detail-inline--open' : ''}`}>
              <div className="feature-detail-inline-inner">
                <div className="feature-detail-inline-content">
                  <div className="feature-detail-title">{feat.title}</div>
                  <div className="feature-detail-body">{feat.detail}</div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div key={selected} className="feature-detail-panel">
        <div className="feature-detail-title">{features[selected].title}</div>
        <div className="feature-detail-body">{features[selected].detail}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12">Project</h2>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <div key={index}>

              <div className="project-header">
                {project.image && (
                  <img src={project.image} alt={project.name} className="project-logo" />
                )}
                <div>
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>

              {project.stack.filter(Boolean).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.filter(Boolean).map((tech) => (
                    <span key={tech} className="project-tech-badge">{tech}</span>
                  ))}
                </div>
              )}

              {project.features.length > 0 && (
                <ProjectFeatures features={project.features} />
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
