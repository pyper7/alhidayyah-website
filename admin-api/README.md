# Al-Hidayyah Admin API

ASP.NET Core Web API for managing Al-Hidayyah Islamic Foundation website content.

## Features

- ✅ JWT Authentication
- ✅ Content Management (CRUD operations)
- ✅ User Management
- ✅ Swagger/OpenAPI documentation
- ✅ CORS support for admin panel
- ✅ In-memory database (can be upgraded to SQL Server/PostgreSQL)

## Prerequisites

- .NET 8.0 SDK or later
- Visual Studio 2022, VS Code, or Rider

## Setup

1. **Navigate to the API directory:**
```bash
cd admin-api/AlHidayyahAdmin.API
```

2. **Restore packages:**
```bash
dotnet restore
```

3. **Update appsettings.json:**
```json
{
  "Jwt": {
    "Secret": "your-super-secret-key-minimum-32-characters-long-change-this",
    "Issuer": "AlHidayyahAdmin",
    "Audience": "AlHidayyahAdmin"
  },
  "AllowedOrigins": "http://localhost:3001,https://your-admin-panel-domain.com"
}
```

Generate a secure JWT secret:
```bash
openssl rand -base64 32
```

4. **Run the application:**
```bash
dotnet run
```

The API will be available at:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`
- Swagger UI: `http://localhost:5000/swagger`

## Default Admin Credentials

When you first run the application, a default admin user is created:

- **Email**: `admin@alhidayyah.org`
- **Password**: `admin123`

⚠️ **IMPORTANT**: Change the default password immediately after first login!

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login and get JWT token
- `POST /api/auth/change-password` - Change password (requires auth)
- `GET /api/auth/me` - Get current user info (requires auth)

### Content Management

- `GET /api/content` - Get all content (public)
- `PUT /api/content` - Update all content (requires auth)
- `GET /api/content/{section}` - Get specific section (public)
- `PUT /api/content/{section}` - Update specific section (requires auth)

Sections: `hero`, `services`, `about`, `dawah`, `orphanage`, `school`

### User Management

- `GET /api/users` - Get all users (requires auth)
- `GET /api/users/{id}` - Get user by ID (requires auth)
- `POST /api/users` - Create new user (requires auth)
- `DELETE /api/users/{id}` - Delete user (requires auth)

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Example Login Request

```bash
curl -X POST https://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@alhidayyah.org",
    "password": "admin123"
  }'
```

### Example Authenticated Request

```bash
curl -X GET https://localhost:5001/api/content \
  -H "Authorization: Bearer <your-token>"
```

## Testing with Swagger

1. Start the application
2. Navigate to `http://localhost:5000/swagger`
3. Click "Authorize" button
4. Enter: `Bearer <your-jwt-token>`
5. Test the endpoints

## Database

Currently uses in-memory database for users. To upgrade to a real database:

1. Install Entity Framework Core package:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
# or
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

2. Update `ApplicationDbContext` to use SQL Server or PostgreSQL
3. Add connection string to `appsettings.json`
4. Run migrations:
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Deployment

### Publish to Folder

```bash
dotnet publish -c Release -o ./publish
```

### Docker

Create `Dockerfile`:

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["AlHidayyahAdmin.API.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AlHidayyahAdmin.API.dll"]
```

Build and run:
```bash
docker build -t alhidayyah-admin-api .
docker run -p 5000:80 alhidayyah-admin-api
```

## Security Considerations

1. **Change Default Password**: Immediately change the default admin password
2. **JWT Secret**: Use a strong, random secret (minimum 32 characters)
3. **HTTPS**: Always use HTTPS in production
4. **CORS**: Configure allowed origins properly
5. **Database**: Replace in-memory database with a secure database in production
6. **Rate Limiting**: Consider implementing rate limiting
7. **Input Validation**: Add more comprehensive input validation

## Content Storage

Content is stored in `Data/content.json` file. This can be:
- Kept as file-based storage
- Migrated to a database
- Integrated with a cloud storage service

## Integration with Main Website

The main Next.js website can fetch content from this API:

```typescript
// In your Next.js app
const response = await fetch('https://api.yourdomain.com/api/content');
const content = await response.json();
```

## Support

For issues or questions, please contact the development team.

