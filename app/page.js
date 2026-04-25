"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Research", "Contact"];

const SKILLS = [
  { name: "React.js", icon: "⚛️", level: 90 },
  { name: "Next.js", icon: "▲", level: 85 },
  { name: "Node.js", icon: "🟢", level: 88 },
  { name: "MongoDB", icon: "🍃", level: 82 },
  { name: "Express.js", icon: "🚀", level: 85 },
  { name: "JavaScript", icon: "🟡", level: 92 },
  { name: "Tailwind CSS", icon: "🎨", level: 88 },
  { name: "PHP / Laravel", icon: "🐘", level: 75 },
  { name: "MySQL", icon: "🗄️", level: 78 },
  { name: "REST APIs", icon: "🔗", level: 87 },
  { name: "JWT Auth", icon: "🔐", level: 83 },
  { name: "Git / GitHub", icon: "🐙", level: 85 },
];

const PROJECTS = [
  {
    title: "Smart ATM",
    desc: "A smart ATM management system with real-time transaction tracking, user authentication, and modern dashboard UI.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: "https://smart-atm-three.vercel.app/",
    color: "#6366f1",
    status: "Live",
  },
  {
    title: "Project Management App",
    desc: "A full-featured project & task management system with login, team collaboration, and progress tracking.",
    tech: ["JavaScript", "Firebase", "HTML/CSS"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: "https://project-f03ade2f-b8ff-4644-b79.web.app/login.html",
    color: "#a855f7",
    status: "Live",
  },
  {
    title: "Client Management System",
    desc: "A CRM-style client management system with authentication, client records, and dashboard built on Firebase.",
    tech: ["JavaScript", "Firebase", "HTML/CSS"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: "https://client-managment-system-5458d.firebaseapp.com/login",
    color: "#ec4899",
    status: "Live",
  },
  {
    title: "HotelFlow",
    desc: "Hotel management system with room booking, check-in/out, room filtering, and luxury stay listings.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: "https://hotelflow-hotel-management-system-dufq-qpns70l3c.vercel.app/",
    color: "#06b6d4",
    status: "Live",
  },
  {
    title: "JibonDaak",
    desc: "Emergency ambulance service platform with live tracking, hospital pre-arrival alerts, and digital triage reports.",
    tech: ["React.js", "Next.js", "monodb"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: "https://staging-jibondaak.vercel.app/",
    color: "#22c55e",
    status: "In Progress",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured ecommerce website with cart, auth, and payment integration built with React.js and MongoDB.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/Abdullah-Al-Mahmud777",
    live: null,
    color: "#f59e0b",
    status: "Live",
  },
];

const SERVICES = [
  { icon: "💻", title: "Full Stack Development", desc: "End-to-end web apps using MERN stack with scalable architecture and clean code." },
  { icon: "🎨", title: "UI/UX Design", desc: "Modern, responsive interfaces with Tailwind CSS, Material UI, and Bootstrap." },
  { icon: "⚙️", title: "Backend Development", desc: "Robust APIs with Node.js, Express, Laravel, and database management." },
  { icon: "🚀", title: "Deployment & DevOps", desc: "Deploy on Vercel, Netlify with CI/CD pipelines and performance optimization." },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/Abdullah-Al-Mahmud777", icon: "🐙" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-al-mahmud-357566233/", icon: "💼" },
  { label: "LeetCode", href: "https://leetcode.com/u/CqiiFmYSgN/", icon: "🧩" },
  { label: "WhatsApp", href: "https://wa.me/8801617681926", icon: "💬" },
  { label: "Email", href: "mailto:abdullahalmahmudmahmud777@gmail.com", icon: "📧" },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    document.body.classList.toggle("light", !dark);
  }, [dark]);

  const roles = ["Full Stack Developer", "MERN Stack developer", "React.js Developer", "Node.js Engineer","php/laravel"];
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        setTyped(current.slice(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setTyped(current.slice(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      setTimeout(type, deleting.current ? 60 : 100);
    };
    const t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveNav(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ backgroundColor: dark ? "#050510" : "#f8fafc", minHeight: "100vh", color: dark ? "#e2e8f0" : "#1e293b", transition: "background 0.3s, color 0.3s" }} suppressHydrationWarning>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 1.5rem", height: "65px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? (dark ? "rgba(5,5,16,0.92)" : "rgba(248,250,252,0.92)") : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
        transition: "all 0.3s ease",
      }}>

        {/* LEFT — nav links */}
        <div className="nav-links" style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{
                fontSize: "0.85rem", fontWeight: 500, textDecoration: "none",
                padding: "0.45rem 1rem", borderRadius: "8px",
                color: activeNav === link ? "#a5b4fc" : "#94a3b8",
                background: activeNav === link ? "rgba(99,102,241,0.12)" : "transparent",
                border: activeNav === link ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { if (activeNav !== link) { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)"; } }}
              onMouseLeave={e => { if (activeNav !== link) { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.border = "1px solid transparent"; } }}
            >{link}</a>
          ))}
        </div>

        {/* RIGHT — icon buttons */}
        <div className="nav-icons" style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
          {/* GitHub */}
          <a href="https://github.com/Abdullah-Al-Mahmud777" target="_blank" rel="noopener noreferrer" title="GitHub"
            style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#e2e8f0"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#94a3b8"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/8801617681926" target="_blank" rel="noopener noreferrer" title="WhatsApp"
            style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)", color: "#22c55e", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,211,102,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(37,211,102,0.15)"; }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
            style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)", color: "#60a5fa", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(10,102,194,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(10,102,194,0.15)"; }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Hire Me */}
          <a href="#contact" className="btn-primary" style={{ padding: "0.45rem 1.1rem", borderRadius: "8px", color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
            Hire Me
          </a>
          {/* Theme toggle */}
          <button onClick={() => setDark(!dark)} title={dark ? "Light Mode" : "Dark Mode"}
            style={{
              width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.3)",
              background: dark ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.15)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.15)"; }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            flexDirection: "column", gap: "5px", padding: "4px",
          }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "24px", height: "2px",
              background: "#a5b4fc", borderRadius: "2px",
              transition: "all 0.3s",
              transform: mobileMenu && i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : mobileMenu && i === 1 ? "opacity: 0"
                : mobileMenu && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
              opacity: mobileMenu && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenu && (
        <div style={{
          position: "fixed", top: "65px", left: 0, right: 0, zIndex: 999,
          background: dark ? "rgba(5,5,16,0.97)" : "rgba(248,250,252,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
          padding: "1.2rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "0.3rem",
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              style={{
                color: activeNav === link ? "#a5b4fc" : "#94a3b8",
                textDecoration: "none", fontSize: "0.95rem", fontWeight: 500,
                padding: "0.7rem 0.8rem", borderRadius: "8px",
                background: activeNav === link ? "rgba(99,102,241,0.1)" : "transparent",
                display: "block",
              }}>{link}</a>
          ))}
          {/* divider */}
          <div style={{ height: "1px", background: "rgba(99,102,241,0.15)", margin: "0.5rem 0" }} />
          {/* social row */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a href="https://github.com/Abdullah-Al-Mahmud777" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenu(false)}
              style={{ flex: 1, minWidth: "80px", padding: "0.6rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, textAlign: "center" }}>
              🐙 GitHub
            </a>
            <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenu(false)}
              style={{ flex: 1, minWidth: "80px", padding: "0.6rem", borderRadius: "8px", background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.3)", color: "#60a5fa", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, textAlign: "center" }}>
              💼 LinkedIn
            </a>
            <a href="https://wa.me/8801617681926" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenu(false)}
              style={{ flex: 1, minWidth: "80px", padding: "0.6rem", borderRadius: "8px", background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)", color: "#22c55e", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600, textAlign: "center" }}>
              💬 WhatsApp
            </a>
          </div>
          <a href="#contact" onClick={() => setMobileMenu(false)} className="btn-primary"
            style={{ padding: "0.75rem", borderRadius: "8px", color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 700, textAlign: "center", marginTop: "0.3rem" }}>
            Hire Me
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero-bg dot-grid" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "6rem 1.5rem 4rem", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "15%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "5%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "50px", padding: "0.4rem 1rem", marginBottom: "1.5rem",
            fontSize: "0.82rem", color: "#a5b4fc",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            Available for work
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.8rem" }}>
            Hi, I'm <span className="gradient-text">Abdullah Al Mahmud</span>
          </h1>

          <div style={{ fontSize: "clamp(1rem, 3vw, 1.6rem)", fontWeight: 600, color: "#94a3b8", marginBottom: "1.2rem", minHeight: "2.2rem" }}>
            <span style={{ color: "#a5b4fc" }}>{typed}</span>
            <span style={{ color: "#6366f1" }}>|</span>
          </div>

          <p style={{ color: "#64748b", fontSize: "clamp(0.88rem, 2vw, 1rem)", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto 2rem" }}>
            Passionate about coding, constantly learning, and building projects that make an impact.
            Specialized in MERN stack with a focus on scalable, user-friendly applications.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary" style={{ padding: "0.8rem 2rem", borderRadius: "10px", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>View My Work</a>
            <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer"
              style={{ padding: "0.8rem 2rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", background: "#0a66c2", color: "#fff", display: "inline-block" }}>
              💼 LinkedIn
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: "0.8rem 2rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>Contact</a>
            <a href="/My Resume (7).pdf" download style={{ padding: "0.8rem 2rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "6px" }}>⬇️ CV</a>
          </div>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginTop: "3.5rem", flexWrap: "wrap" }}>
            {[{ num: "2+", label: "Years Experience" }, { num: "10+", label: "Projects Built" }, { num: "5+", label: "Technologies" }].map(s => (
              <div key={s.label} className="stat-card" style={{ minWidth: "110px" }}>
                <div className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: 800 }}>{s.num}</div>
                <div style={{ color: "#64748b", fontSize: "0.78rem", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad" style={{ padding: "6rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>About Me</p>
          <h2 className="section-title gradient-text" style={{ fontSize: "2rem", fontWeight: 700 }}>Who I Am</h2>
        </div>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="float about-avatar" style={{
              width: "260px", height: "320px", borderRadius: "24px",
              overflow: "hidden", position: "relative",
              border: "2px solid rgba(99,102,241,0.3)",
              boxShadow: "0 20px 60px rgba(99,102,241,0.2)",
            }}>
              <img src="/profile.jpg" alt="Abdullah Al Mahmud"
                onError={e => { e.target.style.display="none"; e.target.parentNode.innerHTML='<span style="font-size:4rem;display:flex;align-items:center;justify-content:center;width:100%;height:100%">👨‍💻</span>'; }}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              <div style={{
                position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                borderRadius: "20px", padding: "0.4rem 1rem",
                fontSize: "0.78rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap",
              }}>Full Stack Developer</div>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#e2e8f0" }}>
              Passionate Coder & Lifelong Learner
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.93rem" }}>
              I'm Abdullah Al Mahmud, a Full Stack Developer with expertise in building scalable web applications.
              I specialize in the MERN stack and love creating clean, efficient, and user-friendly solutions.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
              From RESTful APIs to responsive UIs, I bring ideas to life with modern technologies and best practices.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
              {[
                { label: "📧 Email", value: "abdullahalmahmudmahmud777@gmail.com" },
                { label: "📍 Location", value: "Bangladesh" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", fontSize: "0.88rem", flexWrap: "wrap" }}>
                  <span style={{ color: "#6366f1", minWidth: "80px" }}>{item.label}</span>
                  <span style={{ color: "#94a3b8" }}>{item.value}</span>
                </div>
              ))}
            </div>
            {/* Social links */}
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: "8px", padding: "0.5rem 0.9rem",
                  color: "#a5b4fc", textDecoration: "none", fontSize: "0.82rem", fontWeight: 600,
                  transition: "all 0.2s", display: "flex", alignItems: "center", gap: "5px",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(99,102,241,0.1)"}
                >{s.icon} {s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(99,102,241,0.02)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>What I Do</p>
            <h2 className="section-title gradient-text" style={{ fontSize: "2rem", fontWeight: 700 }}>Services</h2>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.2rem" }}>
            {SERVICES.map(s => (
              <div key={s.title} className="project-card" style={{ borderRadius: "16px", padding: "1.8rem 1.4rem" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.8rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: "0.5rem", color: "#e2e8f0" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad" style={{ padding: "6rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>My Expertise</p>
          <h2 className="section-title gradient-text" style={{ fontSize: "2rem", fontWeight: 700 }}>Skills & Technologies</h2>
        </div>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
          {SKILLS.map(skill => (
            <div key={skill.name} className="skill-badge" style={{ borderRadius: "12px", padding: "1.2rem 1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
                <span style={{ fontSize: "1.3rem" }}>{skill.icon}</span>
                <span style={{ fontWeight: 600, fontSize: "0.88rem", color: "#e2e8f0" }}>{skill.name}</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "4px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: "4px",
                  background: "linear-gradient(90deg, #6366f1, #a855f7)",
                  width: `${skill.level}%`,
                }} />
              </div>
              <div style={{ textAlign: "right", fontSize: "0.72rem", color: "#6366f1", marginTop: "4px" }}>{skill.level}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEETCODE */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(255,161,22,0.02)", borderTop: "1px solid rgba(255,161,22,0.08)", borderBottom: "1px solid rgba(255,161,22,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#ffa116", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Problem Solving</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, background: "linear-gradient(135deg, #ffa116, #ff6b35)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>LeetCode Stats</h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", marginTop: "0.5rem" }}>Sharpening algorithmic thinking & DSA skills</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
            {/* Stats cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", width: "100%", maxWidth: "700px" }}>
              {[
                { label: "Languages", value: "3+", sub: "Python, C++, JS", color: "#6366f1" },
                { label: "Profile Rank", value: "Active", sub: "~5M Global", color: "#ffa116" },
                { label: "Focus Areas", value: "DSA", sub: "Algorithms & Data Structures", color: "#22c55e" },
                { label: "Country", value: "🇧🇩", sub: "Bangladesh", color: "#ec4899" },
              ].map(s => (
                <div key={s.label} style={{
                  background: "rgba(255,255,255,0.02)", border: `1px solid ${s.color}30`,
                  borderRadius: "14px", padding: "1.4rem 1rem", textAlign: "center",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${s.color}30`; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: s.color, marginBottom: "0.3rem" }}>{s.value}</div>
                  <div style={{ color: "#e2e8f0", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.2rem" }}>{s.label}</div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem" }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Language badges */}
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { lang: "Python", color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
                { lang: "C++", color: "#a855f7", bg: "rgba(168,85,247,0.1)" },
                { lang: "JavaScript", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
              ].map(l => (
                <div key={l.lang} style={{
                  background: l.bg, border: `1px solid ${l.color}40`,
                  borderRadius: "10px", padding: "0.6rem 1.2rem",
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: l.color, display: "inline-block" }} />
                  <span style={{ color: l.color, fontWeight: 600, fontSize: "0.88rem" }}>{l.lang}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="https://leetcode.com/u/CqiiFmYSgN/" target="_blank" rel="noopener noreferrer" style={{
              background: "linear-gradient(135deg, #ffa116, #ff6b35)",
              padding: "0.85rem 2.2rem", borderRadius: "10px",
              color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem",
              display: "inline-flex", alignItems: "center", gap: "8px",
              transition: "all 0.3s", boxShadow: "0 8px 25px rgba(255,161,22,0.3)",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(255,161,22,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,161,22,0.3)"; }}
            >
              🧩 View LeetCode Profile
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "5rem 1.5rem", background: "rgba(99,102,241,0.02)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>My Work</p>
            <h2 className="section-title gradient-text" style={{ fontSize: "2rem", fontWeight: 700 }}>Featured Projects</h2>
          </div>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.4rem" }}>
            {PROJECTS.map(p => (
              <div key={p.title} className="project-card" style={{ borderRadius: "16px", padding: "1.6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

                {/* Status badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <div style={{ fontSize: "1.8rem" }}>🗂️</div>
                  <span style={{
                    fontSize: "0.72rem", fontWeight: 700, padding: "0.2rem 0.7rem", borderRadius: "20px",
                    background: p.status === "In Progress" ? "rgba(251,191,36,0.1)" : "rgba(34,197,94,0.1)",
                    border: `1px solid ${p.status === "In Progress" ? "rgba(251,191,36,0.4)" : "rgba(34,197,94,0.4)"}`,
                    color: p.status === "In Progress" ? "#fbbf24" : "#22c55e",
                  }}>
                    {p.status === "In Progress" ? "🔧 In Progress" : "✅ Live"}
                  </span>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem" }}>{p.desc}</p>

                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
                      color: "#a5b4fc", padding: "0.18rem 0.6rem", borderRadius: "20px", fontSize: "0.75rem",
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                      background: `${p.color}20`, border: `1px solid ${p.color}50`,
                      color: p.color, padding: "0.35rem 0.9rem", borderRadius: "8px",
                      fontSize: "0.82rem", textDecoration: "none", fontWeight: 600,
                      display: "flex", alignItems: "center", gap: "4px",
                    }}>🔗 Live Demo</a>
                  )}
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                    color: "#64748b", fontSize: "0.82rem", textDecoration: "none", fontWeight: 600,
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>🐙 GitHub</a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom links */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="https://github.com/Abdullah-Al-Mahmud777" target="_blank" rel="noopener noreferrer"
              className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0.75rem 1.8rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>
              🐙 View All on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* WORK PROGRESS */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(99,102,241,0.02)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Currently Working On</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work & Progress</h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", marginTop: "0.5rem" }}>Follow my journey on LinkedIn & GitHub</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {[
              {
                platform: "GitHub",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
                color: "#e2e8f0",
                bg: "rgba(255,255,255,0.05)",
                border: "rgba(255,255,255,0.1)",
                href: "https://github.com/Abdullah-Al-Mahmud777",
                handle: "@Abdullah-Al-Mahmud777",
                desc: "Open source projects, code contributions, and daily commits. See my repositories and development activity.",
                stats: [{ label: "Repositories", val: "10+" }, { label: "Languages", val: "5+" }],
              },
              {
                platform: "LinkedIn",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                color: "#60a5fa",
                bg: "rgba(10,102,194,0.1)",
                border: "rgba(10,102,194,0.3)",
                href: "https://www.linkedin.com/in/abdullah-al-mahmud-357566233/",
                handle: "Abdullah Al Mahmud",
                desc: "Professional updates, project showcases, work experience, and networking. Connect with me professionally.",
                stats: [{ label: "Experience", val: "2+ yrs" }, { label: "Skills", val: "MERN" }],
              },
            ].map(p => (
              <a key={p.platform} href={p.href} target="_blank" rel="noopener noreferrer"
                style={{
                  background: p.bg, border: `1px solid ${p.border}`,
                  borderRadius: "16px", padding: "1.8rem", textDecoration: "none",
                  display: "block", transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${p.border}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                  <div style={{ color: p.color, display: "flex" }}>{p.icon}</div>
                  <div>
                    <div style={{ color: p.color, fontWeight: 700, fontSize: "1rem" }}>{p.platform}</div>
                    <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{p.handle}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: p.color, fontSize: "1.2rem" }}>↗</div>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {p.stats.map(s => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "0.5rem 0.8rem", textAlign: "center" }}>
                      <div style={{ color: p.color, fontWeight: 700, fontSize: "0.95rem" }}>{s.val}</div>
                      <div style={{ color: "#64748b", fontSize: "0.72rem" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Progress bars */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "16px", padding: "1.8rem" }}>
            <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem" }}>🚀 Current Development Focus</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {[
                { label: "JibonDaak — Emergency Ambulance Platform", progress: 65, color: "#22c55e", status: "In Progress" },
                { label: "MERN Stack Projects", progress: 85, color: "#6366f1", status: "Active" },
                { label: "Open Source Contributions", progress: 40, color: "#a855f7", status: "Ongoing" },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ color: "#e2e8f0", fontSize: "0.88rem", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ color: item.color, fontSize: "0.78rem", fontWeight: 600, background: `${item.color}15`, padding: "0.1rem 0.6rem", borderRadius: "20px" }}>{item.status}</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${item.progress}%`, background: `linear-gradient(90deg, ${item.color}, ${item.color}99)`, borderRadius: "4px", transition: "width 1s ease" }} />
                  </div>
                  <div style={{ textAlign: "right", color: "#64748b", fontSize: "0.72rem", marginTop: "3px" }}>{item.progress}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ padding: "6rem 1.5rem", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Get In Touch</p>
          <h2 className="section-title gradient-text" style={{ fontSize: "2rem", fontWeight: 700 }}>Contact Me</h2>
          <p style={{ color: "#64748b", fontSize: "0.92rem" }}>Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "Email", value: "abdullahalmahmudmahmud777@gmail.com", href: "mailto:abdullahalmahmudmahmud777@gmail.com", color: "#6366f1" },
            { label: "Email 2", value: "shuvo.montu@gmail.com", href: "mailto:shuvo.montu@gmail.com", color: "#a855f7" },
            { label: "LinkedIn", value: "Abdullah Al Mahmud", href: "https://www.linkedin.com/in/abdullah-al-mahmud-357566233/", color: "#60a5fa" },
            { label: "GitHub", value: "@Abdullah-Al-Mahmud777", href: "https://github.com/Abdullah-Al-Mahmud777", color: "#e2e8f0" },
            { label: "WhatsApp", value: "+880 1617 681926", href: "https://wa.me/8801617681926", color: "#22c55e" },
            { label: "Telegram", value: "+880 1617 681926", href: "https://t.me/+8801617681926", color: "#29b6f6" },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="project-card" style={{ borderRadius: "12px", padding: "1.2rem", textAlign: "center", textDecoration: "none", display: "block", border: "1px solid " + item.color + "40" }}>
              <div style={{ color: item.color, fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.72rem", wordBreak: "break-all", marginTop: "0.3rem" }}>{item.value}</div>
            </a>
          ))}
        </div>

        {/* EDUCATION */}
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#a5b4fc", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px" }}>
            🎓 Education
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                degree: "BSc in Computer Science & Engineering",
                institute: "Varendra University",
                period: "2022 – Present",
                color: "#6366f1",
              },
              {
                degree: "Higher Secondary Certificate (HSC)",
                institute: "Kafuria Degree College",
                period: "2021",
                color: "#a855f7",
              },
              {
                degree: "Secondary School Certificate (SSC)",
                institute: "Natore Govt. Boys High School",
                period: "2019",
                color: "#ec4899",
              },
            ].map((edu, i) => (
              <div key={i} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                background: "rgba(255,255,255,0.02)", border: `1px solid ${edu.color}25`,
                borderRadius: "12px", padding: "1.2rem 1.4rem",
                borderLeft: `3px solid ${edu.color}`,
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `${edu.color}08`; e.currentTarget.style.borderColor = `${edu.color}50`; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = `${edu.color}25`; }}
              >
                <div style={{ flexShrink: 0, marginTop: "3px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: edu.color, boxShadow: `0 0 8px ${edu.color}` }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.3rem" }}>
                    <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.92rem" }}>{edu.degree}</span>
                    <span style={{ color: edu.color, fontSize: "0.78rem", fontWeight: 600, background: `${edu.color}15`, padding: "0.15rem 0.6rem", borderRadius: "20px" }}>{edu.period}</span>
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>📍 {edu.institute}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PAPERS */}
      <section id="research" style={{ padding: "5rem 1.5rem", background: "rgba(99,102,241,0.02)", borderTop: "1px solid rgba(99,102,241,0.08)", borderBottom: "1px solid rgba(99,102,241,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Academic Reading</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Research Papers</h2>
            <p style={{ color: "#64748b", fontSize: "0.92rem", marginTop: "0.5rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              I actively read research papers, identify gaps in existing work, and explore opportunities for innovation in software engineering & AI.
            </p>
          </div>

          {/* Research approach cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "📖", title: "Active Reading", desc: "Regularly study papers from IEEE, ACM, arXiv" },
              { icon: "🔍", title: "Gap Analysis", desc: "Identify limitations and unexplored areas in research" },
              { icon: "💡", title: "Innovation", desc: "Propose novel solutions based on research insights" },
              { icon: "🛠️", title: "Implementation", desc: "Build prototypes inspired by academic findings" },
            ].map(c => (
              <div key={c.title} style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)", borderRadius: "12px", padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.3rem" }}>{c.title}</div>
                <div style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Papers list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "Attention Is All You Need",
                authors: "Vaswani et al., Google Brain",
                year: "2017",
                field: "AI / NLP",
                color: "#6366f1",
                gap: "Transformer models lack efficiency for very long sequences — sparse attention mechanisms needed.",
                link: "https://arxiv.org/abs/1706.03762",
              },
              {
                title: "BERT: Pre-training of Deep Bidirectional Transformers",
                authors: "Devlin et al., Google AI",
                year: "2018",
                field: "NLP",
                color: "#a855f7",
                gap: "BERT is computationally expensive; lightweight alternatives for low-resource environments are underexplored.",
                link: "https://arxiv.org/abs/1810.04805",
              },
              {
                title: "An Image is Worth 16x16 Words: Vision Transformers",
                authors: "Dosovitskiy et al., Google Research",
                year: "2020",
                field: "Computer Vision",
                color: "#ec4899",
                gap: "ViT requires large datasets; few-shot learning integration remains a research gap.",
                link: "https://arxiv.org/abs/2010.11929",
              },
              {
                title: "Deep Residual Learning for Image Recognition",
                authors: "He et al., Microsoft Research",
                year: "2015",
                field: "Deep Learning",
                color: "#06b6d4",
                gap: "ResNets struggle with dynamic input sizes; adaptive depth networks are an open problem.",
                link: "https://arxiv.org/abs/1512.03385",
              },
              {
                title: "Generative Adversarial Networks",
                authors: "Goodfellow et al., Université de Montréal",
                year: "2014",
                field: "Generative AI",
                color: "#22c55e",
                gap: "Training instability and mode collapse remain unsolved; better loss functions are needed.",
                link: "https://arxiv.org/abs/1406.2661",
              },
              {
                title: "MERN Stack Web Application Security Analysis",
                authors: "Various Authors, IEEE",
                year: "2022",
                field: "Web Security",
                color: "#f59e0b",
                gap: "JWT token refresh strategies and real-time threat detection in MERN apps are underresearched.",
                link: "https://ieeexplore.ieee.org",
              },
              {
                title: "Microservices vs Monolithic Architecture",
                authors: "Dragoni et al.",
                year: "2017",
                field: "Software Architecture",
                color: "#6366f1",
                gap: "Cost-benefit analysis for small teams adopting microservices lacks empirical data.",
                link: "https://arxiv.org/abs/1606.04036",
              },
              {
                title: "Real-Time Object Detection: YOLO",
                authors: "Redmon et al., University of Washington",
                year: "2016",
                field: "Computer Vision",
                color: "#a855f7",
                gap: "YOLO struggles with small object detection in dense scenes — a gap for medical imaging.",
                link: "https://arxiv.org/abs/1506.02640",
              },
              {
                title: "A Survey on Transfer Learning",
                authors: "Pan & Yang, IEEE",
                year: "2010",
                field: "Machine Learning",
                color: "#ec4899",
                gap: "Negative transfer in dissimilar domains is still an open challenge with no universal solution.",
                link: "https://ieeexplore.ieee.org/document/5288526",
              },
              {
                title: "Blockchain Technology in Healthcare Systems",
                authors: "Agbo et al., MDPI",
                year: "2019",
                field: "Blockchain / Healthcare",
                color: "#06b6d4",
                gap: "Scalability and real-time data access in blockchain-based health records remain major gaps.",
                link: "https://www.mdpi.com/2227-9032/7/2/56",
              },
            ].map((paper, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: `3px solid ${paper.color}`,
                borderRadius: "12px", padding: "1.4rem 1.6rem",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `${paper.color}08`; e.currentTarget.style.borderColor = `${paper.color}50`; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div style={{ flex: 1 }}>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", lineHeight: 1.4 }}
                      onMouseEnter={e => e.target.style.color = paper.color}
                      onMouseLeave={e => e.target.style.color = "#e2e8f0"}
                    >{paper.title}</a>
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
                    <span style={{ background: `${paper.color}15`, color: paper.color, padding: "0.15rem 0.6rem", borderRadius: "20px", fontSize: "0.72rem", fontWeight: 600 }}>{paper.field}</span>
                    <span style={{ background: "rgba(255,255,255,0.05)", color: "#64748b", padding: "0.15rem 0.6rem", borderRadius: "20px", fontSize: "0.72rem" }}>{paper.year}</span>
                  </div>
                </div>
                <div style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.6rem" }}>{paper.authors}</div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <span style={{ color: "#fbbf24", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>🔍 Gap:</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.6 }}>{paper.gap}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      {/* WhatsApp */}
      <a href="https://wa.me/8801617681926" target="_blank" rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: "28px", right: "28px", zIndex: 9999,
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          textDecoration: "none", transition: "all 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)"; }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Telegram */}
      <a href="https://t.me/+8801617681926" target="_blank" rel="noopener noreferrer"
        title="Chat on Telegram"
        style={{
          position: "fixed", bottom: "96px", right: "28px", zIndex: 9999,
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #29b6f6, #0288d1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(41,182,246,0.5)",
          textDecoration: "none", transition: "all 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(41,182,246,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(41,182,246,0.5)"; }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.95-.924c-.64-.203-.658-.64.136-.954l11.57-4.461c.537-.194 1.006.131.968.893z"/>
        </svg>
      </a>

      {/* Email */}
      <a href="mailto:abdullahalmahmudmahmud777@gmail.com" target="_blank" rel="noopener noreferrer"
        title="Send Email"
        style={{
          position: "fixed", bottom: "164px", right: "28px", zIndex: 9999,
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
          textDecoration: "none", transition: "all 0.3s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(99,102,241,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.5)"; }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid rgba(99,102,241,0.1)", padding: "2rem 1.5rem",
        textAlign: "center", background: "rgba(5,5,16,0.8)",
      }}>
        <div style={{ marginBottom: "1rem" }}>
          <span className="gradient-text" style={{ fontWeight: 700, fontSize: "1.1rem" }}>Abdullah Al Mahmud</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
          {SOCIAL.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#a5b4fc"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >{l.icon} {l.label}</a>
          ))}
        </div>
        <p style={{ color: "#334155", fontSize: "0.8rem" }}> Developed by Abdullah Al Mahmud · </p>
      </footer>
    </div>
  );
}
