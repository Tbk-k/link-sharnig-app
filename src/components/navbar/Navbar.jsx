import React, { useEffect, useState } from "react";
import { StyledMenu, StyledNavbar } from "./Navbar.styles";
import { ReactComponent as LogoSmall } from "../../assets/images/logo-devlinks-small.svg";
import { ReactComponent as LogoLarge } from "../../assets/images/logo-devlinks-large.svg";
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import { ReactComponent as ProfileIcon } from "../../assets/images/icon-profile-details-header.svg";
import { ReactComponent as PreviewIcon } from "../../assets/images/icon-preview-header.svg";

const Navbar = () => {
  const links = [
    { id: 1, name: "Logo", path: null, img: <LogoSmall /> },
    { id: 2, name: "links", path: "/links", img: <LinkIcon /> },
    { id: 3, name: "ptofile", path: "/profile", img: <ProfileIcon /> },
    { id: 4, name: "home", path: "/preview", img: <PreviewIcon /> },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledNavbar>
      <StyledMenu>
        <li>{screenWidth < 768 ? <LogoSmall /> : <LogoLarge />}</li>
        <div>
          <li>
            <button id="active">
              <LinkIcon />
              <span>Links</span>
            </button>
          </li>
          <li>
            <button>
              <ProfileIcon />
              <span>Profile details</span>
            </button>
          </li>
        </div>
        <li></li>
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;
