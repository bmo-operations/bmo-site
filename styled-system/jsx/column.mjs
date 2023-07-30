import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getColumnStyle } from '../patterns/column.mjs';

export const Column = forwardRef(function Column(props, ref) {
  const { padding, gap, justify, align, ...restProps } = props
const styleProps = getColumnStyle({padding, gap, justify, align})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})    