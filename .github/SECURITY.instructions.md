# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the Kevin's Food Truck website, please **DO NOT** open a public GitHub issue. Instead:

1. **Email the maintainers** with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any proof of concept

2. **Allow time for response** before public disclosure (typically 90 days)

3. **Avoid public discussion** of the vulnerability until a patch is available

## Security Best Practices for Contributors

### Handling Sensitive Data
- **Never commit** API keys, passwords, or tokens to the repository
- Use environment variables for all sensitive configuration
- Use `.env` files locally (added to `.gitignore`)
- Configure secrets in deployment platform (Netlify)

### Code Review
- Review all code for potential security issues
- Check for SQL injection vulnerabilities (if using databases)
- Validate and sanitize all user inputs
- Use HTTPS for all external API calls

### Dependencies
- Keep dependencies updated regularly
- Run `npm audit` to check for vulnerabilities
- Review security advisories for dependencies
- Use `npm ci` for deterministic installs in production

### Authentication & Authorization
- Validate form inputs on both frontend and backend
- Implement rate limiting on API endpoints
- Use secure headers (CORS, CSP, etc.)
- Protect sensitive routes with authentication

### Form Security
- Validate all form inputs server-side (not just client-side)
- Use CSRF tokens if implementing state-changing operations
- Implement reCAPTCHA for form protection (already in use)
- Sanitize email inputs before sending

### Data Protection
- Use HTTPS for all communications
- Encrypt sensitive data in transit
- Follow GDPR/privacy regulations
- Don't store unnecessary user data
- Implement secure logging (no sensitive data)

## Security Checklist for Releases

Before deploying to production:
- [ ] Run `npm audit` and fix any high/critical vulnerabilities
- [ ] Review all merged PRs for security issues
- [ ] Test form submission with various inputs
- [ ] Verify reCAPTCHA is working correctly
- [ ] Check environment variables are properly set
- [ ] Review CORS settings
- [ ] Test on different browsers and devices
- [ ] Run performance and security tests
- [ ] Create database backups (if applicable)

## Known Security Considerations

### Google reCAPTCHA
- Validates human users on form submission
- Protects against automated attacks
- Keep reCAPTCHA keys secure and rotated regularly

### Email Handling
- Nodemailer sends form submission emails
- Validate email addresses before sending
- Don't include user-submitted HTML in emails
- Use environment variables for SMTP credentials

### Third-party Services
- Google reCAPTCHA (Google's security)
- Contentful CMS (managed security)
- Netlify hosting (security handled by platform)

## Security Updates

### Staying Informed
- Watch GitHub for security advisories
- Subscribe to npm security announcements
- Monitor Node.js security releases
- Review dependency updates monthly

### Applying Updates
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies (with caution)
npm update

# Update specific package
npm install package-name@latest
```

## Compliance

### GDPR Compliance
- Collect only necessary user information
- Provide privacy policy (see Privacy.js)
- Implement data retention policies
- Allow users to request data deletion

### Email Marketing
- Implement opt-in for marketing emails
- Provide unsubscribe functionality
- Follow CAN-SPAM regulations
- Get explicit consent before sending

## Response Process

When a security issue is reported:

1. **Acknowledge** receipt within 2 business days
2. **Investigate** the vulnerability
3. **Develop** a fix or patch
4. **Test** the fix thoroughly
5. **Release** security update
6. **Notify** users of the update
7. **Credit** the reporter (if desired)

## Deployment Security

### Netlify Configuration
- Enable HTTPS (automatic with Netlify)
- Set secure headers in `netlify.toml`
- Configure environment variables securely
- Use Netlify access tokens safely
- Limit deployment access to team members

### Environment Variables
Keep secure in Netlify dashboard, not in code:
```
REACT_APP_RECAPTCHA_SITE_KEY
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
```

## Additional Resources

- [OWASP Security Guidelines](https://owasp.org)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security)
- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha)
- [Netlify Security](https://docs.netlify.com/security/overview)

---

Thank you for helping keep Kevin's Food Truck website secure!
