import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import Button from './components/button';

import {
    createStoriesOf,
    renderStory
} from '../scripts/storyCreator';

const ButtonStory = createStoriesOf('Button')
                        .add('simple button', <Button label={'click me'}/>)
                        .add('simple button', <Button label={'dont click me'}/>);

ReactDOM.render(
    renderStory(ButtonStory.getStoryItems()),
    document.body
)