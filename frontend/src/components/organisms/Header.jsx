// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { HeaderLogo } from '../molecules/HeaderLogo'
import { GrayBtn } from '../atoms/btn/GrayBtn'

export const Header = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #fff;
  `
  return (
    <>
      <Header>
        <HeaderLogo />
        <GrayBtn fSize={2}>ログアウト</GrayBtn>
      </Header>
    </>
  )
}
