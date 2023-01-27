import styles from './NavbarButtons.module.css';

import homeIcon from '../../assets/icons/home_icon.svg';
import calendarIcon from '../../assets/icons/calendar_icon.svg';
import addIcon from '../../assets/icons/add_icon.svg';

function NavbarButtons({showInputFileBox, showCalendarBox, backToHome}){
    return(
        <ul className={styles.navbarButtons}>
            <li>
                <img 
                    src={homeIcon} 
                    alt="Ícone de início"
                    onClick={backToHome} 
                />
            </li>
            <li>
                <img 
                    src={addIcon} 
                    alt="Ícone de adição da tabela de dados" 
                    onClick={showInputFileBox}
                />
            </li>
            <li>
                <img 
                    src={calendarIcon} 
                    alt="Ícone de calendário"
                    onClick={showCalendarBox}
                />
            </li>
        </ul>
    );
};

export default NavbarButtons;