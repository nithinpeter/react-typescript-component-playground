"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Label_1 = require("./components/Label");
var button_1 = require("./components/button");
var storyCreator_1 = require("../scripts/storyCreator");
var buttonStory = storyCreator_1.createStoriesOf('Button')
    .add('simple button', React.createElement(button_1.default, { label: 'click me' }))
    .add('simple button', React.createElement(button_1.default, { label: 'dont click me' }));
var labelStory = storyCreator_1.createStoriesOf('Label')
    .add('simple label', React.createElement(Label_1.default, { labelText: 'click me' }))
    .add('simple label', React.createElement(Label_1.default, { labelText: 'dont click me' }));
var stories = [
    buttonStory,
    labelStory
];
ReactDOM.render(React.createElement(storyCreator_1.StoryBoard, { stories: stories }), document.body);
