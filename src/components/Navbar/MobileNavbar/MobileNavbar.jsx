import styles from './MobileNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

function MobileNavbar({showInputFileBox, showCalendarBox, backToHome}){
    return(
        <nav className={styles.mobileNavbar}>
            <NavbarButtons 
                showInputFileBox={showInputFileBox}
                showCalendarBox={showCalendarBox}
                backToHome={backToHome}
            />
        </nav>
    )
};

export default MobileNavbar;