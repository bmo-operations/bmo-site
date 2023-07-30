/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { RowProperties } from '../patterns/row'
import type { HTMLStyledProps } from '../types/jsx'

export type RowProps = RowProperties & Omit<HTMLStyledProps<'div'>, keyof RowProperties >

/** A row component */
export declare const Row: FunctionComponent<RowProps>