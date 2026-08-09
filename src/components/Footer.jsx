import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} {profile.name}</span>
        <span className="footer__built">Designed & built by Hatoon</span>
      </div>
    </footer>
  );
}
