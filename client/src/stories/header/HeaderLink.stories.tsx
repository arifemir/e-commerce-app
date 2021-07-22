import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderLink } from '../../components';
import { MemoryRouter } from 'react-router-dom';

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
  icon: 'https://img.icons8.com/material-outlined/24/000000/fast-cart.png',
  title: 'Cart',
  to: '/cart',
};

const NoIconHeaderLink = Template.bind({});

NoIconHeaderLink.args = {
  title: 'Cart',
  to: '/cart',
};

export default Meta;

export { IconHeaderLink, NoIconHeaderLink };
