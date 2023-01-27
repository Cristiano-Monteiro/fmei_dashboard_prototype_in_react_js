import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import styles from './MainCharts.module.css';

import barChartIcon from '../../assets/icons/bar_chart.svg';

import chartList from '../ChartExamples/ChartExamples';

function MainCharts(){
    console.log(chartList);

    return(
        <>
            <section className={styles.chartContainer}>
                <div className={styles.text}>
                    <img src={barChartIcon} alt="Ícone para a seção de gráficos" />
                    <h1>Gráficos</h1>
                </div>
                <div className={styles.charts}>
                    {chartList.map((options) => {
                        return (
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                                containerProps={{className: styles.chart}}
                                key={options.key}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default MainCharts;