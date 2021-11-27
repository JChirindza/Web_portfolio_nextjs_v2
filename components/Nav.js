import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <header className={`${navStyles.s0} ${navStyles.header}`}>
            <div className={navStyles.main_container}>
                <div className={`${navStyles.row} ${navStyles.v_center} ${navStyles.header_wrapper}`}>
                    <div className={`${navStyles.header_item} ${navStyles.item_left}`}>
                        <div className={navStyles.logo}>
                            <Link href='/'>JChirindza</Link>
                        </div>
                    </div>

                    <div className={`${navStyles.header_item} ${navStyles.item_center}`}>
                        <div className={navStyles.menu_overlay}></div>

                        <nav className={navStyles.menu}>
                            <div className={navStyles.mobile_menu_logo}>
                                <div className={`${navStyles.header_item} ${navStyles.item_left}`}>
                                    <div className={navStyles.logo}>
                                        <Link href='/'>JChirindza</Link>
                                    </div>
                                </div>
                            </div>

                            <div className={navStyles.mobile_menu_head}>
                                <div className={navStyles.go_back}></div>
                                <div className={navStyles.current_menu_title}></div>
                                <div className={navStyles.mobile_menu_close}>&times;</div>
                            </div>

                            <ul className={navStyles.menu_main}>
                                <li>
                                    <Link href='/#' className={navStyles.active}>Home</Link>
                                </li>
                                <li>
                                    <Link href='/#about' className={navStyles.active}>About</Link>
                                </li>
                                <li>
                                    <Link href='/#projects' className={navStyles.active}>Projects</Link>
                                </li>
                                <li>
                                    <Link href='/#contact'>Contact</Link>
                                </li>
                                <li className={navStyles.menu_item_has_children}>
                                    <Link href=''>Settings</Link>
                                    {/* <a href="javascript:void(0);">Settings</a> */}
                                    <div className={`${navStyles.sub_menu} ${navStyles.single_column_menu}`}>
                                        <label> Settings will be saved for your next visit</label>
                                        
                                        <ul>
                                            <p id="settings-note"> Change theme</p>
                                            <div id="theme-options-wrapper">
                                                {/* <div data-mode="light" id="light-mode" className={navStyles.theme_dot}></div>
                                                <div data-mode="blue" id="blue-mode" className={navStyles.theme_dot}></div>
                                                <div data-mode="green" id="green-mode" className={navStyles.theme_dot}></div>
                                                <div data-mode="purple" id="purple-mode" className={navStyles.theme_dot}></div> */}
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={`${navStyles.header_item} ${navStyles.item_right}`}>
                        {/* mobile menu trigger */}
                        <div className={navStyles.mobile_menu_trigger}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
    )
}

export default Nav