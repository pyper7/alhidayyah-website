# Admin Guide

## Getting Started

### Default Admin Credentials

When you first run the application, a default admin user is automatically created:

- **Email**: `admin@alhidayyah.org`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change the default password immediately after first login!

## Accessing the Admin Panel

1. Navigate to `/admin/login` on your website
2. Enter your admin credentials
3. You'll be redirected to the admin dashboard

## Admin Features

### 1. Content Management (`/admin/content`)

Manage all website content including:

- **Hero Section**: Main title, subtitle, and description
- **Services**: Edit Dawah, Orphanage, and School service descriptions
- **About Section**: Update About Us title, subtitle, vision, and mission statements

**How to use:**
1. Go to "Manage Content" in the admin dashboard
2. Edit any field you want to change
3. Click "Save Changes" to update the website
4. Changes are reflected immediately on the frontend

### 2. User Management (`/admin/users`)

- **Add New Users**: Create additional admin accounts
- **Delete Users**: Remove admin users (cannot delete your own account)

**How to add a user:**
1. Go to "Users" in the admin dashboard
2. Fill in the form:
   - Name
   - Email
   - Password (minimum 6 characters)
3. Click "Create User"

## Security Best Practices

1. **Change Default Password**: Immediately change the default admin password
2. **Use Strong Passwords**: Use complex passwords for all admin accounts
3. **Limit Admin Access**: Only create admin accounts for trusted users
4. **Environment Variables**: Set a strong `NEXTAUTH_SECRET` in production

## Setting Up Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Generate a secure secret:
```bash
openssl rand -base64 32
```

3. Update `.env.local` with your secret:
```
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000
```

For production, set:
```
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-production-secret
```

## Data Storage

Currently, content and users are stored in JSON files:
- `data/content.json` - Website content
- `data/users.json` - Admin users

These files are created automatically on first use.

## Troubleshooting

### Can't log in?
- Verify you're using the correct email and password
- Check that the `data/users.json` file exists
- Try resetting by deleting `data/users.json` (this will recreate the default admin)

### Changes not saving?
- Check browser console for errors
- Verify you're logged in as admin
- Check server logs for API errors

### Forgot password?
Currently, password reset requires manual intervention. You can:
1. Delete `data/users.json`
2. Restart the server (default admin will be recreated)
3. Log in with default credentials and change password

## Future Enhancements

Consider adding:
- Password reset functionality
- Role-based permissions
- Content versioning/history
- Image upload for content
- Database integration (PostgreSQL, MongoDB, etc.)

