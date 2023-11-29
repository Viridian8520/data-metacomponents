/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement, useEffect } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";


const Wealth: FC = (): ReactElement => {


  const [firOpt, setFirOpt] = useState<EChartOption[]>([])

  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/sale/graph/yearSale`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: {
        yearData: any;
        year: any;
        data: any;
      }) => {

        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })


        let template = {
          xAxis: {
            type: 'category',
            data: item.year
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
              data: item.yearData,
              type: 'line',
              smooth: true
            }
          ]
        }
        return template;
      })

      setFirOpt(newData);


    })
  }, [])

  const [secOpt, setSecOpt] = useState<EChartOption[]>([]);

  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/sale/graph/yearSale`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: {
        monthData: any;
        yearData: any;
        year: any;
        data: any;
      }) => {

        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })


        let template = {
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
              data: item.monthData["2019"],
              type: 'line',
              smooth: true
            }
          ]
        }
        return template;
      })

      setSecOpt(newData);


    })
  }, [])



  const [thrOpt, setThrOpt] = useState<EChartOption[]>([]);
  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/production/graph/production`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: { series: any[]; groupName: any; companyName: any; }) => {

        item.series.forEach(item => {
          return Object.assign(item, {
            type: "bar"
          })
        })


        let template = {
          // title: {
          //   text: '一汽汽车集团汽车产量'
          // },
          title: { text: item.groupName }, //根据接口返回的
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
            data: item.companyName  //根据接口返回的
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

  // const [fifOpt,setFifOpt] = useState<EChartOption[]>([{
  //   title: {
  //     text: '一汽汽车集团汽车产量'
  //   },
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'shadow'
  //     }
  //   },
  //   legend: {},
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: {
  //     type: 'value',
  //     boundaryGap: [0, 0.01]
  //   },
  //   yAxis: {
  //     type: 'category',
  //     data: ['一汽奥迪', '一汽大众', '一汽丰田']
  //   },
  //   series: [
  //     {
  //       name: '2011',
  //       type: 'bar',
  //       data: [18203, 23489, 29034]
  //     },
  //   ]
  // }])

  // const [sixOpt,setSixOpt] = useState<EChartOption[]>([{
  //   tooltip: {
  //     trigger: 'item'
  //   },
  //   legend: {
  //     top: '5%',
  //     left: 'center'
  //   },
  //   series: [
  //     {
  //       name: 'Access From',
  //       type: 'pie',
  //       radius: ['40%', '70%'],
  //       avoidLabelOverlap: false,
  //       itemStyle: {
  //         borderRadius: 10,
  //         borderColor: '#fff',
  //         borderWidth: 2
  //       },
  //       label: {
  //         show: false,
  //         position: 'center'
  //       },
  //       emphasis: {
  //         label: {
  //           show: true,
  //           fontSize: 40,
  //           fontWeight: 'bold'
  //         }
  //       },
  //       labelLine: {
  //         show: false
  //       },
  //       data: [
  //         { value: 748, name: '北京现代汽车有限公司' },
  //         { value: 735, name: '北京汽车制造厂有限公司' },
  //         { value: 580, name: '北京北内有限公司' },
  //         { value: 484, name: '北京北内有限公司' },
  //         { value: 484, name: '北京奔驰汽车有限公司' },
  //       ]
  //     }
  //   ]
  // }])


  const [sevenOpt, setSeventhOpt] = useState<EChartOption[]>([])
  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/sale/graph/export`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: {
        groupName: any;
        countries: any;
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
            data: item.countries
          },
          series: [
            {
              name: item.data[0].year,
              type: 'bar',
              data: item.data[0].data
            },
          ]
        }
        return template;
      })

      setSeventhOpt(newData);


    })
  }, [])

  const [eightOpt, setEightOpt] = useState<EChartOption[]>([])

  // const [eightOpt,setEightOpt] = useState<EChartOption[]>([])
  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/sale/graph/export`).then((res) => {

      return res.json()

    }).then(res => {
      let data = res.data;
      let newData = data.map((item: {
        type: any;
        groupName: any;
        countries: any;
        data: any; series: any[];
      }) => {

        // item.series.forEach(item=>{
        //     return Object.assign(item,{
        //         type:"bar"
        //     })
        // })
        let data1: number = 0;
        console.log(item.data[0].data);

        item.data[0].data.map((it: any) => {
          console.log(it);

          data1 += it;
          console.log(data1);

        })
        let data2: any = 0;
        item.data[1].data.map((it: any) => {
          data2 += it;
        })
        console.log(data1, data2);


        let template = {
          title: {
            text: item.groupName,
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
                { value: data1, name: item.data[0].type },
                { value: data2, name: item.data[1].type },

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
        }
        return template;
      })

      setEightOpt(newData);


    })
  }, [])





  return <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {
        firOpt.map((item) => {
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
        secOpt.map((item) => {
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
      {/* {
        fifOpt.map((item)=>{
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
        } */}

      {/* {
        sixOpt.map((item)=>{
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
        } */}
      {
        sevenOpt.map((item) => {
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
        eightOpt.map((item) => {
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