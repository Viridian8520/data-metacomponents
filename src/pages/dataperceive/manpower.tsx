/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";
import { Space } from "antd";

const ManPower: FC = (): ReactElement =>{
    const [thrOpt , setThrOpt] = useState<EChartOption> ( {
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

      const [fourOpt,setFourOpt] = useState<EChartOption>({
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
return (
    <>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
  
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
)
}

export default ManPower;