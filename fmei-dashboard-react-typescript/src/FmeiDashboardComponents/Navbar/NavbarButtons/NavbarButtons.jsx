import styles from './NavbarButtons.module.css';

import homeIcon from '../../../assets/icons/home_icon.svg';
import calendarIcon from '../../../assets/icons/calendar_icon.svg';
import addIcon from '../../../assets/icons/add_icon.svg';

export default function NavbarButtons({selectedModalBox, idModal}){
    const navbarButtonsData = [
        {
            srcIcon: homeIcon,
            altIcon: 'Ícone de início',
            id: 'Home'
        },
        {
            srcIcon: addIcon,
            altIcon: 'Ícone de adição da tabela de dados',
            id: 'InputFile'
        },
        {
            srcIcon: calendarIcon,
            altIcon: 'Ícone de calendário',
            id: 'Calendar'
        }
    ];

    return(
        <ul className={styles.navbarButtons}>
            {navbarButtonsData.map((data) => {
                return(
                    <li 
                        onClick={selectedModalBox} 
                        key={data.id} 
                        id={data.id}
                        className={(data.id === idModal) ? styles.active : styles.notActive}
                    >
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