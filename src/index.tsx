import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Label from './components/Label';
import Button from './components/button';

import {
    createStoriesOf,
    StoryBoard
} from '../scripts/storyCreator';

const buttonStory = createStoriesOf('Button')
                        .add('simple button', <Button label={'click me'}/>)
                        .add('simple button', <Button label={'dont click me'}/>);

const labelStory = createStoriesOf('Label')
                        .add('simple label', <Label labelText={'click me'}/>)
                        .add('simple label', <Label labelText={'dont click me'}/>);

const stories = [
    buttonStory,
    labelStory
];

ReactDOM.render(
    <StoryBoard stories={stories} />,
    document.body
)