/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ColumnProperties } from '../patterns/column'
import type { HTMLStyledProps } from '../types/jsx'

export type ColumnProps = ColumnProperties & Omit<HTMLStyledProps<'div'>, keyof ColumnProperties >

/** A column component */
export declare const Column: FunctionComponent<ColumnProps>