import styles from './CalendarBox.module.css';

import dateRangeIcon from '../../../assets/icons/date_range_icon.svg';

import doneIcon from '../../../assets/icons/done_outline_icon.svg';
import backIcon from '../../../assets/icons/arrow_back_icon.svg';

function CalendarBox(){
    return(
        <div className={styles.calendarBoxContainer}>
            <div className={styles.calendarBoxContent}>
                <figure>
                    <img src={dateRangeIcon} alt="Ícone de intervalo de datas" />
                </figure>
                <h2>Filtre suas informações</h2>
                <div className={styles.inputDateContainer}>
                    <form action='#' method='post'>
                        <input type="date" name="inputDateStart" id="inputDateStart" />
                        <input type="date" name="inputDateEnd" id="inputDateEnd" />
                        <button type="submit">
                            <img src={doneIcon} alt="Ícone de finalizar ou terminar uma ação" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CalendarBox;