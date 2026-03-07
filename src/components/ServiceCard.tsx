interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export default function ServiceCard({ icon, title, description, bullets }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-card-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
