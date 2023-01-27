import styles from './OpeningScreen.module.css';

import logoFmei from '../../assets/imgs/logo-transp-fmei.png';

function OpeningScreen(){
    function closeOpeningScreen(e){
        e.target.parentElement.style.transform = 'translateY(-100vh)';
    };

    return(
        <div className={styles.openingScreenContainer}>
            <div className={styles.openingScreenContent}>
                <figure>
                    <img src={logoFmei} alt="Logo do Facilita MEI" />
                </figure>
                <h1>FacilitaMEI</h1>
            </div>
            <button onClick={closeOpeningScreen}>Iniciar</button>
        </div>
    );
};

export default OpeningScreen;