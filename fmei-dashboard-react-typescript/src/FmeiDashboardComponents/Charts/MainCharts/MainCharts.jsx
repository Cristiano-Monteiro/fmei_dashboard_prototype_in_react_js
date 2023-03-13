import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);

import styles from './MainCharts.module.css';

import barChartIcon from '../../../assets/icons/bar_chart.svg';

import chartList from '../ChartExamples/ChartExamples';

function MainCharts(){
    return(
        <>
            <section className={styles.chartContainer}>
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