import { Link } from "react-router";

interface HomeCardProps {
  link: string;
  imagePath: string;
  imageAlt: string | undefined;
  children: React.ReactNode;
}

export default function HomeCard({
  link,
  imagePath,
  imageAlt,
  children,
}: HomeCardProps) {
  return (
    <Link to={link}>
      <article className="p-6 rounded-md bg-gray-200 dark:bg-gray-700 ">
        <img src={imagePath} alt={imageAlt} />
        <h3 className="font-medium text-lg text-center mt-3">{children}</h3>
      </article>
    </Link>
  );
}
