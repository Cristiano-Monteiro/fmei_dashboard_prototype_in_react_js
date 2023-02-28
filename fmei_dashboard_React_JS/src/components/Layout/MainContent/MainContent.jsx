import styles from './MainContent.module.css';

import FinancialInformation from '../../Charts/FinancialInformation/FinancialInformation';
import MainCharts from '../../Charts/MainCharts/MainCharts';

import ModalBox from '../../ModalBoxes/ModalBox/ModalBox';

function MainContent({ idModal, backToHome }){
    return(
        <div className={styles.mainContent}>
            <FinancialInformation/>
            <MainCharts/>
            <ModalBox 
                idModal={idModal}
                backToHome={backToHome}
            />
        </div>
    );
};

export default MainContent;