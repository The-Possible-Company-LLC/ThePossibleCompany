interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  items: FeatureItem[];
}

export default function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="feature-list">
      {items.map((item, i) => (
        <li key={i} className="feature-item">
          {item.icon && (
            <span className="feature-icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
