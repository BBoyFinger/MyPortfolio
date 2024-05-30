import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/BBoyFinger" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/tuvngdev1502",
  },
  { icon: <FaFacebook />, path: "https://www.facebook.com/tuvngch18505/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/vnt.1502/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
