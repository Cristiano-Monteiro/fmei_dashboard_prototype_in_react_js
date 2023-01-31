import styles from './OpeningScreen.module.css';

import logoFmei from '../../../assets/imgs/logo-transp-fmei.png';

import doneIcon from '../../../assets/icons/done_outline_icon.svg';

function OpeningScreen(){
    function closeOpeningScreen(e){
        e.target.parentElement.style.transform = 'translateY(-100vh)';
    };

    setTimeout(() => {
        document.getElementById('startBttn').style.opacity = '1';
    }, 1700);

    return(
        <div className={styles.openingScreenContainer}>
            <div className={styles.openingScreenContent}>
                <figure>
                    <img src={logoFmei} alt="Logo do Facilita MEI" />
                </figure>
                <h1>FacilitaMEI</h1>
            </div>
            <img
                src={doneIcon} 
                alt="Ícone de início do aplicativo"
                className={styles.startButton}
                onClick={closeOpeningScreen}
                id='startBttn'
            />
        </div>
    );
};

export default OpeningScreen;