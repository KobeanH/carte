// 外部モジュール
import React from 'react'
import styled from 'styled-components'

// 内部モジュール

const Label = styled.label`
  color: #000;
  font-size: 1.6rem;
`

export const CreateLabel = React.forwardRef((props, ref) => {
  const { children, inputFor } = props
  return (
    <>
      <Label htmlFor={inputFor} ref={ref}>
        {children}
      </Label>
    </>
  )
})
