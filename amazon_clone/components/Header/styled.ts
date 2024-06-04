import Image from "next/image";
import  styled  from "styled-components";
import SearchIcon from "@mui/icons-material/Search"
import { theme } from "../../pages/_app";
import Link from "next/link";

export const Nav = styled.nav`
    background-color:${({theme}) => theme.colors.navBg};
    display:flex;
    align-items:center;
    position: sticky;
    top:0;
    margin:0;
    padding: 10px 15px;
    z-index: 1000;
    `;

export const Logo =styled(Image)`
margin: 0 20px;
height: 50px;
cursor:pointer;
object-fit:contain;
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const SearchInput =styled.input`
    display: flex;
    height : 22px;
    width: 100%;
    padding: 10px;
    border: none;
`;

export const SearchIconButton = styled(SearchIcon)`
    background-color: #febd68;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: ${({theme})=>theme.colors.white};
`;

export const OptionTopLine = styled.span`
    font-size: 10px;
`;

export const OptionBottomLine = styled.span`
    font-size: 13px;
    font-weight: 800;
`;

export const Basket = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.white};
`;

export const BasketCounter = styled.span`
    display: flex;
    align-items: center;
    color: ${({theme}) =>theme.colors.orange};
`;

export const SignInLink = styled.div`
    display: flex;
    text-decoration : none;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
`;

export const CheckOutLink =styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`;

export const Main = styled.main`
    padding: 2rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
`;

export const Container1 = styled.h1`
    padding: 0 0.5rem;
    height: 100%;
    min-height: 100vh;
    background-color: white;
`;

export const Tilte =styled.h1`
    margin: 24px 0px 16 px;
    line-height: 1.15;
    font-size:1.4rem;
    font-weight:500;
    text-align:left;
    text-decoration:none;
    a{
        color:${({theme})=> theme.color.black};
        text-decoration: none;
    }
`;