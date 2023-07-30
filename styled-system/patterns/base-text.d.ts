/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type BaseTextProperties = {
   maximumLines?: ConditionalValue<number>
}


type BaseTextOptions = BaseTextProperties & Omit<SystemStyleObject, keyof BaseTextProperties >

interface BaseTextPatternFn {
  (options?: BaseTextOptions): string
  raw: (options: BaseTextOptions) => BaseTextOptions
}

/** A base text component */
export declare const baseText: BaseTextPatternFn;
