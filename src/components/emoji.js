import twemoji from "twemoji";
import React, { memo } from "react";

// See: https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
const Emoji = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji),
    }}
  />
);

export default memo(Emoji);
