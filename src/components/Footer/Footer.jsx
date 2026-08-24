import { FiGithub } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return <footer className="ct-footer footer-component"><div><strong>Avinash K</strong><span>Cyber Security Student · Frontend Developer</span></div><nav><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a></nav><a href="https://github.com/avinashk08408" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={15} /></a><p>© 2026 Avinash K · All Rights Reserved</p></footer>;
}
