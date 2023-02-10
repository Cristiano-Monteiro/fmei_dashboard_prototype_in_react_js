import styles from './MainNavbar.module.css';

import NavbarButtons from '../NavbarButtons/NavbarButtons';

import logoFmei from '../../../assets/imgs/logo-transp-fmei.png';

export default function MainNavbar({selectedModalBox}){
    return(
        <nav className={styles.mainNavbar}>
            <figure>
                <img src={logoFmei} alt="Logo do FacilitaMEI" />
            </figure> 
            <div className={styles.navbarButtons}>
                <NavbarButtons
                    selectedModalBox={selectedModalBox}
                />
            </div>
        </nav>
    );
};