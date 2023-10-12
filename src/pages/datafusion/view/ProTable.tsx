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

const columns: ColumnsType<DataType> = [
    // {
    //     title: 'id',
    //     dataIndex: 'id',
    //     key: 'id',
    //   },
      {
        title: 'corporation',
        dataIndex: 'corporation',
        key: 'corporation',
      },
      {
        title: 'categories',
        dataIndex: 'categories',
        key: 'categories',
      },
      {
        title: 'positions',
        dataIndex: 'positions',
        key: 'positions',
      },
      {
        title: 'skill',
        dataIndex: 'skill',
        key: 'skill',
      },
      {
        title: 'amount',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'eventTime',
        dataIndex: 'eventTime',
        key: 'eventTime',
      },
      {
        title: 'updateTime',
        dataIndex: 'updateTime',
        key: 'updateTime',
      }

];

interface Iprops {
    url :string;
}

const App: React.FC<Iprops> = ({url}:Iprops) => {

    const [data,setData] = useState<DataType[]>([]);
    console.log(url);
    
useEffect(()=>{
    fetch(`http://localhost:8080/rest/data/element/${url}/fusion/query?statement=&types=1&limit=20&offset=0`).then((res)=>{
        // console.log(res);
            
        return res.json()
    
    }).then((res)=>{
            const newData = res[`${url}s`];
            const nextData:DataType[] = newData.map((item:DataType)=>{
                if(!item["positions"]){
                    item = {
                        ...item,
                        positions:1,
                        skill:"车机系统开发",
                        amount:100
                    }
                }
                return item
                
                
            });
            console.log(nextData);
            
            setData(nextData);
    })
},[])


return <>
<Table columns={columns} dataSource={data} />
</>};

export default App;