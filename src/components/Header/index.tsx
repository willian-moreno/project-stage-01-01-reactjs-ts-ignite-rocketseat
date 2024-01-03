import style from './style.module.css';
import igniteLogo from '../../assets/ignite-simbol.svg';

export function Header() {
	return (
		<header className={style.header}>
			<img
				className={style.header__logo}
				src={igniteLogo}
				alt="Logo ignite"
			/>
			<strong className={style.header__title}>Ignite Feed</strong>
		</header>
	);
}
