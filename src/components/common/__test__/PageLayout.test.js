import React from 'react';
import { render, screen } from '@testing-library/react';
import PageLayout from '../PageLayout';

describe('PageLayout component', () => {
  it('should render Navbar with left and right content, and children correctly', () => {
    render(
      <PageLayout
        leftContent={<div data-testid="left-content">Left Content</div>}
        rightContent={<div data-testid="right-content">Right Content</div>}
      >
        <div data-testid="children-content">Main Content</div>
      </PageLayout>
    );

    const leftContent = screen.getByTestId('left-content');
    const rightContent = screen.getByTestId('right-content');
    const childrenContent = screen.getByTestId('children-content');

    expect(leftContent).toBeInTheDocument();
    expect(leftContent).toHaveTextContent('Left Content');
    expect(rightContent).toBeInTheDocument();
    expect(rightContent).toHaveTextContent('Right Content');
    expect(childrenContent).toBeInTheDocument();
    expect(childrenContent).toHaveTextContent('Main Content');
  });
});