import styles from './CalendarBox.module.css';

import BackButton from '../../Layout/BackButton/BackButton';
import SubmitButton from '../../Layout/SubmitButton/SubmitButton';

import dateRangeIcon from '../../../assets/icons/date_range_icon.svg';

function CalendarBox({ backToHome }){
    return(
        <div className={styles.calendarBoxContainer}>
            <div className={styles.calendarBoxContent}>
                <figure className={styles.dateRangeIconContainer}>
                    <img src={dateRangeIcon} alt="Ícone de intervalo de datas" />
                </figure>
                <BackButton backToHome={backToHome}/>
                <h2>Filtre suas informações</h2>
                <div className={styles.inputDateContainer}>
                    <form action='#' method='post'>
                        <input 
                            type="date" 
                            name="inputDateStart" 
                            id="inputDateStart"
                            required
                        />
                        <input 
                            type="date" 
                            name="inputDateEnd" 
                            id="inputDateEnd"
                            required
                        />
                        <SubmitButton/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CalendarBox;