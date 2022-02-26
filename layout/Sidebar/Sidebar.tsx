import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '../../components';
import { useRouter } from "next/router";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	const router = useRouter();

	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo onClick={() => router.push("/")} className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};