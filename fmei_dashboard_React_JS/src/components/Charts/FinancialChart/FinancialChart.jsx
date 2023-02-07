import styles from './FinancialChart.module.css';

function FinancialChart({nameChart, srcImg, altImg}){
    return(
        <div className={styles.financialInformation}>
            <figure>
                <img src={srcImg} alt={altImg} />
            </figure>
            <div className={styles.financialInformationText}>
                <h1>{nameChart}</h1>
                <span className={styles.money}>
                    R$<span>00.000</span>
                </span>
            </div>
        </div>
    );
};

export default FinancialChart;