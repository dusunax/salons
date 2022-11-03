import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { StLogo, StMenu, StNav, StHamburger } from "./style";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const profileUrl: string = "";
  const router = useRouter();
  const path = router.pathname;

  const menuRef = useRef<HTMLUListElement>();

  const menuClickHandler = (e: { target: HTMLInputElement }) => {
    activeClickedList(e);
    setShowMenu(false);
  };

  const logoClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push("/");

    activeClickedList(e);
    setShowMenu(false);
  };

  const activeClickedList = (e: { target: HTMLInputElement }) => {
    const target = e.target.closest("li");
    const menuList = Array.from(menuRef!.current!.children);

    for (const li in menuList) {
      menuList[li]!.classList.remove("active");
    }

    if (target) {
      const targetPath = target.dataset.path;
      router.push(targetPath);
      target.classList.add("active");
    }
  };

  const activePathList = (path: string) => {
    const menuList = Array.from(menuRef!.current!.children);
    menuList.map((li) => {
      if (li.dataset.path === path) li.classList.add("active");
    });
  };

  useEffect(() => {
    activePathList(path);
  }, []);

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

        <img
          className="profile_img"
          src="icons/img_profile_default.svg"
          alt="프로필 사진"
        />
      </div>
    </StNav>
  );
};

export default Header;
