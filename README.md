# Notion Navigator

Your personal workspace navigation hub. Deploy once, access forever.

## Quick Deploy to Vercel

### Option 1: GitHub → Vercel (Recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repo
4. Deploy (zero config needed)

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd notion-navigator
vercel
```

## Local Development
```bash
npm install
npm run dev
```

## Updating Links

Edit `src/App.jsx` → find the `categories` object → add/modify entries.

Each item follows this structure:
```js
{
  name: 'Project Name',
  subtitle: 'Short description',
  status: 'Built', // or 'In Progress', 'Research', "Spec'd", 'New'
  built: true, // shows green checkmark
  priority: 'critical', // shows red star
  deadline: 'Jan 15',
  pages: [
    { name: 'Link Text', url: 'https://notion.so/...', type: 'hub' }
    // types: 'hub', 'doc', 'database', 'tracker'
  ]
}
```

## Auto-Sync with Notion (Future)

To make this pull from Notion automatically:
1. Create a Notion integration
2. Add API calls to fetch from Conversations DB
3. Rebuild on Vercel with webhook trigger

Let me know if you want me to build this.
