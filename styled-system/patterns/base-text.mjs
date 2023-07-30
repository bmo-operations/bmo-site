import { mapObject, __spreadValues, __objRest } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const baseTextConfig = {
transform(props) {
  const _a = props, {
    maximumLines
  } = _a, divProps = __objRest(_a, [
    "maximumLines"
  ]);
  if (maximumLines != void 0) {
    return __spreadValues({
      lineClamp: maximumLines,
      WebkitLineClamp: maximumLines,
      textOverflow: "ellipsis",
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical"
    }, divProps);
  }
  return props;
}}

export const getBaseTextStyle = (styles = {}) => baseTextConfig.transform(styles, { map: mapObject })

export const baseText = (styles) => css(getBaseTextStyle(styles))
baseText.raw = (styles) => styles