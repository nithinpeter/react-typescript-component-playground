import * as React from 'react';

const createStoriesOf = (identifier: string) => {
    
    const storyItems: any = {};
    storyItems[identifier] = [];

    return {
        getStoryItems: function() {
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

const renderStory = (storyItems: any = []) => {

    const rendered = Object.keys(storyItems).map((key: string) => {
        return <div>
            <h3>{key}</h3>
            {
                storyItems[key].map((item: any) => <div>
                    <em>{item.description}</em>
                    {item.component}
                </div>)
            }
        </div>
    });

    return <div>
        {rendered}
    </div>
}

export {
    createStoriesOf,
    renderStory
}