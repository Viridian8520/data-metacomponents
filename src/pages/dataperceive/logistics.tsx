/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";
import { Space } from "antd";

const Logistics: FC = (): ReactElement => {
    const [firOpt,setFirOpt] = useState<EChartOption> (  {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['类型(万辆)', '花费']
        },
        xAxis: [
          {
            type: 'category',
            data: ['铁路', '公路', '航空', '水路', '管道'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '类型(万辆)'
          },
          {
            type: 'value',
            name: '花费',
              min: 50,
            max: 100,
            interval: 20,
            // yAxisIndex: 1,
          }
        ],
        series: [
          {
            name: '类型(万辆)',
            type: 'bar',
            data: [
             1500,1300,1100,900,700
            ],
          },
          {
            name: '花费',
            type: 'line',
                  yAxisIndex: 1,
            data: [
            50,60,70,80,100
            ],
      
          },
        ]
      })

      const [secOpt,setSecOpt] = useState<EChartOption> ( {
        xAxis: {
          
        },
        yAxis: {data: ['冷却系统', '燃油电喷及点火系统', '曲柄连杆机构', '进排气系统', '发动机']},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'bar',
            stack: 'x'
          }
        ]
      })

return (
    <>
     <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
    <Charts
    options={firOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
    <Charts
    options={firOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
    <Charts
    options={firOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
    <Charts
    options={firOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
     <Charts
    options={secOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
     <Charts
    options={secOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
   <Charts
    options={secOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
     <Charts
    options={secOpt}
    style={{
      height: "400px",
      width: "45%",
    }}
  />
</div>
  </>
)
}

export default Logistics;