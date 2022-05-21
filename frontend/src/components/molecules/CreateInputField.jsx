// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { CreateInput } from '../atoms/input/CreateInput'
import { CreateLabel } from '../atoms/label/CreateLabel'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
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
          id={inputFor}
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
