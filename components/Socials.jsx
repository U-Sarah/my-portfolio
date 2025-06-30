import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import Link from "next/link";

const socials = [
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/_.justtega/",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/ubiebi-sarah-511488332/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/U-Sarah",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            <Link href={item.path}>{item.icon}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
