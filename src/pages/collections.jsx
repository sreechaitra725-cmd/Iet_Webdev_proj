const COLLECTIONS = [
  {
    title: "Home Office Essentials",
    description:
      "A premium selection of desk lighting, storage, audio, and desktop tools designed for focus and comfort.",
    stats: [
      "45 curated items",
      "top-rated desk accessories",
      "ergonomic picks",
    ],
  },
  {
    title: "Wellness & Recovery",
    description:
      "Recovery rollers, wellness gadgets, and everyday comfort pieces for healthier routines and better rest.",
    stats: ["35 wellness kits", "mindful self-care", "daily reset favorites"],
  },
  {
    title: "Travel & Carry",
    description:
      "Durable travel gear, bags, and compact tech for stylish and smart journeys every day.",
    stats: ["lightweight essentials", "carry-on friendly", "durable materials"],
  },
  {
    title: "Stylish Living",
    description:
      "Home accents, tabletop pieces, and functional decor that feel premium without the premium markup.",
    stats: ["minimal design", "everyday luxury", "made to last"],
  },
];

export default function Collections() {
  return (
    <main className="page collections-page">
      <section className="page-hero">
        <p className="hero-eyebrow">Curated collections</p>
        <h2 className="hero-title">
          Ready-made collections for every room and routine.
        </h2>
        <p className="hero-copy">
          Explore thoughtfully grouped product sets with their own style, use
          case, and curated brand mix.
        </p>
      </section>

      <div className="collections-grid">
        {COLLECTIONS.map((collection) => (
          <article className="collection-card" key={collection.title}>
            <div className="collection-card-head">
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
            </div>
            <ul className="collection-features">
              {collection.stats.map((stat) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}