import gdgLogo from "./GDG logo.png";
import { useEffect, useRef, useState } from "react";

const NAV = [
  ["Home", "blue"],
  ["Team", "red"],
  ["Events", "yellow"],
  ["Gallery", "green"],
  ["Portfolio", "purple"],
  ["More", "blue"],
];

const FAQS = [
  [
    "What is GDG RBU?",
    "GDG RBU is a student-run developer community. We organize workshops, tech talks, and hackathons where students learn and build projects together.",
  ],
  [
    "How to join GDG?",
    "Register for our upcoming events and follow us on social media. All RBU students are welcome, regardless of experience.",
  ],
  [
    "What does a GDG Lead do?",
    "A GDG Lead organizes events, guides members, and helps grow the campus developer community.",
  ],
  [
    "How is GDG related to Google?",
    "GDG on Campus is part of the Google for Developers community program. Each chapter is run by students.",
  ],
  [
    "How to reach us?",
    "Email gdgrbu@gmail.com or visit Ramdeobaba University, Nagpur.",
  ],
];

function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="3"
        width="10"
        height="22"
        rx="5"
        transform="rotate(-45 6 14)"
        fill="#EA4335"
      />
      <rect
        x="15"
        y="1"
        width="10"
        height="22"
        rx="5"
        transform="rotate(-45 20 12)"
        fill="#34A853"
      />
      <rect
        x="16"
        y="18"
        width="10"
        height="22"
        rx="5"
        transform="rotate(-45 21 29)"
        fill="#FBBC04"
      />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${on ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [faq, setFaq] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let theme = "light";

    try {
      theme =
        localStorage.getItem("theme") ||
        document.documentElement.dataset.theme ||
        "light";
    } catch {
      theme = document.documentElement.dataset.theme || "light";
    }

    document.documentElement.dataset.theme = theme;
    setDark(theme === "dark");
  }, []);

  const toggle = () => {
    const theme = dark ? "light" : "dark";

    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme still works when localStorage is unavailable.
    }

    setDark(theme === "dark");
  };

  return (
    <>
      <header className="nav">
        <a href="#home" aria-label="GDG RBU Home">
          <Logo />
        </a>

        <button
          className="btn burger"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
          aria-expanded={menu}
        >
          ☰
        </button>

        <nav className={menu ? "open" : ""}>
          {NAV.map(([name, color]) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className={`btn sm ${color}`}
              onClick={() => setMenu(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <button
          className="btn sm"
          onClick={toggle}
          aria-label="Toggle dark mode"
        >
          {dark ? "☀ Light" : "☾ Dark"}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div>
            <h1>Google Developer Groups, RBU</h1>

            <p className="mono">
              A student community at Ramdeobaba University where we
              learn, build, and grow together with Google technologies.
            </p>

            <div className="row">
              <a href="#team" className="btn sm">
                Learn More
              </a>

              <a href="#events" className="btn sm">
                Explore Events
              </a>
            </div>
          </div>
          <div className="blob">
            <img
              src="/GDG%20logo.png"
              alt="GDG Logo"
              className="hero-logo" />
          </div>
        </section>
         
        <section id="events">
          <Reveal>
            <h2>Upcoming Events</h2>
          </Reveal>

          <Reveal className="events">
            <article className="card photo">
              <span className="tag">Workshop</span>

              <div>
                <h3>GDG Orientation</h3>

                <p className="mono">
                  Meet the team, discover our activities, and learn how
                  you can become part of the community.
                </p>
              </div>
            </article>

            <article className="card yellow ev">
              <h3>New Event</h3>

              <p className="mono">
                Date &amp; Time
                <br />
                <b>
                  Oct 7, 2026
                  <br />
                  3:00 PM
                </b>
              </p>

              <a className="btn sm dark" href="#footer">
                Register Now
              </a>
            </article>
          </Reveal>
        </section>

        <section id="team">
          <Reveal className="card team">
            <div>
              <h2 className="left">Meet the GDG RBU Team</h2>

              <p className="mono">
                Google Developer Groups are communities for students
                and developers interested in learning about technology
                and Google tools.
              </p>

              <p className="mono">
                <b>Community Leaders</b>
                <br />
                Our organizers create opportunities to connect,
                collaborate, and share knowledge.
              </p>

              <p className="mono">
                <b>Learning Together</b>
                <br />
                We organize workshops, meetups, and activities to help
                students develop practical skills.
              </p>
            </div>

            <div
              className="teamimg"
              role="img"
              aria-label="GDG RBU team logo"
            >
              <Logo size={90} />
            </div>
          </Reveal>
        </section>

        <section id="faqs">
          <Reveal>
            <h2>FAQs</h2>
          </Reveal>

          <Reveal className="faqs">
            {FAQS.map(([question, answer], index) => (
              <div
                key={question}
                className={`card faq ${faq === index ? "open" : ""}`}
              >
                <button
                  onClick={() =>
                    setFaq(faq === index ? -1 : index)
                  }
                  aria-expanded={faq === index}
                >
                  {question}
                  <span aria-hidden="true">⌄</span>
                </button>

                <div className="ans">
                  <p className="mono">{answer}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </section>
      </main>

      <footer id="footer">
        <Reveal className="card foot">
          <Logo size={48} />

          <h3>Google Developer Groups</h3>

          <p className="mono">
            On Campus · Ramdeobaba University
          </p>

          <div className="cols">
            <div className="card blue">
              <b>Ramdeobaba University</b>
              <br />
              Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013
            </div>

            <div className="card purple">
              <b>Follow Us</b>

              <div className="row">
                <a className="btn sm red" href="#">
                  Instagram
                </a>

                <a className="btn sm" href="#">
                  LinkedIn
                </a>

                <a className="btn sm green" href="#">
                  X
                </a>
              </div>
            </div>
          </div>

          <a
            className="card yellow mail"
            href="mailto:gdgrbu@gmail.com"
          >
            <b>gdgrbu@gmail.com</b>
          </a>
        </Reveal>

        <div className="shapes" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </footer>
    </>
  );
}

