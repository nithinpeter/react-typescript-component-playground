"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var button_1 = require("./components/button");
var storyCreator_1 = require("../scripts/storyCreator");
var ButtonStory = storyCreator_1.createStoriesOf('Button')
    .add('simple button', React.createElement(button_1.default, { label: 'click me' }))
    .add('simple button', React.createElement(button_1.default, { label: 'dont click me' }));
ReactDOM.render(storyCreator_1.renderStory(ButtonStory.getStoryItems()), document.body);
