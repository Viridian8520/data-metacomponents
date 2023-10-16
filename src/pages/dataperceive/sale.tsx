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

  const [fifOpt, _setFifOpt] = useState<EChartOption>({
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
    ]
  })

  const [sixOpt, _setSixOpt] = useState<EChartOption>({
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
          { value: 748, name: '北京现代汽车有限公司' },
          { value: 735, name: '北京汽车制造厂有限公司' },
          { value: 580, name: '北京北内有限公司' },
          { value: 484, name: '北京北内有限公司' },
          { value: 484, name: '北京奔驰汽车有限公司' },
        ]
      }
    ]
  })

  const [sevenOpt, _setSeventhOpt] = useState<EChartOption>({
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
      data: ['沙特阿拉伯', '埃及', '智利', '俄罗斯', '澳大利亚', '美国', '马来西亚', '越南', '墨西哥', '菲律宾']
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [18203, 23489, 29034, 39034, 49034, 59034, 69034, 79034, 89034, 99034]
      },
    ]
  })

  const [eightOpt, _setEightOpt] = useState<EChartOption>({
    title: {
      text: '广州汽车集团',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '广汽埃安' },
          { value: 735, name: '比亚迪' },

        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
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
      <Charts
        options={fifOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fifOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fifOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={fifOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={sixOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={sixOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={sixOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={sixOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={sevenOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
      <Charts
        options={eightOpt}
        style={{
          height: "400px",
          width: "45%",
        }}
      />
    </div>

  </>
}


export default Wealth;