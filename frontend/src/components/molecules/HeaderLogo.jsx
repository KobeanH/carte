// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { HeaderLogoTtl } from '../atoms/text/HeaderLogoText'
import { HeaderLogoImg } from '../atoms/img/HeaderLogoImg'
import { MainColor } from '../../style/Color'

export const HeaderLogo = () => {
  const HeaderLogo = styled.span`
    background-color: ${MainColor};
    height: 100%;
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 8px;
  `
  return (
    <>
      <HeaderLogo>
        <HeaderLogoImg />
        <HeaderLogoTtl />
      </HeaderLogo>
    </>
  )
}
