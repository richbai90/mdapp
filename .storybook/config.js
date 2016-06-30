import {configure} from '@kadira/storybook'

function loadStories() {
    require('../components/stories/basicHeader.jsx');
}

configure(loadStories,module);