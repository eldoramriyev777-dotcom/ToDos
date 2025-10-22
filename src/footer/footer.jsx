import React from 'react'
import { FooterDown, FooterDownLeft, FooterDownRight, FooterTop, FullFooter, FullFooterWrap } from './footerStyle'
import blueLogo from '../assets/logo-blue.svg'

const FooterComponent = () => {
  return (
    <FullFooter>
        <FullFooterWrap>
            <FooterTop>
                <p>An enterprise template to ramp up your company website</p>
                <div>
                    <input placeholder='Your email address' type="text" />
                    <button>Start now</button>
                </div>
            </FooterTop>
            <FooterDown>
                <FooterDownLeft>
                    <img src={blueLogo}/>
                    <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                    <small>All rights reserved.</small>
                </FooterDownLeft>
                <FooterDownRight>
                    <div>
                        <p>Landings</p>
                        <span>Home</span>
                        <span>Products</span>
                        <span>Services</span>
                    </div>
                    <div>
                        <p>Company</p>
                        <span>Home</span>
                        <span>Careers <p>Hiring!</p> </span>
                        <span>Services</span>
                    </div>
                    <div>
                        <p>Resources</p>
                        <span>Blog</span>
                        <span>Products</span>
                        <span>Services</span>
                    </div>
                </FooterDownRight>
            </FooterDown>
        </FullFooterWrap>
    </FullFooter>
  )
}

export default FooterComponent