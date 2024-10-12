import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/derrick-munkhbat" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/derrick-munkhbat",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/munkhdulguun24",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/3d6g9",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            className={iconStyles}
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
