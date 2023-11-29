/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement, useEffect } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";
import { Space } from "antd";

const Logistics: FC = (): ReactElement => {
    const [firOpt,setFirOpt] = useState<EChartOption[]> ([])

      useEffect(()=>{
        fetch(`http://10.30.6.179:8080/rest/data/element/convey/graph/convey`).then((res)=>{

        return res.json()
    
    }).then(res=>{
      let data=res.data;
      let newData = data.map((item: {
        item: any;
        times: any;
        cost: any; series: any[];
})=>{
  
        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })
    
    
        let template = {
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
              data: item.item,
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
              max: 200,
              interval: 20,
              // yAxisIndex: 1,
            }
          ],
          series: [
            {
              name: '类型(万辆)',
              type: 'bar',
              data: item.times,
            },
            {
              name: '花费',
              type: 'line',
                    yAxisIndex: 1,
              data: item.cost,
        
            },
          ]
        }
          return template;
    })
  
    setFirOpt(newData);
  
      
    })
      },[])

      const [secOpt,setSecOpt] = useState<EChartOption[]> ( [])

      useEffect(()=>{
        fetch(`http://10.30.6.179:8080/rest/data/element/convey/graph/goods/`).then((res)=>{

        return res.json()
    
    }).then(res=>{
      let data=res.data;
      let newData = data.map((item: {
        transport: any;
        inventory: any;
        item: any;
        times: any;
        cost: any; series: any[];
})=>{
  
        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })
    
    
        let template = {
          xAxis: {
            
          },
          yAxis: {data: item.item},
          series: [
            {
              data: item.transport,
              type: 'bar',
              stack: 'x'
            },
            {
              data: item.inventory,
              type: 'bar',
              stack: 'x'
            }
          ]
        }
          return template;
    })
  
    setSecOpt(newData);
  
      
    })
      },[])

return (
    <>
     <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
     {
        firOpt.map((item)=>{
          return(
          <>
          <Charts
          options={item}
          style={{
            height: "400px",
            width: "45%",
          }}
        />
        </>)}
        )
        }
        
        {
        secOpt.map((item)=>{
          return(
          <>
          <Charts
          options={item}
          style={{
            height: "400px",
            width: "45%",
          }}
        />
        </>)}
        )
        }

</div>
  </>
)
}

export default Logistics;