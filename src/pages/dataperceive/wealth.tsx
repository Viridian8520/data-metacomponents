/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";


const Wealth: FC = (): ReactElement => {


    const [firOpt,setFirOpt] = useState<EChartOption> ( {
        xAxis: {
          type: 'category',
          data: ['2016年', '2017年', '2018年', '2019年', '2020年']
        },
      
        yAxis: {
          type: 'value',
          axisLabel:{
            formatter:function(value:string){
            return`${value}万辆`
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

    return <>
      <Charts
          options={firOpt}
          style={{
            height: "50%",
            width: "50%",
          }}
        />

    </>
}
    

export default Wealth;