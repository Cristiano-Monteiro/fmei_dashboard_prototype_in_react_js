import styles from './MainContent.module.css';

import FinancialInformation from '../FinancialInformation/FinancialInformation';
import MainCharts from '../MainCharts/MainCharts';

function MainContent(){
    return(
        <div className={styles.mainContent}>
            <FinancialInformation/>
            <MainCharts/>
        </div>
    );
};

export default MainContent;