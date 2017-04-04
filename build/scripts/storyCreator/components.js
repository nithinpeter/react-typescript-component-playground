"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var StoryBoard = (function (_super) {
    __extends(StoryBoard, _super);
    function StoryBoard() {
        var _this = _super.call(this) || this;
        _this.state = {
            renderComponent: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    StoryBoard.prototype.handleClick = function (item) {
        this.selectedComponent = item.component;
        this.setState({ renderComponent: true });
    };
    StoryBoard.prototype.render = function () {
        var _this = this;
        var stories = this.props.stories;
        var leftNavItems = stories.map(function (story) {
            var storyItems = story._getStoryItems();
            return React.createElement(LeftNavItem, { storyItems: storyItems, handleClick: _this.handleClick });
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: "left-nav" }, leftNavItems),
            React.createElement("div", { className: "content" }, this.state.renderComponent && this.selectedComponent)));
    };
    return StoryBoard;
}(React.Component));
exports.StoryBoard = StoryBoard;
var LeftNavItem = function (_a) {
    var storyItems = _a.storyItems, handleClick = _a.handleClick;
    var rendered = Object.keys(storyItems).map(function (key) {
        return React.createElement("div", null,
            React.createElement("h3", null, key),
            storyItems[key].map(function (item) { return React.createElement("div", null,
                React.createElement("span", { onClick: function () { return handleClick(item); } }, item.description)); }));
    });
    return React.createElement("div", { className: "left-nav-item" }, rendered);
};
