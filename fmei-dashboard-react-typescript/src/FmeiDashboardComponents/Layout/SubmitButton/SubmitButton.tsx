import styles from './SubmitButton.module.css';

import doneIcon from '../../FmeiDashboardAssets/icons/done_outline_icon.svg';

interface SubmitButtonProps{
    handleFileSubmit: () => void,
};

const SubmitButton = ({ handleFileSubmit }: SubmitButtonProps) => {
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