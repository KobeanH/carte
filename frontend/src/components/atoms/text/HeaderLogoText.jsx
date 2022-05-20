// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { FontEng } from '../../../style/Font'

export const HeaderLogoTtl = () => {
  const HeaderLogoTtl = styled.span`
    font-size: 3rem;
    font-family: ${FontEng};
    color: #fff;
    letter-spacing: 0.03em;
  `
  return (
    <>
      <HeaderLogoTtl>Carte</HeaderLogoTtl>
    </>
  )
}
