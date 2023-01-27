import styles from './CalendarBox.module.css';

import dateRangeIcon from '../../../assets/icons/date_range_icon.svg';

function CalendarBox(){
    return(
        <div className={styles.calendarBoxContainer}>
            <div className={styles.calendarBoxContent}>
                <figure>
                    <img src={dateRangeIcon} alt="Ícone de intervalo de datas" />
                </figure>
                <h2>Filtre suas informações</h2>
                <div className={styles.inputDateContainer}>
                    <form>
                        <input type="date" name="inputDateStart" id="inputDateStart" />
                        <input type="date" name="inputDateEnd" id="inputDateEnd" />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CalendarBox;