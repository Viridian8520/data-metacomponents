/* @jsxImportSource @emotion/react */
import useCurrentPath from '@/hooks/useCurrentPath';
import { Fragment, type FC, type ReactElement } from 'react';
import Produce from './produce';
import ManPower from './manpower';
import Sale from './sale';
import Wealth from './wealth';
import Logistics from './logistics';
import EmptyPage from '@/components/EmptyPage';


const decisionMaking: FC = (): ReactElement => {

    const { secondaryPathKey } = useCurrentPath()
    

    return (
        <Fragment>
        {
            secondaryPathKey === "productionchain" ?
            <Produce /> : secondaryPathKey === "salechain" ?
                <Sale /> : secondaryPathKey === "wealthchain" ?
                <Wealth /> : secondaryPathKey === "manpowerchain" ?
                    <ManPower /> : secondaryPathKey === "logisticschain" ?
                    <Logistics /> : <EmptyPage />
        }
        </Fragment>
    )
}

export default decisionMaking;