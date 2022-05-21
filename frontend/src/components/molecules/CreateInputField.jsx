// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { CreateInput } from '../atoms/input/CreateInput'
import { CreateLabel } from '../atoms/label/CreateLabel'

const Wrap = styled.div`
  > label {
    margin-bottom: 6px;
  }
`

export const CreateInputField = (props) => {
  const { children, inputFor, type, name, value, placeholder, onChange } = props

  return (
    <>
      <Wrap>
        <CreateLabel inputFor={inputFor}>{children}</CreateLabel>
        <CreateInput
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Wrap>
    </>
  )
}
