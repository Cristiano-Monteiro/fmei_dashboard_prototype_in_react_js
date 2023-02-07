import styles from './MobileNavbar.module.css';

import logoFmei from '../../../assets/imgs/logo-transp-fmei.png';

function MobileNavbar(){
    return(
        <nav className={styles.mobileNavbar}>
            <figure>
                <img src={logoFmei} alt="Logo do FacilitaMEI" />
            </figure>
        </nav>
    )
};

export default MobileNavbar;