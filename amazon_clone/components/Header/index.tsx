import React from 'react'
import { Basket, BasketCounter, CheckOutLink, Logo, Nav, Option, OptionBottomLine, OptionTopLine, SearchBox, SearchIconButton, SearchInput, SignInLink } from './styled'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
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
                Hello
            </OptionTopLine>
            <OptionBottomLine>
                &SignIn
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
            <BasketCounter>0</BasketCounter>
        </Basket>
    </CheckOutLink>
    </Nav>
  )
}

export default Header
