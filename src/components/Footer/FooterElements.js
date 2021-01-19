import styled, { css} from 'styled-components';
import { Link as UrlLink } from 'react-router-dom';

export const Futer = styled.footer`
    background: #eee;
    color:#000;
    padding:30px 0;
`

export const FooterInfo = styled.div`
    margin-bottom: 30px;

    @media screen and (max-width:768px){
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom:2px solid #aaa;
    }
`

export const Address = styled.address`
    color:#000;
`

export const SocialLinks = styled.div`
    display:flex;
`

export const UsefulLinks = styled.div`
    margin:auto;

    @media screen and (max-width:768px){
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom:2px solid #aaa;
    }
`

export const Newsletter = styled.div`
    display:block;
`

export const Subscribe = styled.p`
    font-size:18px;
    font-weight:500;
    margin-top:10px;
`

export const Form = styled.form`
    border:none;
`

export const Input = styled.input.attrs({type:'email'})`
    display:inline-block;
    outline:none;
    width:80%;
    height:40px;
    border-radius: 55px;
    border: 1px solid #2979FF;
    padding: 0px 30px 0px 10px;
    background:#F5F5F5;
`

export const InputLabel = styled.input.attrs({type:'submit'})`
    display:inline-block;
    outline:none;
    height:40px;
    border-radius: 55px;
    background:#2979FF;
    color: #fff;
    margin-left:-35px;
    margin-bottom:2px;
    position:absolute;
    z-index:9999;
    border: 1px solid #2979FF;
    padding: 0px 10px;

    &:hover {
        color:#fff;
        opacity:0.85;
    }
`



export const Link = styled(UrlLink)`
    color: #000;
    text-decoration:none;

    &:hover {
        color: #2979FF; 
      }
    ${props => props.social && css`
    border-radius: 55px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    background: #aaa;
    margin-right:10px;

    &:hover {
        color: #fff; 
        background-color:#2979FF;
      }
  `}
`

export const Copyright = styled.div`
    background: #eee;
    text-align:center;
    margin-top:1px;
    padding-top: 10px;
`