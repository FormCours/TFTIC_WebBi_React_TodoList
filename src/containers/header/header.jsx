import style from './header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <span>Exercice de la Todo list</span>
            <span className={style.target}>Web BI</span>
        </header>
    );
}

export default Header;