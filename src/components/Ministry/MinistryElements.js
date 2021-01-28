import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    padding: 20px;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.2);
`

export const MinisterImage = styled.img`
    float: left;
    margin-right: 15px;
    width: 20%;
    background: #000;
`
export const MinistryInfo = styled.p`
    color: #000;
    text-align: justify;
`
export const MinisterName = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 5px;
`
export const MinistryData = styled.span`
    font-size: 18px;
    font-weight: 300;
`