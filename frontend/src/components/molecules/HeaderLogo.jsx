// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { HeaderLogoTtl } from '../atoms/text/HeaderLogoText'
import { HeaderLogoImg } from '../atoms/img/HeaderLogoImg'
import { MainColor } from '../../style/Color'

const LogoWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${MainColor};
  height: 100%;
  width: 230px;
`

export const HeaderLogo = () => {
  return (
    <>
      <LogoWrap>
        <HeaderLogoImg />
        <HeaderLogoTtl />
      </LogoWrap>
    </>
  )
}
