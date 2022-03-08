import React, {FC} from 'react';
import {splineModuleCreator} from "./splineModule";

const Banner: FC = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100vh', paddingTop: 90}}>
            <div style={{marginBottom: -10}}>
            <h1 style={{fontSize: '3rem', textAlign: "center", marginBottom: 0}}>Oh. So. <span style={{color: '#FE52A2'}}>Pro</span></h1>
            <p style={{textAlign: "center"}}>iPhone 14 pro max</p>
            </div>
            <div style={{minHeight: 682}} dangerouslySetInnerHTML={splineModuleCreator()}/>
        </div>
    );
};

export default Banner;