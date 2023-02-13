import styles from './OpeningScreen.module.css';

import logoFmei from '../../../assets/imgs/logo-transp-fmei.png';

import upArrowIcon from '../../../assets/icons/up_arrow_icon.svg';

function OpeningScreen({ showMainContent }){
    const closeOpeningScreen = () => {
        document.getElementById('openingScreen').style.display = 'none';
        showMainContent();
    };

    return(
        <div className={styles.openingScreenContainer} id='openingScreen'>
            <div className={styles.openingScreenContent}>
                <figure>
                    <img src={logoFmei} alt="Logo do Facilita MEI" />
                </figure>
                <h1>FacilitaMEI</h1>
            </div>
            <button 
                className={styles.startButton}
                id='startBttn'
                onClick={closeOpeningScreen}
            >
                <img
                    src={upArrowIcon} 
                    alt="Ícone de seta para cima"
                />
            </button>
        </div>
    );
};

export default OpeningScreen;