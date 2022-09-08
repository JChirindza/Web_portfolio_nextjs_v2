import Link from "next/link";
import { useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = (props) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Check if document is finally loaded

            const menu = document.querySelector(".menu");
            const menuMain = menu.querySelector(".menu-main");
            const goBack = menu.querySelector(".go-back");
            const menuTrigger = document.querySelector(".mobile-menu-trigger");
            const closeMenu = menu.querySelector(".mobile-menu-close");
            let subMenu;

            goBack.addEventListener("click", () => {
                hideSubMenu();
            });
            menuTrigger.addEventListener("click", () => {
                toggleMenu();
            });
            closeMenu.addEventListener("click", () => {
                toggleMenu();
            });

            menuMain.addEventListener("click", (e) => {
                if (!menu.classList.contains("active")) {
                    return;
                }
                if (e.target.closest(".menu-item-has-children")) {
                    const hasChildren = e.target.closest(
                        ".menu-item-has-children"
                    );
                    showSubMenu(hasChildren);
                }

                if (
                    !e.target.closest(".menu-item-has-children") &&
                    !e.target.closest(".theme-switch")
                ) {
                    toggleMenu();
                }

                if (e.target.closest("sub-menu")) {
                    toggleMenu();
                }
            });

            document
                .querySelector(".menu-overlay")
                .addEventListener("click", () => {
                    toggleMenu();
                });

            function toggleMenu() {
                menu.classList.toggle("active");
                document
                    .querySelector(".menu-overlay")
                    .classList.toggle("active");
            }

            function showSubMenu(hasChildren) {
                subMenu = hasChildren.querySelector(".sub-menu");
                subMenu.classList.add("active");
                subMenu.style.animation = "slideLeft 0.5s ease forwards";
                const menuTitle =
                    hasChildren.querySelector("i").parentNode.childNodes[0]
                        .textContent;
                menu.querySelector(".current-menu-title").innerHTML = menuTitle;
                menu.querySelector(".mobile-menu-head").classList.add("active");
            }

            function hideSubMenu() {
                subMenu.style.animation = "slideRight 0.5s ease forwards";
                setTimeout(() => {
                    subMenu.classList.remove("active");
                }, 500);
                menu.querySelector(".current-menu-title").innerHTML = "";
                menu.querySelector(".mobile-menu-head").classList.remove(
                    "active"
                );
            }

            window.onresize = function () {
                if (this.innerWidth > 991) {
                    if (menu.classList.contains("active")) {
                        toggleMenu();
                    }
                }
            };
        }
    });

    return (
        <>
            <header className="s0 header">
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">
                            <div className="logo">
                                <Link href="/">
                                    <a>JChirindza</a>
                                </Link>
                            </div>
                        </div>
                        <div className="header-item item-center">
                            <div className="menu-overlay"></div>
                            <nav className="menu">
                                <div className="mobile-menu-logo">
                                    <div className="header-item item-left">
                                        <div className="logo">
                                            <Link href="/">
                                                <a>JChirindza</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">
                                        &times;
                                    </div>
                                </div>
                                <ul className="menu-main">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li /*className="menu-item-has-children"*/>
                                        <Link href="/#projects">
                                            <a>
                                                Projects{" "}
                                                {/* <i className="fa fa-angle-down"></i> */}
                                            </a>
                                        </Link>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            {/* <NavProjectList
                                                    allProjects={
                                                        props.allProjects
                                                    }
                                                /> */}
                                        </div>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <a>
                                            Pages{" "}
                                            <i className="fas fa-angle-down"></i>
                                        </a>
                                        <div className="sub-menu single-column-menu">
                                            <ul>
                                                <li className="sub-menu-item">
                                                    <Link href="/writings">
                                                        <a>Writtings</a>
                                                    </Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link href="/timeline">
                                                        <a>Timeline</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/#contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>

                                    <li className="theme-switch">
                                        <span className="theme-item-mobile">
                                            <ThemeSwitcher></ThemeSwitcher>
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-item item-right">
                            <div className="mobile-menu-trigger">
                                <span></span>
                            </div>

                            <div className="theme-item">
                                <ThemeSwitcher></ThemeSwitcher>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}

            <style jsx>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

                    body {
                        line-height: 1.5;
                        font-family: "Poppins", sans-serif;
                        font-weight: 400;
                        overflow-x: hidden;
                    }
                    * {
                        margin: 0;
                        box-sizing: border-box;
                    }
                    :before,
                    :after {
                        box-sizing: border-box;
                    }
                    .container {
                        max-width: 1200px;
                        margin: auto;
                    }
                    .row {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .v-center {
                        align-items: center;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                        cursor: pointer;
                    }
                    /* header */
                    .header {
                        display: block;
                        width: 100%;
                        height: 60px;
                        position: fixed;
                        z-index: 99;
                    }
                    .header .item-left {
                        flex: 0 0 17%;
                    }

                    .header .logo:hover {
                        color: 1px solid var(--borderColor);
                    }
                    .header .logo a {
                        font-size: 30px;
                        color: var(--mainText);
                        font-weight: 700;
                        text-decoration: none;
                        font-family: "Matura MT Script Capitals", cursive;
                        line-height: 42px;
                    }
                    .header .item-center {
                        flex: 0 0 66%;
                    }
                    .header .item-right {
                        flex: 0 0 17%;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .header .item-right a {
                        text-decoration: none;
                        font-size: 16px;
                        color: var(--mainText);
                        display: inline-block;
                        margin-left: 10px;
                        transition: color 0.3s ease;
                    }
                    .header .menu > ul > li {
                        display: inline-block;
                        line-height: 50px;
                        margin-left: 25px;
                    }
                    .header .menu > ul > li > a {
                        font-size: 15px;
                        font-weight: 500;
                        color: var(--mainText);
                        position: relative;
                        text-transform: capitalize;
                        transition: color 0.3s ease;
                    }
                    .header .menu > ul > li .sub-menu {
                        position: absolute;
                        z-index: 500;
                        background-color: var(--secondaryColor);
                        box-shadow: -2px 2px 40px -10px rgb(0 0 0 / 45%);
                        padding: 20px 30px;
                        transition: all 0.5s ease;
                        margin-top: 25px;
                        opacity: 0;
                        visibility: hidden;
                    }
                    @media (min-width: 992px) {
                        .header {
                            padding: 5px 15px;
                        }
                        .header
                            .menu
                            > ul
                            > li.menu-item-has-children:hover
                            .sub-menu {
                            margin-top: 0;
                            visibility: visible;
                            opacity: 1;
                        }

                        .header .menu .menu-main {
                            display: flex;
                            justify-content: center;
                        }
                    }
                    .header .menu > ul > li .sub-menu > ul > li {
                        line-height: 1;
                    }
                    .header .menu > ul > li .sub-menu > ul > li > a {
                        display: inline-block;
                        padding: 10px 0;
                        font-size: 15px;
                        color: var(--mainText);
                        transition: color 0.3s ease;
                        text-decoration: none;
                        text-transform: capitalize;
                    }
                    .header .menu > ul > li .single-column-menu {
                        min-width: 280px;
                        max-width: 350px;
                        border: 1px solid var(--borderColor);
                        margin-top: 20px;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu
                        > .list-item
                        > ul
                        > li {
                        line-height: 1;
                        display: block;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu
                        > .list-item
                        > ul
                        > li
                        > a {
                        padding: 10px 0;
                        display: inline-block;
                        font-size: 15px;
                        color: var(--mainText);
                        transition: color 0.3s ease;
                    }
                    .header .menu > ul > li .sub-menu.mega-menu {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .header .menu > ul > li .sub-menu.mega-menu-column-4 {
                        max-width: 1100px;
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        padding: 20px 15px;
                        border: 1px solid var(--borderColor);
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu-column-4
                        > .list-item {
                        flex: 0 0 25%;
                        padding: 0 15px;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu-column-4
                        > .list-item
                        .title {
                        font-size: 14px;
                        color: var(--mainText);
                        font-weight: 400;
                        line-height: 1;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu-column-4
                        > .list-item.text-center
                        .title {
                        text-align: center;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu-column-4
                        > .list-item.text-center
                        .title:hover {
                        color: var(--buttonColor);
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu-column-4
                        > .list-item
                        img {
                        max-width: 100%;
                        width: 100%;
                        vertical-align: middle;
                        margin-top: 10px;
                    }
                    .header
                        .menu
                        > ul
                        > li
                        .sub-menu.mega-menu
                        > .list-item
                        > ul
                        > li
                        > a:hover,
                    .header .menu > ul > li .sub-menu > ul > li > a:hover,
                    .header .item-right a:hover,
                    .header .menu > ul > li:hover > a {
                        color: var(--buttonColor);
                    }
                    .mobile-menu-head,
                    .mobile-menu-trigger,
                    .mobile-menu-logo {
                        display: none;
                    }

                    /*responsive*/
                    @media (max-width: 991px) {
                        .header {
                            padding: 7px 20px;
                        }

                        .header .item-center {
                            order: 3;
                            flex: 0 0 100%;
                        }
                        .header .item-left,
                        .header .item-right {
                            flex: 0 0 auto;
                        }
                        .v-center {
                            justify-content: space-between;
                        }
                        .header .mobile-menu-trigger {
                            display: flex;
                            height: 30px;
                            width: 30px;
                            margin-left: 15px;
                            cursor: pointer;
                            align-items: center;
                            justify-content: center;
                        }
                        .header .mobile-menu-trigger span {
                            display: block;
                            height: 2px;
                            background-color: var(--mainText);
                            width: 24px;
                            position: relative;
                        }
                        .header .mobile-menu-trigger span:before,
                        .header .mobile-menu-trigger span:after {
                            content: "";
                            position: absolute;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: var(--secondaryText);
                        }
                        .header .mobile-menu-trigger span:before {
                            top: -6px;
                        }
                        .header .mobile-menu-trigger span:after {
                            top: 6px;
                        }
                        .header .item-right {
                            align-items: center;
                        }

                        .header .menu {
                            position: fixed;
                            width: 320px;
                            background-color: var(--secondaryColor);
                            left: 0;
                            top: 0;
                            height: 100%;
                            overflow: hidden;
                            transform: translate(-100%);
                            transition: all 0.5s ease;
                            z-index: 1099;
                        }
                        .header .menu.active {
                            transform: translate(0%);
                        }
                        .header .menu > ul > li {
                            line-height: 1;
                            margin: 0;
                            display: block;
                        }
                        .header .menu > ul > li > a {
                            line-height: 50px;
                            height: 50px;
                            padding: 0 50px 0 15px;
                            display: block;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                        }
                        .header .menu > ul > li > a i {
                            position: absolute;
                            height: 50px;
                            width: 50px;
                            top: 0;
                            right: 0;
                            text-align: center;
                            line-height: 50px;
                            transform: rotate(-90deg);
                        }
                        .header .menu .mobile-menu-head,
                        .mobile-menu-logo {
                            display: flex;
                            height: 60px;
                            padding: 0 5% 0 5%;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                            justify-content: space-between;
                            align-items: center;
                            position: relative;
                            z-index: 501;
                            position: sticky;
                            background-color: var(--secondaryColor);
                            border-bottom: 1px solid var(--borderColor);
                            top: 0;
                        }
                        .header .menu .mobile-menu-head .go-back {
                            height: 50px;
                            width: 50px;
                            border-right: 1px solid var(--borderColor);
                            cursor: pointer;
                            line-height: 50px;
                            text-align: center;
                            color: var(--mainText);
                            font-size: 16px;
                            display: none;
                        }
                        .header .menu .mobile-menu-head.active .go-back {
                            display: block;
                        }
                        .header .menu .mobile-menu-head .current-menu-title {
                            font-size: 15px;
                            font-weight: 500;
                            color: var(--mainText);
                        }
                        .header .menu .mobile-menu-head .mobile-menu-close {
                            height: 50px;
                            width: 50px;
                            border-left: 1px solid var(--borderColor);
                            cursor: pointer;
                            line-height: 50px;
                            text-align: center;
                            color: var(--mainText);
                            font-size: 25px;
                        }
                        .header .menu .menu-main {
                            height: 100%;
                            overflow-x: hidden;
                            overflow-y: auto;
                        }
                        .header .menu > ul > li .sub-menu.mega-menu,
                        .header .menu > ul > li .sub-menu {
                            visibility: visible;
                            opacity: 1;
                            position: absolute;
                            box-shadow: none;
                            margin: 0;
                            padding: 15px;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding-top: 130px;
                            max-width: none;
                            min-width: auto;
                            display: none;
                            transform: translateX(0%);
                            overflow-y: auto;
                        }
                        .header .menu > ul > li .sub-menu.active {
                            display: block;
                        }
                        @keyframes slideLeft {
                            0% {
                                opacity: 0;
                                transform: translateX(100%);
                            }
                            100% {
                                opacity: 1;
                                transform: translateX(0%);
                            }
                        }
                        @keyframes slideRight {
                            0% {
                                opacity: 1;
                                transform: translateX(0%);
                            }
                            100% {
                                opacity: 0;
                                transform: translateX(100%);
                            }
                        }
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu-column-4
                            > .list-item
                            img {
                            margin-top: 0;
                        }
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu-column-4
                            > .list-item.text-center
                            .title {
                            margin-bottom: 20px;
                        }
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu-column-4
                            > .list-item.text-center:last-child
                            .title {
                            margin-bottom: 0px;
                        }
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu-column-4
                            > .list-item {
                            flex: 0 0 100%;
                            padding: 0px;
                        }
                        .header .menu > ul > li .sub-menu > ul > li > a,
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu
                            > .list-item
                            > ul
                            > li
                            > a {
                            display: block;
                        }
                        .header
                            .menu
                            > ul
                            > li
                            .sub-menu.mega-menu
                            > .list-item
                            > ul {
                            margin-bottom: 15px;
                        }
                        .menu-overlay {
                            position: fixed;
                            background-color: rgba(0, 0, 0, 0.5);
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 1098;
                            visibility: hidden;
                            opacity: 0;
                            transition: all 0.5s ease;
                        }
                        .menu-overlay.active {
                            visibility: visible;
                            opacity: 1;
                        }
                    }

                    /* Theme Switchers */
                    .theme-item-mobile {
                        display: none;
                    }

                    /*responsive*/
                    @media (max-width: 991px) {
                        .theme-item {
                            display: none;
                        }
                        .theme-item-mobile {
                            display: block;
                        }

                        .theme-item-mobile {
                            display: flex;
                            justify-content: center;
                            padding: 40px 0;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Nav;
