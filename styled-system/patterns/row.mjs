import { mapObject, __spreadValues, __objRest } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const rowConfig = {
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
    flexDirection: "row",
    justifyContent: justify,
    alignItems: align,
    gap,
    padding
  }, divProps);
}}

export const getRowStyle = (styles = {}) => rowConfig.transform(styles, { map: mapObject })

export const row = (styles) => css(getRowStyle(styles))
row.raw = (styles) => styles