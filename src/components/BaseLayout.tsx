/* @jsxImportSource @emotion/react */
import { Layout, Menu } from 'antd';
import HomePageRouters from '@/routes/HomePageRoutes';
import { meunItems } from '@/routes/routesConfig';
import useCurrentPath from '@/hooks/useCurrentPath';
import type { FC, ReactElement } from 'react';

const { Header, Sider, Content } = Layout;

const BaseLayout: FC = (): ReactElement => {

    let { firstLevelPathKeValue, secondaryPathValue } = useCurrentPath();  // 当前路由路径
    if (firstLevelPathKeValue === undefined) {
        firstLevelPathKeValue = '';
        secondaryPathValue = '';
    } else {
        firstLevelPathKeValue = `/${firstLevelPathKeValue}`;
        if (secondaryPathValue === undefined) {
        secondaryPathValue = '';
        } else {
        secondaryPathValue = `/${secondaryPathValue}`;
        }
    }
    
    return (
        <Layout
        css={{ height: '100%', overflow: 'hidden',width:"100%" }}
        >
        <Header
            css={{
            display: 'flex',
            alignItems: 'center',
            height: '8%',
            lineHeight: '8%',
            fontSize: '20px',
            borderBottom: '1px solid #EDEDED',
            backgroundColor: '#F5F5F5'
            }}
        >
            数据元构件
            <div
            css={{
                margin: '0 50px',
                fontSize: '12px',
            }}
            >
            <span
                css={{
                color: '#9A9A9A',
                }}
            >{`首页${firstLevelPathKeValue}`}</span>
            <span>{secondaryPathValue}</span>
            </div>
        </Header>
        <Layout>
            <Sider
            css={{
                overflowY: 'auto',
            }}
            theme='light' trigger={null} collapsible 
            >
            <Menu mode='inline' items={meunItems} />
            </Sider>
            <Content
            css={{
                padding: '10px',
                overflow: 'scroll',
            }}
            >
            <HomePageRouters />
            </Content>
        </Layout>
        </Layout>
    )
}

export default BaseLayout