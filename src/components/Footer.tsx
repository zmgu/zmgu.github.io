import { Mail, Github, BookOpen } from 'lucide-react';
import { contact } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">


        <p className="cta-sub">궁금한 점이 있으시다면 편하게 연락해 주세요.</p>

        <div className="flex justify-center mt-8">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a href={`mailto:${contact.email}`} className="footer-btn">
              <Mail className="footer-icon" />
              <span className="footer-btn-text">{contact.email}</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="footer-btn">
              <Github className="footer-icon" />
              <span className="footer-btn-text">GitHub</span>
            </a>
            {contact.blog && (
              <a href={contact.blog} target="_blank" rel="noopener noreferrer" className="footer-btn">
                <BookOpen className="footer-icon" />
                <span className="footer-btn-text">Blog</span>
              </a>
            )}
          </div>
        </div>

        <p className="cta-copyright">© 2026 전민혁</p>
      </div>
    </footer>
  );
}
