/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";


const Wealth: FC = (): ReactElement => {


  const [firOpt, _setFirOpt] = useState<EChartOption>({
    xAxis: {
      type: 'category',
      data: ['2016年', '2017年', '2018年', '2019年', '2020年']
    },

    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value: string) {
          return `${value}万辆`
        }
      }

    },
    series: [
      {
        data: [2693.61, 2780.93, 2614.16, 2572.07, 2593],
        type: 'line',
        smooth: true
      }
    ]
  })

  const [secOpt, _setSecOpt] = useState<EChartOption>({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value: string) {
          return `${value}万辆`
        }
      }

    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1434, 1634, 1233, 1234, 1423],
        type: 'line',
        areaStyle: {}
      }
    ]
  });

  const [thrOpt, _setThrOpt] = useState<EChartOption>({
    title: {
      text: '一汽汽车集团汽车产量'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['一汽奥迪', '一汽大众', '一汽丰田']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034]
      },
      {
        name: '2012',
        type: 'bar',
        data: [19325, 23438, 31000]
      },
    ]
  });

  const [fourOpt, _setFourOpt] = useState<EChartOption>({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 748, name: '基础型' },
          { value: 735, name: '交叉型' },
          { value: 580, name: 'SUV' },
          { value: 484, name: 'MPV' },
        ]
      }
    ]
  })



  return <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Charts
        options={firOpt}
        style={{
          height: "500px",
          width: "45%",
        }}
      />
      <Charts
        options={secOpt}
        style={{
          height: "500px",
          width: "45%",
        }}
      />
      <Charts
        options={thrOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={thrOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={thrOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={thrOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fourOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fourOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fourOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fourOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
    </div>

  </>
}


export default Wealth;