import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getBaseTextStyle } from '../patterns/base-text.mjs';

export const BaseText = forwardRef(function BaseText(props, ref) {
  const { maximumLines, ...restProps } = props
const styleProps = getBaseTextStyle({maximumLines})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})    