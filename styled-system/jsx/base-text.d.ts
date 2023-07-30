/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BaseTextProperties } from '../patterns/base-text'
import type { HTMLStyledProps } from '../types/jsx'

export type BaseTextProps = BaseTextProperties & Omit<HTMLStyledProps<'div'>, keyof BaseTextProperties >

/** A base text component */
export declare const BaseText: FunctionComponent<BaseTextProps>