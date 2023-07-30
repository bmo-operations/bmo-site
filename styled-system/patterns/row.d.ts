/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type RowProperties = {
   padding?: ConditionalValue<string>
	gap?: ConditionalValue<string>
	justify?: ConditionalValue<"start" | "center" | "end" | "space-between">
	align?: ConditionalValue<"start" | "center" | "end" | "stretch">
}


type RowOptions = RowProperties & Omit<SystemStyleObject, keyof RowProperties >

interface RowPatternFn {
  (options?: RowOptions): string
  raw: (options: RowOptions) => RowOptions
}

/** A row component */
export declare const row: RowPatternFn;
