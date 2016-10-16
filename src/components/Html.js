import React, { PropTypes } from 'react';
import { analytics } from '../config';
import { css as bootstrapCss } from 'horyd-bootstrap-loader';

function Html({ title, description, style, script, children }) {
  const css = bootstrapCss._getCss(); // eslint-disable-line no-underscore-dangle, max-len
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
        <style id="bootstrap-css" dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {script && <script src={script} />}
        {analytics.google.trackingId &&
          <script
            dangerouslySetInnerHTML={{ __html:
            'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
          />
        }
        {analytics.google.trackingId &&
          <script src="https://www.google-analytics.com/analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string,
};

export default Html;
