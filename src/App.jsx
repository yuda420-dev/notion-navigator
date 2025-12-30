import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown, ExternalLink, FolderOpen, FileText, Database, Star, Clock, AlertCircle, CheckCircle2, Brain, Lightbulb, DollarSign, Layout, Sparkles } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(['today', 'priorities', 'fintech']);

  const categories = {
    today: {
      name: '🆕 Added Today',
      icon: Sparkles,
      items: [
        {
          name: 'MicroGive + MicroStake',
          subtitle: 'Gamified Swipe Apps',
          status: 'New',
          built: true,
          pages: [
            { name: 'Main Page', url: 'https://www.notion.so/2d95f919770a815fb38af918d2165def', type: 'hub' },
            { name: 'Build Session', url: 'https://www.notion.so/2d95f919770a81a8815ec492b05c93d0', type: 'doc' },
            { name: 'Every.org API', url: 'https://www.notion.so/2d95f919770a8167a83ee294ae7e4e84', type: 'doc' },
          ]
        },
        {
          name: 'AI Studio Network',
          subtitle: 'Physical + Digital Spaces',
          status: 'New',
          pages: [{ name: 'Page', url: 'https://www.notion.so/2c95f919770a802fa3f4cb3bbba01de1', type: 'doc' }]
        },
        {
          name: 'Command Center',
          subtitle: 'Navigation Hub',
          status: 'New',
          pages: [{ name: 'Open in Notion', url: 'https://www.notion.so/2d95f919770a818bbe3bf0ec6c4ba3d5', type: 'hub' }]
        }
      ]
    },
    priorities: {
      name: '🔴 Active Priorities',
      icon: AlertCircle,
      items: [
        {
          name: 'Spotlight Hedge Fund',
          status: 'In Progress',
          deadline: 'Jan 15',
          priority: 'critical',
          pages: [
            { name: 'Master', url: 'https://www.notion.so/2ca5f919770a8159b122e81b38342c78', type: 'hub' },
            { name: 'Deck', url: 'https://www.notion.so/2d15f919770a81bfbc1efb59b45a171e', type: 'doc' },
            { name: 'Journal', url: 'https://www.notion.so/2d75f919770a8139ac54d9db259c55d2', type: 'doc' },
            { name: 'Methodology', url: 'https://www.notion.so/2d75f919770a81d69e88c74823ee79d3', type: 'doc' },
            { name: 'Sprint', url: 'https://www.notion.so/2ca5f919770a814a8f1fc807521ce946', type: 'tracker' },
          ]
        },
        {
          name: 'Honeymoon',
          status: 'Planning',
          deadline: 'Feb-Mar 26',
          pages: [
            { name: 'Nihi+Raja', url: 'https://www.notion.so/2ce5f919770a818a867df0b0cb90aa1c', type: 'hub' },
            { name: 'Safari Alt', url: 'https://www.notion.so/2ce5f919770a81dcbe6de066e5da9ddd', type: 'doc' },
          ]
        }
      ]
    },
    fintech: {
      name: '📱 Fintech Apps',
      icon: DollarSign,
      items: [
        {
          name: 'PixEquity',
          subtitle: 'AR Scan-to-Trade',
          status: 'Prototype',
          built: true,
          pages: [
            { name: 'Hub', url: 'https://www.notion.so/2b85f919770a80dcadd2c7670e874037', type: 'hub' },
            { name: 'Summary', url: 'https://www.notion.so/2c45f919770a80308219f6b2099f3d8a', type: 'doc' },
            { name: 'Brokerage', url: 'https://www.notion.so/2d55f919770a8100a834ce4f261f46c6', type: 'tracker' },
          ]
        },
        {
          name: 'REX',
          subtitle: 'Real Estate Exchange',
          status: "Spec'd",
          pages: [
            { name: 'Main', url: 'https://www.notion.so/2c65f919770a80b8b62ed8b0d895e43a', type: 'hub' },
          ]
        },
        {
          name: 'Street Stage',
          subtitle: 'Musician Platform',
          status: 'Prototype',
          built: true,
          pages: [
            { name: 'Launch', url: 'https://www.notion.so/2cd5f919770a8123a385e1e9fb8fe0ae', type: 'hub' },
            { name: 'Feedback', url: 'https://www.notion.so/57c7da41083c4fb0b67d238ba422d649', type: 'tracker' },
          ]
        },
        {
          name: 'ShareVoice',
          subtitle: 'Shareholder Governance',
          status: "Spec'd",
          pages: [{ name: 'Main', url: 'https://www.notion.so/2cf5f919770a811e88d4fbd56283c931', type: 'hub' }]
        },
      ]
    },
    built: {
      name: '✅ Built & Ready',
      icon: CheckCircle2,
      items: [
        { name: 'MicroGive', status: 'Built', built: true, pages: [{ name: 'Page', url: 'https://www.notion.so/2d95f919770a815fb38af918d2165def', type: 'doc' }] },
        { name: 'VocabNerd', status: 'Built', built: true, pages: [{ name: 'Page', url: 'https://www.notion.so/2cd5f919770a81f794c0c7bd2b4df9fb', type: 'doc' }] },
        { name: 'QuizGenius', status: 'Built', built: true, pages: [{ name: 'Page', url: 'https://www.notion.so/2cf5f919770a81dc8dfce04599740742', type: 'doc' }] },
        { name: 'Car Manual Bot', status: 'Built', built: true, pages: [{ name: 'Page', url: 'https://www.notion.so/2cf5f919770a8148a818c87185f6e50c', type: 'doc' }] },
      ]
    },
    knowledge: {
      name: '🧠 Knowledge',
      icon: Brain,
      items: [
        { name: 'Conversations DB', status: 'Active', pages: [{ name: 'Database', url: 'https://www.notion.so/9cf0674055b94dbdb13bf85faf296873', type: 'database' }] },
        { name: 'Knowledge System', pages: [
          { name: 'Hub', url: 'https://www.notion.so/2cd5f919770a8166bd10fcd6d0872972', type: 'hub' },
          { name: 'Consolidation', url: 'https://www.notion.so/2cd5f919770a812489a1f57a8a77b8e4', type: 'doc' },
        ]},
        { name: 'AI Tools', pages: [{ name: 'Page', url: 'https://www.notion.so/b9ca1e6c20834a8a8c79a90995b1e600', type: 'doc' }] },
        { name: 'Command Center', pages: [{ name: 'Hub', url: 'https://www.notion.so/2d95f919770a818bbe3bf0ec6c4ba3d5', type: 'hub' }] },
      ]
    },
    ideas: {
      name: '💡 Ideas',
      icon: Lightbulb,
      items: [
        { name: 'Restaurant Sub', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2c95f919770a80faa1accd5ac3e46d07', type: 'doc' }] },
        { name: 'AI Research Auto', status: "Spec'd", pages: [{ name: 'Page', url: 'https://www.notion.so/2c65f919770a802d87f9e18b203e041e', type: 'doc' }] },
        { name: 'CoachSync', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2c95f919770a80cb9832fbfcc6efdc4e', type: 'doc' }] },
        { name: 'Baby Coach AI', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2cd5f919770a81e39c65d71f3c910b72', type: 'doc' }] },
        { name: 'SkillSlots', status: "Spec'd", pages: [{ name: 'Page', url: 'https://www.notion.so/2cd5f919770a8117a0d0cb6757197277', type: 'doc' }] },
        { name: 'Lawnmower Invest', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2d55f919770a815bbb87d07b8229562f', type: 'doc' }] },
        { name: 'Scavenger Hunt', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2cd5f919770a81bd8e04cf35c05861ec', type: 'doc' }] },
        { name: 'WalkWith', status: 'Research', pages: [{ name: 'Page', url: 'https://www.notion.so/2cd5f919770a81d3b01dd95332bfc6cf', type: 'doc' }] },
      ]
    },
  };

  const toggleCategory = (key) => {
    setExpandedCategories(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };

  const getTypeIcon = (type) => {
    const icons = {
      hub: <Layout className="w-3 h-3 text-blue-400" />,
      database: <Database className="w-3 h-3 text-purple-400" />,
      tracker: <CheckCircle2 className="w-3 h-3 text-green-400" />,
    };
    return icons[type] || <FileText className="w-3 h-3 text-slate-500" />;
  };

  const getStatusColor = (status) => {
    if (status === 'New') return 'bg-pink-500/20 text-pink-300';
    if (status?.includes('Built') || status === 'Prototype' || status === 'Active') return 'bg-green-500/20 text-green-300';
    if (status?.includes('Progress') || status === 'Planning') return 'bg-yellow-500/20 text-yellow-300';
    if (status === 'Research') return 'bg-blue-500/20 text-blue-300';
    if (status === "Spec'd") return 'bg-purple-500/20 text-purple-300';
    return 'bg-slate-500/20 text-slate-400';
  };

  const allItems = Object.values(categories).flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })));
  const filteredItems = searchQuery ? allItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
  ) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-2xl p-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-white">🗺️ Notion Navigator</h1>
            <a href="https://www.notion.so/2d95f919770a818bbe3bf0ec6c4ba3d5" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm font-medium transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Notion
            </a>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="Search projects, ideas, pages..."
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { label: 'Active', value: '3', color: 'text-red-400' },
            { label: 'Built', value: '7', color: 'text-green-400' },
            { label: 'Ideas', value: '42+', color: 'text-yellow-400' },
            { label: 'Jan 15', value: '16d', color: 'text-blue-400' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700 rounded-xl p-2 text-center">
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search Results */}
        {filteredItems ? (
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-3">
            <div className="text-xs text-slate-400 mb-2">{filteredItems.length} results for "{searchQuery}"</div>
            <div className="space-y-2">
              {filteredItems.map((item, i) => (
                <div key={i} className="p-2.5 bg-slate-700/30 border border-slate-600/50 rounded-xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-medium text-white text-sm">{item.name}</span>
                    {item.status && <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(item.status)}`}>{item.status}</span>}
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {item.pages?.map((page, j) => (
                      <a key={j} href={page.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-1 rounded-lg transition-colors">
                        {getTypeIcon(page.type)} {page.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              {filteredItems.length === 0 && (
                <div className="text-center text-slate-400 py-8">No results found</div>
              )}
            </div>
          </div>
        ) : (
          /* Categories */
          <div className="space-y-2">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden">
                <button onClick={() => toggleCategory(key)}
                  className="w-full p-3 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <category.icon className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-white text-sm">{category.name}</span>
                    <span className="text-xs text-slate-500 bg-slate-700 px-1.5 py-0.5 rounded-full">{category.items.length}</span>
                  </div>
                  {expandedCategories.includes(key) ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                </button>
                {expandedCategories.includes(key) && (
                  <div className="border-t border-slate-700">
                    {category.items.map((item, i) => (
                      <div key={i} className="p-3 border-b border-slate-700/50 last:border-b-0 hover:bg-slate-700/20 transition-colors">
                        <div className="flex items-start justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-white text-sm">{item.name}</span>
                            {item.built && <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />}
                            {item.priority === 'critical' && <Star className="w-3.5 h-3.5 text-red-400 fill-red-400" />}
                          </div>
                          <div className="flex items-center gap-1.5">
                            {item.deadline && <span className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" />{item.deadline}</span>}
                            {item.status && <span className={`text-xs px-1.5 py-0.5 rounded-full ${getStatusColor(item.status)}`}>{item.status}</span>}
                          </div>
                        </div>
                        {item.subtitle && <div className="text-xs text-slate-400 mb-1.5">{item.subtitle}</div>}
                        <div className="flex gap-1.5 flex-wrap">
                          {item.pages?.map((page, j) => (
                            <a key={j} href={page.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-600/50 px-2 py-1 rounded-lg transition-colors">
                              {getTypeIcon(page.type)} {page.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 text-center text-xs text-slate-500">
          All links open in Notion • <a href="https://www.notion.so/2d95f919770a818bbe3bf0ec6c4ba3d5" className="text-blue-400 hover:text-blue-300">Command Center</a>
        </div>
      </div>
    </div>
  );
}
