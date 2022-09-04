import React, { useEffect, useState } from 'react';
import "./ArtPieces.css"
import {Button} from "@web3uikit/core"

function ArtPieces( {percent, setPercent, art } ) {
    return (
        <>
        <div>
            <div className="art">
                {art}
            </div>
            <div className='circle'>
                <div className='percent'>
                    {percent}%
                </div>
            </div>
            <div className='votes'>
                <Button
                onClick={()=> {setPercent(percent + 1)}}
                text="up"
                theme="primary"
                type="button"
                />

                <Button
                onClick={()=> {setPercent(percent - 1)}}
                text="down"
                theme="primary"
                type="button"
                />

            </div>
        </div>
        </>
    );
}


export default ArtPieces;