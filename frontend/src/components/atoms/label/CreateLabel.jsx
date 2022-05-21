// 外部モジュール
import styled from 'styled-components'

// 内部モジュール

const Label = styled.label`
  color: #000;
  font-size: 1.8rem;
`

export const CreateLabel = (props) => {
  const { children, inputFor } = props
  return (
    <>
      <Label htmlFor={inputFor}>{children}</Label>
    </>
  )
}
