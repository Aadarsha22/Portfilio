import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";

const baseTheme = {
  colors,

  components: {},
};

export const theme = extendTheme(baseTheme);
