// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { HeaderLogo } from '../molecules/HeaderLogo'
import { GrayBtn } from '../atoms/btn/GrayBtn'
import axios from 'axios'
import { LogOutInUrl } from '../../urls'

const HeaderWrap = styled.header`
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #fff;
`
const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-width: 1200px;
`

export const Header = (props) => {
  const { handleLogout } = props
  const handleLogoutClick = () => {
    axios
      .delete(LogOutInUrl, { withCredentials: true })
      .then((response) => {
        handleLogout()
        console.log('logi')
      })
      .catch((error) => console.log('ログアウトエラー', error))
  }
  return (
    <>
      <HeaderWrap>
        <HeaderLogo />
        <HeaderInner>
          <GrayBtn onClick={handleLogoutClick}>ログアウト</GrayBtn>
        </HeaderInner>
      </HeaderWrap>
    </>
  )
}
