# Development Guide

## Quick Start

### Prerequisites
- Node.js 14.0 or higher
- npm 6.0 or higher
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/Amato1891/kevins-food-truck-react.git
cd kevins-food-truck-react

# Install dependencies
npm install

# Create .env file with required variables
cp .env.example .env  # (if available, otherwise create manually)
```

### Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
REACT_APP_API_URL=http://localhost:3000
REACT_APP_CONTENTFUL_SPACE_ID=your_contentful_space_id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

**Note**: You'll need to obtain these from:
- **reCAPTCHA**: Google Cloud Console
- **Contentful**: Contentful dashboard (if using)

### Running Locally

**Option 1: React Dev Server Only**
```bash
npm run develop
# Opens at http://localhost:3000
```

**Option 2: Full Stack (React + Express)**
```bash
# Terminal 1: React development server
npm run develop

# Terminal 2: Express backend server
npm start
```

## Available Scripts

### Development
```bash
npm run develop     # Start React dev server with hot reload
npm start           # Start Express backend server
```

### Production
```bash
npm run build       # Build React app for production
npm run build       # Then deploy the build/ folder
```

### Testing & Quality
```bash
npm test            # Run Jest tests in watch mode
npm run eject       # Eject from create-react-app (use with caution)
```

## Project Structure

```
.
├── src/
│   ├── components/          # React components
│   ├── assets/              # Images, CSS, fonts
│   ├── data/                # JSON data files (menu, etc.)
│   ├── App.js               # Root App component
│   └── index.js             # React entry point
├── public/                  # Static files
├── netlify/
│   └── functions/           # Serverless functions
├── server.js                # Express backend
├── package.json             # Dependencies & scripts
└── webpack.config.js        # Webpack configuration
```

## Component Development

### Creating a New Component

1. **Create the component file** in `src/components/`:
   ```javascript
   // src/components/YourComponent.js
   import React from 'react';
   
   function YourComponent() {
     return (
       <div className="your-component">
         {/* Component content */}
       </div>
     );
   }
   
   export default YourComponent;
   ```

2. **Add styling** in `src/assets/css/style.css` or create component-specific CSS

3. **Import and use** in your parent component:
   ```javascript
   import YourComponent from './components/YourComponent';
   ```

### Component Best Practices
- Keep components focused on a single responsibility
- Use functional components with hooks
- Extract reusable logic into custom hooks
- Add PropTypes for type checking
- Keep components under 300 lines of code
- Document complex logic with comments

## Working with Forms

### Form Submission Flow

1. User fills form on `BookUs.js`
2. Form data collected
3. reCAPTCHA token obtained
4. Data sent to backend via Axios
5. Backend validates with Google reCAPTCHA API
6. Email sent via Nodemailer
7. Response returned to frontend

### Testing Forms Locally

```javascript
// Make sure your .env has:
REACT_APP_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
// This is Google's test key (works without real validation)
```

## Working with Menu Data

Menu data is stored in `src/data/menu.json`:

```json
{
  "categories": [
    {
      "name": "Grilled Items",
      "items": [
        {
          "name": "BBQ Chicken",
          "price": "$15.99",
          "description": "..."
        }
      ]
    }
  ]
}
```

Update this file to manage menu items. The `Menu.js` component reads and displays this data.

## CSS & Styling

### Available Tools
- **Bootstrap 5**: Pre-built components and grid
- **Animate.css**: Animation classes
- **Custom CSS**: `src/assets/css/style.css`

### Bootstrap Usage
```javascript
import { Container, Row, Col, Button } from 'react-bootstrap';

<Container>
  <Row>
    <Col md={6}>Content</Col>
  </Row>
</Container>
```

### Custom Classes
Keep custom CSS organized and prefixed:
```css
.food-truck-hero { }
.menu-section { }
.booking-form { }
```

## Debugging

### React DevTools
- Install React DevTools browser extension
- Inspect components and their state/props
- Profile component performance

### Redux DevTools (if using Redux)
- Install Redux DevTools extension
- View action dispatches and state changes

### Console Debugging
```javascript
console.log('Debug:', variable);
console.warn('Warning:', message);
console.error('Error:', message);
```

## Performance Optimization

### Code Splitting
Use React.lazy for component code splitting:
```javascript
const Menu = React.lazy(() => import('./components/Menu'));
```

### Image Optimization
- Use appropriate image formats (WebP with fallbacks)
- Optimize image size before uploading
- Use responsive images with srcset

### Bundle Analysis
```bash
npm run build
# Check build/ folder for size
```

## Browser Support

Target browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Test responsiveness:
- Desktop: 1920px, 1440px, 1024px
- Tablet: 768px, 834px
- Mobile: 375px, 414px, 640px

## Deployment

### Building for Production
```bash
npm run build
# Creates optimized build/ folder
```

### Deploying to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard
5. Netlify automatically deploys on push to main

## Troubleshooting

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Change port for React dev server
PORT=3001 npm run develop

# Or kill the process using port 3000
# On Windows: netstat -ano | findstr :3000
# On Mac/Linux: lsof -i :3000
```

### Build Fails
```bash
# Check for errors
npm run build
# Fix any TypeScript/linting errors
# Clear cache
npm cache clean --force
```

### reCAPTCHA Not Working
- Verify REACT_APP_RECAPTCHA_SITE_KEY is set
- Check reCAPTCHA settings in Google Cloud Console
- Ensure domain is whitelisted in reCAPTCHA settings

## Additional Resources

- [React Documentation](https://react.dev)
- [React Bootstrap](https://react-bootstrap.github.io)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [Express.js Guide](https://expressjs.com)
- [Netlify Documentation](https://docs.netlify.com)

## Getting Help

- Check existing issues on GitHub
- Review the main README.md
- Open a new issue with detailed information
- Check discussions for community help
