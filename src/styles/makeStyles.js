import makeStylesWithoutDefault from '../theme/makeStyles';
import defaultTheme from './defaultTheme';

function makeStyles(stylesOrCreator, options = {}) {
  return makeStylesWithoutDefault(stylesOrCreator, {
    defaultTheme,
    ...options,
  });
}

export default makeStyles;
