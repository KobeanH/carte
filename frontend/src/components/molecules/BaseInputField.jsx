// 外部モジュール
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

// 内部モジュール
import { BaseInput } from '../atoms/input/BaseInput'
import { BaseLabel } from '../atoms/label/BaseLabel'
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

export const BaseInputField = React.forwardRef((props, ref) => {
  const { children, inputFor, type, name, value, placeholder, onChange } = props
  const { register } = useFormContext()
  return (
    <>
      <Wrap>
        <BaseLabel inputFor={inputFor}>{children}</BaseLabel>
        <BaseInput
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
