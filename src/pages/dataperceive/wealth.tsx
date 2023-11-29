/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement, useEffect } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";


const Wealth: FC = (): ReactElement => {


  const [thrOpt, setThrOpt] = useState<EChartOption[] | []>([]);
  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/wealth/graph/pay`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: {
        groupName: any;
        item: any;
        data: any; series: any[];
      }) => {

        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })


        let template = {
          title: {
            text: item.groupName
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
            data: item.item
          },
          series: [
            {
              name: item.data[0].year,
              type: 'bar',
              data: item.data[0].data
            }
          ]
        }
        return template;
      })

      setThrOpt(newData);


    })
  }, [])

  const [fourOpt, setFourOpt] = useState<EChartOption[]>([])

  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/production/graph/category`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: { series: any[]; }) => {

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
  }, [])



  return <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

      {
        thrOpt.map((item) => {
          return (
            <>
              <Charts
                options={item}
                style={{
                  height: "400px",
                  width: "45%",
                }}
              />
            </>)
        }
        )
      }
      {
        fourOpt.map((item) => {
          return (
            <>
              <Charts
                options={item}
                style={{
                  height: "400px",
                  width: "45%",
                }}
              />
            </>)
        }
        )
      }
    </div>

  </>
}


export default Wealth;