import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  id: number;
  corporation: string;
  categories: number;
  positions: number;
  skill: string;
  amount: number;
  eventTime: number;
  updateTime: number;
}

// 格式化事件时间戳
const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // 将时间戳转换为Date对象
  const year = date.getFullYear();
  const month: any = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1，并补0
  const day: any = (date.getDate() + 1).toString().padStart(2, '0');

  return `${year}-${month}-${day}`
}

const columns: ColumnsType<DataType> = [
  // {
  //     title: 'id',
  //     dataIndex: 'id',
  //     key: 'id',
  //   },
  {
    title: '企业名称',
    dataIndex: 'corporation',
    key: 'corporation',
  },
  {
    title: '类别',
    dataIndex: 'categories',
    key: 'categories',
  },
  {
    title: '员工职位',
    dataIndex: 'positions',
    key: 'positions',
  },
  {
    title: '员工技能',
    dataIndex: 'skill',
    key: 'skill',
  },
  {
    title: '员工数量',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '事件时间',
    dataIndex: 'eventTime',
    key: 'eventTime',
    render: (text: number) => {
      const time: string = formatDate(text);
      return time;
    }
  },

];

interface Iprops {
  url: string;
}

const App: React.FC<Iprops> = ({ url }: Iprops) => {

  const [data, setData] = useState<DataType[]>([]);
  console.log(url);

  useEffect(() => {
    fetch(`http://8.134.59.53:8080/rest/data/element/${url}/fusion/query?statement=&types=1&limit=20&offset=0`).then((res) => {
      // console.log(res);

      return res.json()

    }).then((res) => {
      const newData = res[`${url}s`];
      const nextData: DataType[] = newData.map((item: DataType) => {
        if (!item["positions"]) {
          item = {
            ...item,
            positions: 1,
            skill: "车机系统开发",
            amount: 100
          }
        }
        return item


      });
      console.log(nextData);

      setData(nextData);
    })
  }, [])


  return <>
    <Table columns={columns} dataSource={data} />
  </>
};

export default App;