import React from 'react';
import ReactDOM from 'react-dom';
import CogniAssistWidget  from './src/index';

const plugin = {
  init: (args) => {
    ReactDOM.render(
      <CogniAssistWidget
        botName={args.botName}
        botIcon={args.botIcon}
        botURL={args.botURL}
      />, document.querySelector(args.selector)
    );
  }
};

export {
  plugin as default,
  CogniAssistWidget
};