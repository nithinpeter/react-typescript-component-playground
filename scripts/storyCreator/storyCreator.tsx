import * as React from 'react';

const createStoriesOf = (identifier: string) => {
    
    const storyItems: any = {};
    storyItems[identifier] = [];

    return {
        _getStoryItems: function() {
            return storyItems;
        },
        add: function (description: string, component: React.Component<any, any> | JSX.Element) {
            storyItems[identifier].push({
                description: description,
                component: component
            });
            return this;
        }
    }
}

export {
    createStoriesOf,
}