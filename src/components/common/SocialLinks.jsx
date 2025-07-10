import { SOCIAL_LINKS } from "../../utils/constants";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary-light dark:hover:text-primary-dark transition-colors"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;