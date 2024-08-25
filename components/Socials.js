import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5">
      <a
        href="https://github.com/DalerKhusainov"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:text-accent"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/daler-khusainov-947a6a243/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:text-accent"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Socials;
