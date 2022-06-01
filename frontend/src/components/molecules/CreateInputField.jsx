// 外部モジュール
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

// 内部モジュール
import { CreateInput } from '../atoms/input/CreateInput'
import { CreateLabel } from '../atoms/label/CreateLabel'
import React from 'react'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
  > label {
    margin-bottom: 6px;
  }
`

export const CreateInputField = React.forwardRef((props, ref) => {
  const { children, inputFor, type, name, value, placeholder, onChange } = props
  const { register } = useFormContext()
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
          {...register}
          ref={ref}
        />
      </Wrap>
    </>
  )
})
