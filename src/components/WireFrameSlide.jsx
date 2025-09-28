import React from 'react';
import { Search, BarChart3, Settings, Play } from 'lucide-react';

const WireframeSlide = () => {
  const wireframes = [
    {
      title: "Pattern Detection",
      description: "System recognizes recurring manual trades",
      screen: (
        <div className={`${
          'bg-[#0f1419] border-[#2a3441]'
        } border-2 rounded-lg p-4 h-64`}>
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Smart Trading Assistant</span>
          </div>
          
          <div className={`${
            'bg-green-900/30 border-green-700'
          } border rounded-lg p-3 mb-3`}>
            <div className="text-green-400 font-medium mb-2">✅ Pattern Detected!</div>
            <div className="text-sm text-slate-300 mb-2">
              You've made similar trades 3 times:
            </div>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Bank Nifty CE buying at 9:30 AM</li>
              <li>• When RSI &lt; 30</li>
              <li>• Exit at 20% profit or 3:15 PM</li>
            </ul>
            <div className="text-sm text-blue-400 mt-2">
              Success Rate: 67% (2/3 trades)
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded">
              View Details
            </button>
            <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded">
              Automate This?
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Backtest Preview",
      description: "Shows potential performance of automation",
      screen: (
        <div className={`${
          'bg-[#0f1419] border-[#2a3441]'
        } border-2 rounded-lg p-4 h-64`}>
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-green-500" />
            <span className="font-medium">Strategy Backtest Results</span>
          </div>
          
          <div className="mb-3">
            <div className="text-sm font-medium mb-1">Strategy: "RSI Bank Nifty CE"</div>
            <div className="text-xs text-slate-400">Period: Last 6 months</div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Total Return:</span>
              <span className="text-green-400 font-medium">+23.4%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Win Rate:</span>
              <span className="text-green-400 font-medium">72%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Max Drawdown:</span>
              <span className="text-red-400 font-medium">-8.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Avg Trade:</span>
              <span className="text-blue-400 font-medium">+1.2%</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded">
              📊 View Chart
            </button>
            <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded">
              Start Paper Trading
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Automation Setup",
      description: "Configure and deploy the automated strategy",
      screen: (
        <div className={`${
          'bg-[#0f1419] border-[#2a3441]'
        } border-2 rounded-lg p-4 h-64 overflow-y-auto`}>
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Setup Automated Strategy</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="text-xs text-slate-400 mb-1">Strategy Name:</div>
              <div className="text-sm font-medium">RSI Bank Nifty CE</div>
            </div>
            
            <div>
              <div className="text-xs text-slate-400 mb-2">Entry Conditions:</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Time: 9:30 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>RSI (14) &lt; 30</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Bank Nifty trend: Bullish</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-slate-400 mb-2">Exit Conditions:</div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Profit Target: 20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Stop Loss: 10%</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-xs text-slate-400 mb-1">Position Size:</div>
              <div className="text-sm">₹10,000 per trade</div>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-yellow-600 text-white text-xs py-2 px-3 rounded">
              Start Paper Trading
            </button>
            <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded">
              Go Live
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-6xl w-full animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          User Experience Wireframes
        </h1>
        <p className="text-xl text-slate-400">
          Interactive mockups showing the Smart Trading Assistant user journey
        </p>
      </div>

      {/* Wireframe Flow */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {wireframes.map((wireframe, index) => (
          <div key={index} className="space-y-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold mb-2 mx-auto">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{wireframe.title}</h3>
              <p className="text-sm text-slate-400">{wireframe.description}</p>
            </div>
            {wireframe.screen}
          </div>
        ))}
      </div>

      {/* User Flow Description */}
      <div className={`${
        'bg-[#1a2332] border-[#2a3441]'
      } rounded-2xl border p-6 mb-8`}>
        <h3 className="text-2xl font-semibold mb-4">User Experience Flow</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-400 mb-3">Discovery Phase</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• User makes manual trades as usual</li>
              <li>• System silently analyzes patterns in background</li>
              <li>• Non-intrusive notification after pattern detection</li>
              <li>• Clear explanation of identified pattern</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-400 mb-3">Conversion Phase</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Immediate backtest results show potential</li>
              <li>• Risk-free paper trading option first</li>
              <li>• Simple automation setup with clear controls</li>
              <li>• Easy override and modification options</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className={`${
        'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700'
      } rounded-xl border p-6`}>
        <h3 className="text-xl font-semibold mb-4">Design Principles</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-medium text-sm">Non-Intrusive</div>
            <div className="text-xs text-slate-400">Suggestions appear naturally</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="font-medium text-sm">Data-Driven</div>
            <div className="text-xs text-slate-400">Clear performance metrics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <div className="font-medium text-sm">Safety First</div>
            <div className="text-xs text-slate-400">Paper trading before live</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-medium text-sm">One-Click Setup</div>
            <div className="text-xs text-slate-400">Minimal configuration needed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeSlide;