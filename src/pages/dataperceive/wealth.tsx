/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";


const Wealth: FC = (): ReactElement => {


  const [fourOpt, _setFourOpt] = useState<EChartOption>({
    title: {
      text: '北京汽车集团'
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
      data: ['研发支出', '人员工资支出', '运输支出', '仓储支出', '物料支出', '设备支出', '生产支出', '总收入']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 18203, 23489, 29034, 18203, 93489,]
      }
    ]
  });

  const [thrOpt, _setThrOpt] = useState<EChartOption>({
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
          { value: 748, name: '固定资产' },
          { value: 735, name: '风投融资' },
          { value: 580, name: '流动资产' },
          { value: 484, name: '利润' },
        ]
      }
    ]
  })



  return <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

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