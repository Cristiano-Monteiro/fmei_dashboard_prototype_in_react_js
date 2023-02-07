import styles from './MainContent.module.css';

import FinancialInformation from '../../Charts/FinancialInformation/FinancialInformation';
import MainCharts from '../../Charts/MainCharts/MainCharts';

function MainContent(){
    return(
        <div className={styles.mainContent}>
            <FinancialInformation/>
            <MainCharts/>
        </div>
    );
};

export default MainContent;