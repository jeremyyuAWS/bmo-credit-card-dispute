import { ShieldAlert, MessageSquare, CheckCircle, Scale, DollarSign, RefreshCw, Brain } from 'lucide-react';
import scenariosData from '../data/scenarios.json';

interface AgentPanelProps {
  activeAgent: string | null;
}

export function AgentPanel({ activeAgent }: AgentPanelProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-alert': return ShieldAlert;
      case 'message-square': return MessageSquare;
      case 'check-circle': return CheckCircle;
      case 'scale': return Scale;
      case 'dollar-sign': return DollarSign;
      case 'refresh-cw': return RefreshCw;
      case 'brain': return Brain;
      default: return CheckCircle;
    }
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-black mb-1">AI Agents</h3>
        <p className="text-xs text-gray-500">7 specialized agents working together</p>
      </div>

      <div className="space-y-2">
        {scenariosData.agents.map((agent) => {
          const Icon = getIcon(agent.icon);
          const isActive = activeAgent === agent.name;

          return (
            <div
              key={agent.id}
              className={`rounded-xl p-3 border-2 transition-all ${
                isActive
                  ? `${agent.colorClass} border-current shadow-md scale-105`
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-2">
                <div className={`flex-shrink-0 ${isActive ? '' : 'opacity-50'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-bold ${isActive ? 'text-current' : 'text-black'}`}>
                    {agent.name}
                  </div>
                  <div className={`text-xs mt-0.5 ${isActive ? 'text-current opacity-90' : 'text-gray-600'}`}>
                    {agent.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
