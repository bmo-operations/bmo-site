/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type ColumnProperties = {
   padding?: ConditionalValue<string>
	gap?: ConditionalValue<string>
	justify?: ConditionalValue<"start" | "center" | "end" | "space-between">
	align?: ConditionalValue<"start" | "center" | "end" | "stretch">
}


type ColumnOptions = ColumnProperties & Omit<SystemStyleObject, keyof ColumnProperties >

interface ColumnPatternFn {
  (options?: ColumnOptions): string
  raw: (options: ColumnOptions) => ColumnOptions
}

/** A column component */
export declare const column: ColumnPatternFn;
