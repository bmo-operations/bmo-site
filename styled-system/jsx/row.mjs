import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getRowStyle } from '../patterns/row.mjs';

export const Row = forwardRef(function Row(props, ref) {
  const { padding, gap, justify, align, ...restProps } = props
const styleProps = getRowStyle({padding, gap, justify, align})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})    