# My Reddit App

This is a Reddit client built with React and Redux that fetches posts and comments from the Reddit JSON API. Users can search, filter, and view details for each post—including its comments—in a responsive, modern, and cohesive design.

## Technologies Used

- **React**: For building the user interface.
- **Redux & Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests to the Reddit JSON API (via a Netlify function proxy).
- **React-Markdown**: For rendering Markdown content from posts and comments.
- **Jest & React Testing Library**: For unit testing React components (React 18 doesn't have official Enzyme support).
- **Cypress**: For end-to-end testing.
- **Netlify Functions**: For proxying API requests to avoid CORS issues.
- **CSS Modules**: For component-scoped styling.

## Features

- **Responsive Design**: Works on any device from desktop to mobile.
- **Modern Browser Support**: Compatible with all modern browsers.
- **Search & Filter**: Users can search posts by keywords and filter by predefined categories (hot, new, top).
- **Detailed View**: Clicking a post shows a detailed view with full post content and comments.
- **Cohesive Design System**: Consistent look-and-feel with animations and hover transitions.
- **Error Recovery**: Clear error messages and retry options if API calls fail.
- **Optimized Performance**: With caching and best practices for high Lighthouse scores.

## Future Work

- **Dynamic Subreddit Input**: Allow users to enter a subreddit of their choice.
- **Pagination/Infinite Scrolling**: Load more posts as the user scrolls.
- **Progressive Web App (PWA)**: Enhance offline capabilities and installability.
- **CI/CD Pipeline**: Automatically deploy on GitHub branch changes.
- **Additional Unit/E2E Tests**: Increase test coverage and integration tests.
