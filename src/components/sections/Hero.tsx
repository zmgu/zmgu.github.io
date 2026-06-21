import { Mail, Github, BookOpen } from 'lucide-react';
import { profile, skills, contact, career, certifications, education } from '../../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* About: 좌우 2컬럼 */}
        <div className="about-layout">

          {/* 왼쪽: 소개 */}
          <div className="about-intro">
            <span className="about-badge">{profile.badge}</span>
            <h1 className="about-headline">
              안녕하세요, 백엔드 개발자<br />
              <span className="about-name">{profile.name}</span>입니다
            </h1>
            <div className="about-bio">
              {profile.bio.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </div>

          {/* 오른쪽: 프로필 카드 */}
          <div className="about-card">
            <div className="profile-ring">
              <img src="/profile.png" alt="프로필 사진" className="profile-img" />
            </div>
            <p className="about-card-name">{profile.name}</p>
            <p className="about-card-title">{profile.title}</p>
            <div className="about-card-links">
              <a href={`mailto:${contact.email}`} className="about-card-link">
                <Mail size={14} className="about-card-link-icon" />
                <span>{contact.email}</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="about-card-link">
                <Github size={14} className="about-card-link-icon" />
                <span>{contact.github.replace('https://', '')}</span>
              </a>
              {contact.blog && (
                <a href={contact.blog} target="_blank" rel="noopener noreferrer" className="about-card-link">
                  <BookOpen size={14} className="about-card-link-icon" />
                  <span>{contact.blog.replace('https://', '').replace(/\/$/, '')}</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* 기술 스택 */}
        <div className="skill-section">
          <h3 className="section-label mb-5">기술 스택</h3>
          <div className="skill-table">
            {skills.map((cat) => (
              <div key={cat.category} className="skill-cat-row">
                <div className="skill-cat-label">
                  <span className="skill-cat-dot" style={{ backgroundColor: cat.color }} />
                  {cat.category}
                </div>
                <div className="skill-cat-badges">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="skill-badge"
                      style={{
                        borderColor: cat.color + '55',
                        color: cat.color,
                        backgroundColor: cat.color + '0D',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 경력 / 자격증 / 교육 */}
        <div className="space-y-16 sm:space-y-20">

          <div>
            <h3 className="section-label mb-6">경력</h3>
            <div className="section-bg-card space-y-5">
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
                      <div className="flex items-center gap-2">
                        <span className="career-company">{job.company}</span>
                        {job.rank && <span className="career-rank">{job.rank}</span>}
                      </div>
                      <span className="period-label">{job.period}</span>
                      {job.role && <span className="career-role">{job.role}</span>}
                      {job.projects && (
                        <div className="career-projects">
                          {job.projects.map((p) => (
                            <span key={p} className="career-project-tag">{p}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label mb-6">자격증</h3>
            <div className="flex flex-wrap gap-3">
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
            <h3 className="section-label mb-6">교육</h3>
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
