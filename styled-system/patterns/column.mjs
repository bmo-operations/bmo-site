import { mapObject, __spreadValues, __objRest } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const columnConfig = {
transform(props) {
  const _a = props, {
    justify = "start",
    align = "start",
    gap,
    padding
  } = _a, divProps = __objRest(_a, [
    "justify",
    "align",
    "gap",
    "padding"
  ]);
  return __spreadValues({
    display: "flex",
    flexDirection: "column",
    justifyContent: justify != null ? justify : "start",
    alignItems: align != null ? align : "start",
    gap,
    padding
  }, divProps);
}}

export const getColumnStyle = (styles = {}) => columnConfig.transform(styles, { map: mapObject })

export const column = (styles) => css(getColumnStyle(styles))
column.raw = (styles) => styles