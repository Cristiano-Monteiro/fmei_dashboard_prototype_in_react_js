import styles from './NavbarButtons.module.css';

import homeIcon from '../../../assets/icons/home_icon.svg';
import calendarIcon from '../../../assets/icons/calendar_icon.svg';
import addIcon from '../../../assets/icons/add_icon.svg';

function NavbarButtons({showInputFileBox, showCalendarBox, backToHome}){
    const navbarButtonsData = [
        {
            onClickEvent: backToHome,
            srcIcon: homeIcon,
            altIcon: 'Ícone de início',
            key: 1
        },
        {
            onClickEvent: showInputFileBox,
            srcIcon: addIcon,
            altIcon: 'Ícone de adição da tabela de dados',
            key: 2
        },
        {
            onClickEvent: showCalendarBox,
            srcIcon: calendarIcon,
            altIcon: 'Ícone de calendário',
            key: 3
        }
    ];

    return(
        <ul className={styles.navbarButtons}>
            {navbarButtonsData.map((data) => {
                return(
                    <li onClick={data.onClickEvent} key={data.key}>
                        <img 
                            src={data.srcIcon} 
                            alt={data.altIcon}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default NavbarButtons;