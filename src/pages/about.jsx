import { Link } from "react-router-dom";

const STATS = [
  { value: "20+", label: "Products" },
  { value: "6", label: "Categories" },
  { value: "100%", label: "Curated" },
  { value: "Free", label: "Returns" },
];

const CATEGORIES = [
  { icon: "⌨", name: "Electronics" },
  { icon: "☕", name: "Kitchen" },
  { icon: "✒", name: "Stationery" },
  { icon: "🏕", name: "Outdoors" },
  { icon: "⚡", name: "Fitness" },
  { icon: "🪑", name: "Furniture" },
];

const VALUES = [
  {
    icon: "▣",
    title: "Curated Selection",
    body: "Every item is hand-picked. We don't list everything — only what we'd actually buy.",
  },
  {
    icon: "◈",
    title: "Honest Pricing",
    body: "No inflated MSRPs, no fake discounts. The price you see is the fair price.",
  },
  {
    icon: "◎",
    title: "Quality First",
    body: "We favor durability over disposability. Things built to last, not to be replaced.",
  },
];

export default function About() {
  return (
    <div className="page about-page">
      
      <div className="about-hero">
        <span className="about-eyebrow">EST. 2024</span>
        <h1 className="about-title">
          Built for YOU.
         
        </h1>
        <p className="about-subtitle">
          MegaStore is a curated marketplace for everyday essentials. We cut
          through the noise and surface products that are genuinely worth
          owning.
        </p>
        <Link to="/" className="btn btn-primary btn-about-cta">
          Browse the Shop →
        </Link>
      </div>

      <div className="about-stats">
        {STATS.map((s) => (
          <div className="stat-block" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      
      <div className="about-section">
        <span className="section-label">What we stand for</span>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <span className="value-icon">{v.icon}</span>
              <div>
                <p className="value-title">{v.title}</p>
                <p className="value-body">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="about-section">
        <span className="section-label">Categories we carry</span>
        <div className="cat-chips">
          {CATEGORIES.map((c) => (
            <Link to="/" className="cat-chip" key={c.name}>
              <span>{c.icon}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}