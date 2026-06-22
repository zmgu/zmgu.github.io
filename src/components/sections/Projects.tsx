import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { projects, Feature, skillColorMap } from '../../data/portfolio';

const renderFeatureDetail = (feat: Feature) => (
  <>
    <div className="feature-detail-title">{feat.title}</div>
    <div className="feature-detail-body">{feat.detail.join('\n')}</div>
  </>
);

export default function Projects() {
  const [selected, setSelected] = useState<Record<number, number>>({});

  return (
    <section id="projects" className="portfolio-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title reveal">Project</h2>

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const selectedFeature = selected[index] ?? 0;
            const features = project.features;

            return (
              <div key={index} className="reveal" data-delay={index * 100}>

                <div className="project-header">
                  {project.image && (
                    <img src={project.image} alt={project.name} className="project-logo" />
                  )}
                  <div className="project-info">
                    <div className="project-title-row">
                      <h3 className="project-title">{project.name}</h3>
                      <span className="period-label">{project.period}</span>
                    </div>
                    {project.description && (
                      <p className="project-description">{project.description}</p>
                    )}
                  </div>
                </div>

                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                    {project.stack.map((tech) => {
                      const color = skillColorMap[tech];
                      return (
                        <span
                          key={tech}
                          className="project-tech-badge"
                          style={color ? {
                            borderColor: color + '55',
                            color: color,
                            backgroundColor: color + '0D',
                          } : undefined}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}

                {features.length > 0 && (
                  <div className="feature-panel">
                    <ul className="feature-list">
                      {features.map((feat, i) => (
                        <li key={i}>
                          <button
                            className={`feature-item ${selectedFeature === i ? 'feature-item--active' : ''}`}
                            onClick={() => setSelected(prev => ({ ...prev, [index]: i }))}
                          >
                            <span className="project-bullet">•</span>
                            <span className="project-desc">{feat.title}</span>
                            {selectedFeature === i && <ChevronRight size={20} className="feature-chevron" />}
                          </button>
                          <div className={`feature-detail-inline ${selectedFeature === i ? 'feature-detail-inline--open' : ''}`}>
                            <div className="feature-detail-inline-inner">
                              <div className="feature-detail-inline-content">
                                {renderFeatureDetail(feat)}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div key={selectedFeature} className="feature-detail-panel">
                      {renderFeatureDetail(features[selectedFeature])}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
