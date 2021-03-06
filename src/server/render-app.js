// @flow

import {
  APP_CONTAINER_CLASS,
  STATIC_PATH,
  WDS_PORT
} from "../shared/config.js";
import { isProd } from "../shared/util.js";

const renderApp = title =>
  `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="bundle.js"></script>
  </body>
</html>
`;

export default renderApp;
