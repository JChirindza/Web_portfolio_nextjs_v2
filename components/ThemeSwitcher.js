import { useEffect } from "react";
import { useTheme } from "next-themes";

const Switcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <div className="theme-switcher">
                {theme != "light" ? (
                    <button
                        onClick={() => setTheme("light")}
                        title="Light mode"
                    >
                        <i className="fas fa-sun fa-2x"></i>
                    </button>
                ) : (
                    <button onClick={() => setTheme("dark")} title="Dark mode">
                        <i className="fas fa-moon fa-2x"></i>
                    </button>
                )}
            </div>

            <style jsx>
                {`
                    [data-theme="dark"] [data-hide-on-theme="dark"],
                    [data-theme="light"] [data-hide-on-theme="light"] {
                        display: none;
                    }

                    .theme-switcher button {
                        background: transparent;
                        border: 0;
                        cursor: pointer;
                    }

                    .theme-switcher button:hover {
                        color: var(--buttonColor);
                    }
                `}
            </style>
        </>
    );
};

export default Switcher;
