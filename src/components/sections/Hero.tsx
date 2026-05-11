import { Mail, Github, BookOpen } from 'lucide-react';
import { profile, skills, contact } from '../../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* 프로필 */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="profile-ring">
            <img
              src="/profile.png"
              alt="프로필 사진"
              className="profile-img"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="profile-name">{profile.name}</h1>
            <p className="profile-title">{profile.title}</p>
            <div className="profile-links">
              <a href={`mailto:${contact.email}`} className="profile-link" aria-label="이메일">
                <Mail className="profile-link-icon" />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="profile-link" aria-label="GitHub">
                <Github className="profile-link-icon" />
              </a>
              {contact.blog && (
                <a href={contact.blog} target="_blank" rel="noopener noreferrer" className="profile-link" aria-label="블로그">
                  <BookOpen className="profile-link-icon" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 소개글 */}
        <div className="mb-8">
          {profile.bio.map((text, i) => (
            <p key={i} className={`bio-text ${i < profile.bio.length - 1 ? 'mb-2' : ''}`}>
              {text}
            </p>
          ))}
        </div>

        {/* 기술 스택 */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h3 className="section-label">TECH STACK</h3>
            <div className="flex items-center gap-3">
              <span className="skill-legend">
                <span className="skill-legend-dot skill-legend-dot--work" />
                실무
              </span>
              <span className="skill-legend">
                <span className="skill-legend-dot skill-legend-dot--learning" />
                개인
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {skills.work.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.personal.map((skill) => (
                <span key={skill} className="skill-badge skill-badge--learning">{skill}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
