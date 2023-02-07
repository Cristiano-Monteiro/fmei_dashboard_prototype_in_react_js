import styles from './SubmitButton.module.css';

import doneIcon from '../../../assets/icons/done_outline_icon.svg';

const SubmitButton = () => {
    return(
        <button
            className={styles.SubmitButton}
            type="submit"
        >
            <img src={doneIcon} alt="Ícone de finalizar ou terminar uma ação" />
        </button>
    );
};

export default SubmitButton;