# How to Start the Server

## Step 1: Open Terminal/PowerShell

Navigate to the project directory:
```bash
cd C:\Users\SulaimonFasasi\source\repos\Imaansoft\alhidayyah-website
```

## Step 2: Start the Development Server

Run this command:
```bash
npm run dev
```

## Step 3: Wait for Server to Start

You should see output like:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.5s
```

## Step 4: Open Browser

Once you see "Ready", open your browser and go to:
```
http://localhost:3000
```

## Troubleshooting

### If you see "Port 3000 is already in use"

1. Find what's using port 3000:
   ```bash
   netstat -ano | findstr :3000
   ```

2. Kill the process (replace PID with the number from above):
   ```bash
   taskkill /PID <PID> /F
   ```

3. Or use a different port:
   ```bash
   npm run dev -- -p 3001
   ```

### If you see build errors

1. Delete `.next` folder:
   ```bash
   rmdir /s /q .next
   ```

2. Delete `node_modules`:
   ```bash
   rmdir /s /q node_modules
   ```

3. Reinstall:
   ```bash
   npm install
   npm run dev
   ```

### If the page is blank

- Check the browser console (F12) for errors
- Check the terminal for error messages
- Make sure `data/content.json` exists

## What Should Work

✅ Homepage loads at http://localhost:3000
✅ Navigation menu appears
✅ All sections display content
✅ Pages are accessible (/about, /contact, etc.)

## Need Help?

Check the terminal output for specific error messages and share them.

