// 外部モジュール
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import React from 'react'

// 内部モジュール

const Input = styled.input`
  height: 40px;
  max-width: 280px;
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 1.4rem;
`

export const BaseInput = React.forwardRef((props, ref) => {
  const { id, type, name, value, placeholder, onChange } = props
  const { register } = useFormContext()
  return (
    <>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...register}
        ref={ref}
      ></Input>
    </>
  )
})
