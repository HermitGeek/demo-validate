/**
 * 图表的方法配置
 */

export default {
    pie: {
        $text: data => data.title,
        $legend: data => data.legend,
        $series: data => data.series
    },
    radar: {
        $text: data => data.title,
        $indicator: data => data.indicator,
        $series: data => data.series
    },
    bar: {
        $text: data => data.title,
        $xAxis: data => data.xAxis,
        $series: data => data.series
    },
    funnel: {
        $text: data => data.title,
        $legend: data => data.legend,
        $series: data => data.series
    }
};
