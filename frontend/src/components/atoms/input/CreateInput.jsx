// 外部モジュール
import styled from 'styled-components'

// 内部モジュール

const Input = styled.input`
  height: 40px;
  max-width: 280px;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  padding: 10px 32px;
  font-size: 1.6rem;
`

export const CreateInput = (props) => {
  const { type, name, value, placeholder, onChange } = props
  return (
    <>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></Input>
    </>
  )
}
