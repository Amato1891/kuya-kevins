# Contributing to Kevin's Food Truck Website

Thank you for your interest in contributing to the Kevin's Food Truck website! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development Setup

1. **Fork the Repository**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/kevins-food-truck-react.git
   cd kevins-food-truck-react
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/Amato1891/kevins-food-truck-react.git
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_key
   REACT_APP_API_URL=http://localhost:3000
   ```

6. **Start Development Server**
   ```bash
   npm run develop    # Start React dev server (port 3000)
   npm start          # In another terminal, start Express server
   ```

## Development Workflow

### Creating a Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - CSS/styling changes
- `refactor/` - Code refactoring

### Making Changes

1. **Make Your Changes**
   - Keep commits small and focused
   - Write clear, descriptive commit messages
   - Test your changes locally

2. **Write Meaningful Commits**
   ```bash
   git commit -m "feat: add new menu section component"
   git commit -m "fix: resolve responsive layout issue on mobile"
   ```

3. **Keep Your Branch Updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Testing

Before submitting a PR, ensure:
- No console errors or warnings
- Application runs without crashes
- Changes work on mobile and desktop views
- Form submissions work properly
- reCAPTCHA validation functions correctly

```bash
npm test              # Run tests
npm run build         # Build for production
```

## Submitting a Pull Request

1. **Push Your Changes**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to GitHub and click "New Pull Request"
   - Compare your branch with `main`
   - Fill out the PR template completely
   - Reference any related issues (#123)

3. **PR Requirements**
   - Clear, descriptive title
   - Detailed description of changes
   - Screenshots/videos for UI changes
   - Reference to related issues
   - All tests passing

## Code Standards

### File Organization
- Keep components focused and single-purpose
- Use descriptive names for functions and variables
- Place related files together in appropriate directories
- Keep component files under 300 lines when possible

### CSS Guidelines
- Use Bootstrap classes when available
- Keep custom CSS organized in `/src/assets/css/`
- Use meaningful class names
- Avoid inline styles in components

### React Best Practices
- Functional components with hooks
- Proper prop validation
- Extract reusable logic into custom hooks
- Use meaningful component names (PascalCase)
- Add comments for complex logic

### JavaScript
- Use ES6+ syntax
- Const/let instead of var
- Arrow functions for consistency
- Meaningful variable names

## Commit Message Guidelines

Use conventional commits format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning
- `refactor`: Code change without feature/bug fix
- `perf`: Code change for performance improvement
- `test`: Adding or updating tests

**Example:**
```
feat(components): add new social media links component

Add a new component to display social media links in the footer
section. Includes icons for Instagram, Facebook, and Twitter.

Fixes #45
```

## Issue Guidelines

### Bug Reports
Include:
- Clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/device information

### Feature Requests
Include:
- Clear description of the desired feature
- Use cases and benefits
- Possible implementation approach
- Any related features or issues

## Code Review Process

1. **Initial Review**: Project maintainer reviews PR
2. **Feedback**: Comments or requests for changes
3. **Revisions**: Update PR based on feedback
4. **Approval**: PR gets approved
5. **Merge**: PR is merged into main branch

## Questions or Need Help?

- Open an issue for questions
- Check existing issues and PRs first
- Be respectful and constructive

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

Thank you for contributing to making Kevin's Food Truck website even better!
