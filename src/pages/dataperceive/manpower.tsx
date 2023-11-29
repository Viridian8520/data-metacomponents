/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement, useEffect ,} from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";
import { Space } from "antd";

const ManPower: FC = (): ReactElement =>{
  useEffect(()=>{
    fetch(`http://10.30.0.79:8080/rest/data/element/production/graph/production`).then((res)=>{

    return res.json()

}).then(res=>{
  let data=res.data;
  let newData = data.map((item: { series: any[]; groupName: any; companyName: any; })=>{

    item.series.forEach(item=>{
        return Object.assign(item,{
            type:"bar"
        })
    })


    let template = {
        // title: {
        //   text: '一汽汽车集团汽车产量'
        // },
        title:{text:item.groupName}, //根据接口返回的
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
        //   data: ['一汽奥迪', '一汽大众', '一汽丰田']
        data:item.companyName  //根据接口返回的
        },
        series: 
        item.series
        // [
        //   {
        //     // name: '乘用车',
        //     type: 'bar',
        //     // data: [12313, 23489, 29034]
        //   },
        //   {
        //     // name: '商用车',           
        //     type: 'bar',
        //     // data: [19325, 23428, 31000]
        //   },
        // ]
      }
      return template;
})

setThrOpt(newData);

  
})
  },[])


  const [thrOpt , setThrOpt] = useState<EChartOption[]> ( []);

  const [fourOpt,setFourOpt] = useState<EChartOption[]>([])

      useEffect(()=>{
        fetch(`http://10.30.6.179:8080/rest/data/element/production/graph/category`).then((res)=>{

        return res.json()
    
    }).then(res=>{
      let data=res.data;
      let newData = data.map((item: { series: any[];})=>{
  
        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })
    
    
        let template = {
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
              data: item.series
            }
          ]
        }
          return template;
    })
  
    setFourOpt(newData);
  
      
    })
      },[])
return (
    <>
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
  
     {
        thrOpt.map((item)=>{
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
        fourOpt.map((item)=>{
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

export default ManPower;