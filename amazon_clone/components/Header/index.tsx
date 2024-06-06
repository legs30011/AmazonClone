import React from 'react'
import { Basket, BasketCounter, CheckOutLink, Logo, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchIconButton, SearchInput, SignInLink } from './styled'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { selectUser, signOutFromAccount } from '@/lib/store/reducers/userReducer';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/router';
import { selectCartItemsCount } from '@/lib/store/reducers/cartReducer';


const Header = () => {
    const user =useAppSelector(selectUser);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const quantity = useAppSelector(selectCartItemsCount);

    const handleSignIn = () => {
        if (user !== null){
            auth.signOut();
            dispatch(signOutFromAccount());
            router.push("/login")
        }else{
            router.push("/login");
        }
    };
    
  return (
    <Nav>
        <Link href="/">
            <Logo src="https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg" alt="Amazon Logo"
            width={100} height={100} />
    </Link>
    <SearchBox>
        <SearchInput type="text"/>
        <SearchIconButton/>
    </SearchBox>

    <SignInLink>
        <Option>
            <OptionTopLine>
                Hello {user?.email}
            </OptionTopLine>
            <OptionBottomLine onClick={()=> handleSignIn()}>
                {user !== null ? "Sign Out" : "Sign In"}
            </OptionBottomLine>
        </Option>
    </SignInLink>

    <Option>
        <OptionTopLine>
            Returns
        </OptionTopLine>
        <OptionBottomLine>
            &Orders
        </OptionBottomLine>
    </Option>

    <CheckOutLink href="/checkout">
        <Basket>
            <ShoppingCartIcon/>
            <BasketCounter>{quantity}</BasketCounter>
        </Basket>
    </CheckOutLink>
    </Nav>
  )
}

export default Header
