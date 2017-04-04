"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var createStoriesOf = function (identifier) {
    var storyItems = {};
    storyItems[identifier] = [];
    return {
        getStoryItems: function () {
            return storyItems;
        },
        add: function (description, component) {
            storyItems[identifier].push({
                description: description,
                component: component
            });
            return this;
        }
    };
};
exports.createStoriesOf = createStoriesOf;
var renderStory = function (storyItems) {
    if (storyItems === void 0) { storyItems = []; }
    var rendered = Object.keys(storyItems).map(function (key) {
        return React.createElement("div", null,
            React.createElement("h3", null, key),
            storyItems[key].map(function (item) { return React.createElement("div", null,
                React.createElement("em", null, item.description),
                item.component); }));
    });
    return React.createElement("div", null, rendered);
};
exports.renderStory = renderStory;
