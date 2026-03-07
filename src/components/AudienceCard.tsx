interface AudienceCardProps {
  icon: string;
  title: string;
  description: string;
  traits: string[];
}

export default function AudienceCard({ icon, title, description, traits }: AudienceCardProps) {
  return (
    <div className="audience-card">
      <div className="audience-card-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="audience-traits">
        {traits.map((trait, i) => (
          <li key={i}>{trait}</li>
        ))}
      </ul>
    </div>
  );
}
