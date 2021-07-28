import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderLink } from '../../components';
import { MemoryRouter } from 'react-router-dom';
import '../../reset.css';
import '../../index.css';
import 'animate.css';

const Meta: ComponentMeta<typeof HeaderLink> = {
  title: 'Header/HeaderLink',
  component: HeaderLink,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: ComponentStory<typeof HeaderLink> = args => <HeaderLink {...args} />;

const IconHeaderLink = Template.bind({});

IconHeaderLink.args = {
  icon: 'icons/cart.svg',
  title: 'Cart',
  to: '/cart',
  animation: 'animate__lightSpeedInLeft',
};

const NoIconHeaderLink = Template.bind({});

NoIconHeaderLink.args = {
  title: 'Cart',
  to: '/cart',
};

export default Meta;

export { IconHeaderLink, NoIconHeaderLink };
