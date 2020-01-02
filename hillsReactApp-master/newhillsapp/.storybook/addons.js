import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import Raect from 'react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '..@storybook/react/demo';
import contact from '../src/components/contact'; 
import feedback from '../src/components/feedback'; 
import landingPage from '../src/components/landingpage'; 
import projects from '../src/components/projects'; 


export default {
    title:  'Welcome',
};
const toStorybook = () => <Welcome showApp={linkTo('Button')} />;


toStorybook.story = {
    name: 'to Storybook',
};

storiesOf("newhillsapp/contact",module).add("default",()=><contact/>)
storiesOf("newhillsapp/feedback",module).add("default",()=><feedback/>)
storiesOf("newhillsapp/landingPage",module).add("default",()=><landingPage/>)
storiesOf("newhillsapp/projects",module).add("default",()=><projects/>)
