import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
            <p className={headerStyles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.</p>
        </div>
    )
}

export default Header