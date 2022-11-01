import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { StLogo, StMenu, StNav, StHamburger } from "./style";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const profileUrl: string = "";
  const router = useRouter();
  const menuRef = useRef<HTMLUListElement>();
  const path = router.pathname;

  const menuClickHandler = (e: { target: HTMLInputElement }) => {
    const menuList = Array.from(menuRef!.current!.children);
    const target = e.target.closest("li");

    for (const li in menuList) {
      menuList[li]!.classList.remove("active");
    }

    if (target) {
      const targetPath = target.dataset.path;
      router.push(targetPath);
      target.classList.add("active");
    }
  };

  const activeCurrentList = (path: string) => {
    const menuList = Array.from(menuRef!.current!.children);
    menuList.map((li) => {
      if (li.dataset.path === path) li.classList.add("active");
    });
  };

  const logoClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/");
    menuClickHandler(e);
  };

  useEffect(() => {
    activeCurrentList(path);
  }, []);

  console.log(showMenu);

  return (
    <StNav>
      <StHamburger on={!showMenu}>
        <label
          htmlFor="hamburger"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <img src="/icons/icon_nav_menu.svg" alt="햄버거 메뉴" />
        </label>
      </StHamburger>

      <Link
        href="/"
        onClick={(e: React.MouseEvent<HTMLElement>) => logoClickHandler(e)}
      >
        <StLogo profileUrl={profileUrl}>Logo</StLogo>
      </Link>

      <div className="right">
        <StMenu
          on={showMenu}
          onClick={(e: React.MouseEvent<HTMLUListElement>) =>
            menuClickHandler(e)
          }
          ref={menuRef}
        >
          <li data-path="/salons">정기 모임</li>
          <li data-path="/events">이벤트</li>
          <li data-path="/community">소모임</li>
          <li data-path="/about">About</li>
        </StMenu>

        <img src="icons/img_profile_default.svg" alt="프로필 사진" />
      </div>
    </StNav>
  );
};

export default Header;
