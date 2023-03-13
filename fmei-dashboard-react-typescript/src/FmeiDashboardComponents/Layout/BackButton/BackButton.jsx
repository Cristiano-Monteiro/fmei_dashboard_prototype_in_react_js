import styles from './BackButton.module.css';

import backIcon from '../../../assets/icons/arrow_back_icon.svg';

const BackButton = ({ backToHome }) => {
    return(
        <figure 
            className={styles.backIcon}
            onClick={backToHome}
        >
            <img src={backIcon} alt="Ícone de voltar ou retornar na página" />
        </figure>
    );
};

export default BackButton;