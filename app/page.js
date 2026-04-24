"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

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
    tech: ["React.js", "Next.js", "Firebase"],
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
  { label: "Email", href: "mailto:abdullahalmahmudmahmud777@gmail.com", icon: "📧" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [typed, setTyped] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { setMounted(true); }, []);
  const roles = ["Full Stack Developer", "MERN Stack Expert", "React.js Developer", "Node.js Engineer"];
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "abdullahalmahmudmahmud777@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (!mounted) return (
    <div style={{ backgroundColor: "#050510", minHeight: "100vh" }} />
  );

  return (
    <div style={{ backgroundColor: "#050510", minHeight: "100vh", color: "#e2e8f0" }} suppressHydrationWarning>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 1.5rem", height: "65px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(5,5,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, color: "#fff", fontSize: "1rem",
          }}>A</div>
          <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#e2e8f0" }}>Abdullah</span>
        </div>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link"
              style={{ fontSize: "0.9rem", fontWeight: 500, color: activeNav === link ? "#a5b4fc" : "#94a3b8" }}>
              {link}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{
              padding: "0.45rem 1.1rem", borderRadius: "8px",
              color: "#fff", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
            }}>LinkedIn</a>
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
          background: "rgba(5,5,16,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
          padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              style={{
                color: activeNav === link ? "#a5b4fc" : "#94a3b8",
                textDecoration: "none", fontSize: "1rem", fontWeight: 500,
                padding: "0.5rem 0", borderBottom: "1px solid rgba(99,102,241,0.08)",
              }}>{link}</a>
          ))}
          <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileMenu(false)}
            className="btn-primary" style={{
              padding: "0.7rem 1.2rem", borderRadius: "8px",
              color: "#fff", textDecoration: "none", fontSize: "0.9rem",
              fontWeight: 600, textAlign: "center", marginTop: "0.5rem",
            }}>💼 LinkedIn</a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero-bg dot-grid hero-content" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "6rem 1.5rem 4rem", position: "relative", overflow: "hidden",
      }}>
        {/* bg orbs */}
        <div style={{ position: "absolute", top: "15%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "5%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="hero-two-col">

          {/* LEFT — text */}
          <div style={{ textAlign: "left" }} className="hero-text-col">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "50px", padding: "0.4rem 1rem", marginBottom: "1.5rem",
              fontSize: "0.82rem", color: "#a5b4fc",
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              Available for work
            </div>

            <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.8rem" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Abdullah<br />Al Mahmud</span>
            </h1>

            <div className="hero-role" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", fontWeight: 600, color: "#94a3b8", marginBottom: "1.2rem", minHeight: "2rem" }}>
              <span style={{ color: "#a5b4fc" }}>{typed}</span>
              <span style={{ color: "#6366f1" }}>|</span>
            </div>

            <p className="hero-desc" style={{ color: "#64748b", fontSize: "clamp(0.85rem, 1.5vw, 0.98rem)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "480px" }}>
              Passionate about coding, constantly learning, and building projects that make an impact.
              Specialized in MERN stack with a focus on scalable, user-friendly applications.
            </p>

            <div className="hero-btns" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary" style={{ padding: "0.8rem 1.6rem", borderRadius: "10px", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>View My Work</a>
              <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer"
                style={{ padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", background: "#0a66c2", color: "#fff", display: "inline-block" }}>
                💼 LinkedIn
              </a>
              <a href="#contact" className="btn-secondary" style={{ padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>Contact</a>
              <a href="/cv.pdf" download style={{ padding: "0.8rem 1.6rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#e2e8f0", display: "inline-flex", alignItems: "center", gap: "6px" }}>⬇️ CV</a>
            </div>

            <div className="stats-row" style={{ display: "flex", gap: "1.2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              {[{ num: "2+", label: "Years Exp" }, { num: "10+", label: "Projects" }, { num: "5+", label: "Technologies" }].map(s => (
                <div key={s.label} className="stat-card" style={{ minWidth: "90px" }}>
                  <div className="gradient-text" style={{ fontSize: "1.6rem", fontWeight: 800 }}>{s.num}</div>
                  <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — banner image */}
          <div className="hero-img-col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="float" style={{
              position: "relative", width: "100%", maxWidth: "420px",
            }}>
              {/* Glow behind image */}
              <div style={{
                position: "absolute", inset: "-20px",
                background: "radial-gradient(ellipse, rgba(99,102,241,0.25), transparent 70%)",
                borderRadius: "32px", filter: "blur(20px)",
              }} />
              {/* Image card */}
              <div style={{
                borderRadius: "28px", overflow: "hidden",
                border: "2px solid rgba(99,102,241,0.3)",
                boxShadow: "0 30px 80px rgba(99,102,241,0.25)",
                position: "relative", aspectRatio: "3/4",
              }}>
                <img
                  src="/profile.jpg"
                  alt="Abdullah Al Mahmud"
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.2));font-size:8rem">👨‍💻</div>';
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
                {/* Overlay badge */}
                <div style={{
                  position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)",
                  background: "rgba(5,5,16,0.85)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  borderRadius: "50px", padding: "0.5rem 1.2rem",
                  display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap",
                }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  <span style={{ color: "#e2e8f0", fontSize: "0.82rem", fontWeight: 600 }}>Full Stack Developer</span>
                </div>
              </div>
            </div>
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
          <div style={{ textAlign: "center", marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://github.com/Abdullah-Al-Mahmud777" target="_blank" rel="noopener noreferrer"
              className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0.75rem 1.8rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem" }}>
              🐙 View All on GitHub
            </a>
            <a href="https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0.75rem 1.8rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem", background: "#0a66c2", color: "#fff" }}>
              💼 Work & Progress on LinkedIn
            </a>
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

        <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { icon: "📧", label: "Email", value: "abdullahalmahmudmahmud777@gmail.com", href: "mailto:abdullahalmahmudmahmud777@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "Abdullah Al Mahmud", href: "https://www.linkedin.com/in/abdullah-al-mahmud-357566233/" },
            { icon: "💻", label: "GitHub", value: "@Abdullah-Al-Mahmud777", href: "https://github.com/Abdullah-Al-Mahmud777" },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="project-card" style={{ borderRadius: "12px", padding: "1.2rem", textAlign: "center", textDecoration: "none", display: "block" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{item.icon}</div>
              <div style={{ color: "#6366f1", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.3rem" }}>{item.label}</div>
              <div style={{ color: "#94a3b8", fontSize: "0.72rem", wordBreak: "break-all" }}>{item.value}</div>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: "16px", padding: "1.8rem", display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", marginBottom: "0.4rem" }}>Name</label>
              <input className="contact-input" placeholder="Your name" value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", marginBottom: "0.4rem" }}>Email</label>
              <input className="contact-input" type="email" placeholder="your@email.com" value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })} required />
            </div>
          </div>
          <div>
            <label style={{ display: "block", color: "#94a3b8", fontSize: "0.82rem", marginBottom: "0.4rem" }}>Message</label>
            <textarea className="contact-input" rows={5} placeholder="Tell me about your project..."
              value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
              required style={{ resize: "vertical" }} />
          </div>
          <button type="submit" className="btn-primary" disabled={sending} style={{
            padding: "0.85rem", borderRadius: "10px", color: "#fff",
            fontWeight: 700, fontSize: "0.95rem", border: "none", cursor: sending ? "not-allowed" : "pointer",
            opacity: sending ? 0.7 : 1,
          }}>
            {sending ? "Sending..." : "Send Message 🚀"}
          </button>
          {sent && (
            <div style={{ textAlign: "center", color: "#22c55e", fontWeight: 600, fontSize: "0.9rem", padding: "0.5rem", background: "rgba(34,197,94,0.1)", borderRadius: "8px", border: "1px solid rgba(34,197,94,0.3)" }}>
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div style={{ textAlign: "center", color: "#ef4444", fontWeight: 600, fontSize: "0.9rem", padding: "0.5rem", background: "rgba(239,68,68,0.1)", borderRadius: "8px", border: "1px solid rgba(239,68,68,0.3)" }}>
              ❌ {error}
            </div>
          )}
        </form>
      </section>

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
        <p style={{ color: "#334155", fontSize: "0.8rem" }}>© 2025 Abdullah Al Mahmud · </p>
      </footer>
    </div>
  );
}
