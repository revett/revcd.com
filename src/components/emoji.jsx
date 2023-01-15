import twemoji from "twemoji";
import React, { memo } from "react";

// See: https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
const Emoji = ({ emoji }) => {
  // TODO: Revert this after twemoji has fixed forward, replacing CDN as MaxCDN
  // is no longer a thing.
  const em = twemoji
    .parse(emoji)
    .replace("twemoji.maxcdn.com/v", "cdnjs.cloudflare.com/ajax/libs/twemoji");

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: em,
      }}
    />
  );
};

export default memo(Emoji);
