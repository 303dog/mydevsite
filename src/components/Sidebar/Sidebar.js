import {
  SideNavItems,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledP, StyledSideNav } from "./styles";

const items = [
  { name: "Me", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Work", path: "/work" },
  { name: "Education", path: "/education" },
  { name: "Contact Me", path: "/contact" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label='Side navigation'
    >
      <SideNavItems>
        {items.map((i) => (
          <SideNavLink
            isActive={
              location.pathname === "/" && i.path === "/"
                ? true
                : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
      <StyledP>
        <p>
          My dream job will keep me engaged by encouraging innovation &
          redefining current standards. I am genuinely excited and passionate
          about code and continue to learn everything I can!
        </p>
        <p>
          My background in hospitality lends well to software development in
          terms of my proven soft-skills, project management, problem solving
          and leadership experience. I possess the discipline and initiative
          that it takes to succeed as an island but I thrive in creative and
          collaborative environments where learning and sharing go hand and
          hand. Where people celebrate each others wins and support each other
          through their fails.
        </p>
      </StyledP>
    </StyledSideNav>
  );
};

export default Sidebar;
