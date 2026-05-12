import { career, certifications, education } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-10 sm:space-y-14">

          <div>
            <h3 className="section-label mb-5">CAREER</h3>
            <div className="space-y-5">
              {career.map((job, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="career-dot-wrapper">
                      <div className="career-dot" />
                    </div>
                    {index < career.length - 1 && <div className="career-line" />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="career-item">
                      <span className="career-company">{job.company}</span>
                      <span className="period-label">{job.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label mb-4">CERTIFICATIONS</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <div key={cert} className="cert-card">
                  <div className="flex items-center gap-2">
                    <div className="cert-dot" />
                    {cert}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label mb-4">EDUCATION</h3>
            <div className="edu-grid">
              {education.map((edu, index) => (
                <div key={index} className="edu-card">
                  <span className="period-label">{edu.period}</span>
                  <span className="edu-name">{edu.name}</span>
                  {edu.organizer && (
                    <span className="edu-organizer">{edu.organizer}</span>
                  )}
                  <ul className="contents">
                    {edu.content.map((line, i) => (
                      <li key={i} className="edu-content">{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
