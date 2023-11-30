/* @jsxImportSource @emotion/react */
import { useState, type FC, type ReactElement, useEffect, useCallback } from 'react';
import { EChartOption } from "echarts";
import { Charts } from "@/components/Charts";
import { Select } from 'antd';


let newNums = {};





const Wealth: FC = (): ReactElement => {

  const [enterprise, setEnterprise] = useState<Record<string, string>[]>([]);
  const [arrayNum, setArrayNum] = useState<number[]>([]);

  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/production/perception/trend/query?time=2022`).then((res) => {

      return res.json()

    }).then((res) => {
      let arr = [];
      for (let key in res) {
        arr.push(key)
      }
      let newArr = arr.map((item) => {
        return {
          label: item,
          value: item
        }

      })
      // console.log(newArr);
      setEnterprise(newArr);
      newNums = res;
      // console.log(res);

    })
  }, [])

  const handleChange = useCallback((value: string) => {
    // console.log(`selected ${value}`);
    let specifNums: Record<string, number>[] = newNums[value as keyof typeof newNums];
    let newA = specifNums.map((item) => {
      return item.quantity;
    });
    setArrayNum(newA);
    // console.log(newA);
    Object.assign({},)


  }, []);
  useEffect(() => {
    // console.log(arrayNum);

    let newa = Object.assign({ ...secOpt }, {
      series: [{
        data: arrayNum,
        type: 'line',
        areaStyle: {}
      }]
    })
    // console.log(newa);

    setSecOpt(newa)
  }, [arrayNum])





  const [secOpt, setSecOpt] = useState<EChartOption>({
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


  const resortCharts = () => {
    const allCharts = [];
    for (let i = 0; i < thrOpt.length; i++) {
      if (fourOpt[i]) {
        allCharts.push(thrOpt[i], fourOpt[i]);
      }
    }
    return allCharts;
  }


  return <>
    <Select
      defaultValue="请选择"
      style={{ width: 120 }}
      onChange={handleChange}
      options={enterprise}
    />
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Charts
        options={secOpt}
        style={{
          height: "500px",
          width: "45%",
        }}
      />
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {
        resortCharts().map((item) => {
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
      } */}
    </div>

  </>
}


export default Wealth;
