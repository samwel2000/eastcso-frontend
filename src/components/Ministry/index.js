import React from 'react'
import { Wrapper, MinisterImage, MinistryInfo, MinisterName, MinistryData} from './MinistryElements'

function index({photo, names, data}) {
    return (
        <>
            <Wrapper>
                <MinisterImage src={photo} />
                <MinistryInfo>
                    <MinisterName>
                        {names}
                    </MinisterName>
                    <MinistryData>
                        {data}
                    </MinistryData>
                </MinistryInfo>
            </Wrapper>
        </>
    )
}

export default index
