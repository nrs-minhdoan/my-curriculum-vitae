import React, { memo } from "react";
import PropTypes from "prop-types";
import Media from "react-media";

import {
  EXTRA_SMALL_DEVICES,
  SMALL_DEVICES,
  MEDIUM_DEVICES,
  LARGE_DEVICES
} from "../../themes/size";

function renderQuery(device) {
  switch (device) {
    case "EXTRA_SMALL_DEVICES":
      return EXTRA_SMALL_DEVICES;

    case "SMALL_DEVICES":
      return SMALL_DEVICES;

    case "MEDIUM_DEVICES":
      return MEDIUM_DEVICES;

    case "LARGE_DEVICES":
      return LARGE_DEVICES;

    default:
      return EXTRA_SMALL_DEVICES;
  }
}

function Responsive({ children, device }) {
  const query = renderQuery(device.toUpperCase());
  return <Media query={query}>{matches => children(matches)}</Media>;
}

Responsive.defaultProps = {
  device: "EXTRA_SMALL_DEVICES"
};

Responsive.propTypes = {
  children: PropTypes.any,
  device: PropTypes.oneOf([
    "EXTRA_SMALL_DEVICES",
    "SMALL_DEVICES",
    "MEDIUM_DEVICES",
    "LARGE_DEVICES"
  ])
};

const MemoResponsive = memo(Responsive);

export default MemoResponsive;
