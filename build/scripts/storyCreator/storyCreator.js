"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createStoriesOf = function (identifier) {
    var storyItems = {};
    storyItems[identifier] = [];
    return {
        _getStoryItems: function () {
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
