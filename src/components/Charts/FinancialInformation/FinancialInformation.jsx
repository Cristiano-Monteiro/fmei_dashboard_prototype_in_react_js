import styles from './FinancialInformation.module.css';

import statsIcon from '../../assets/icons/query_stats.svg';

import attachMoneyIcon from '../../assets/icons/FinancialInformationIcons/attach_money_icon.svg';
import moneyOffIcon from '../../assets/icons/FinancialInformationIcons/money_off_icon.svg';
import balanceIcon from '../../assets/icons/FinancialInformationIcons/balance_icon.svg';

import FinancialChart from '../FinancialChart/FinancialChart';

function FinancialInformation(){
    const FinancialChartData = [
        {
            name: 'Receita',
            icon: attachMoneyIcon,
            alt: 'Ícone de Receita Financeira',
            key: 1
        },
        {
            name: 'Despesa',
            icon: moneyOffIcon,
            alt: 'Ícone de Despesa Financeira',
            key: 2
        },
        {
            name: 'Saldo',
            icon: balanceIcon,
            alt: 'Ícone de Saldo Financeiro',
            key: 3
        }
    ];

    return(
        <>
            <section className={styles.financialInformationContainer}>
                <div className={styles.text}>
                    <img src={statsIcon} alt="Ícone da seção de informações" />
                    <h1>Informações</h1>
                </div>
                <div className={styles.financialInformationWrapper}>
                    {FinancialChartData.map((data) => {
                        return(
                            <FinancialChart
                                nameChart={data.name}
                                srcImg={data.icon}
                                altImg={data.alt}
                                key={data.key}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default FinancialInformation;