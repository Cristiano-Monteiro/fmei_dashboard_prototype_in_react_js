import styles from './SubmitButton.module.css';

import doneIcon from '../../../assets/icons/done_outline_icon.svg';

const SubmitButton = ({ handleFileSubmit }) => {
    return(
        <button
            className={styles.SubmitButton}
            type="button"
            onClick={handleFileSubmit}
        >
            <img src={doneIcon} alt="Ícone de finalizar ou terminar uma ação" />
        </button>
    );
};

export default SubmitButton;