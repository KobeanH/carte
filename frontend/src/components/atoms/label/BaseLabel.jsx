// 外部モジュール
import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: #000;
  font-size: 1.6rem;
`

export const BaseLabel = React.forwardRef((props, ref) => {
  const { children, inputFor } = props
  return (
    <>
      <Label htmlFor={inputFor} ref={ref}>
        {children}
      </Label>
    </>
  )
})
