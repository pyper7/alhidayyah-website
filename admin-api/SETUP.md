# Quick Setup Guide

## Step 1: Install .NET 8.0 SDK

Download and install from: https://dotnet.microsoft.com/download/dotnet/8.0

Verify installation:
```bash
dotnet --version
```

## Step 2: Navigate to API Directory

```bash
cd admin-api/AlHidayyahAdmin.API
```

## Step 3: Restore Dependencies

```bash
dotnet restore
```

## Step 4: Configure Settings

Edit `appsettings.json` and set a secure JWT secret:

```json
{
  "Jwt": {
    "Secret": "your-super-secret-key-minimum-32-characters-long"
  }
}
```

Generate a secure key:
```bash
openssl rand -base64 32
```

## Step 5: Run the API

```bash
dotnet run
```

The API will start at:
- Swagger UI: http://localhost:5000/swagger
- API Base: http://localhost:5000/api

## Step 6: Test Login

1. Open Swagger UI: http://localhost:5000/swagger
2. Find `POST /api/auth/login`
3. Click "Try it out"
4. Use default credentials:
   ```json
   {
     "email": "admin@alhidayyah.org",
     "password": "admin123"
   }
   ```
5. Copy the token from the response
6. Click "Authorize" button at the top
7. Enter: `Bearer <your-token>`
8. Now you can test protected endpoints

## Next Steps

- Build your admin panel frontend (Next.js, React, etc.)
- Connect it to this API
- Update CORS settings in `appsettings.json` with your frontend URL

