import styles from './MainNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

import logoFmei from '../../assets/imgs/logo-transp-fmei.png';

function MainNavbar({showInputFileBox, showCalendarBox, backToHome}){
    return(
        <nav className={styles.mainNavbar}>
            <figure>
                <img src={logoFmei} alt="Logo do FacilitaMEI" />
            </figure> 
            <div className={styles.navbarButtons}>
                <NavbarButtons
                    showInputFileBox={showInputFileBox}
                    showCalendarBox={showCalendarBox}
                    backToHome={backToHome}
                />
            </div>
        </nav>
    );
};

export default MainNavbar;