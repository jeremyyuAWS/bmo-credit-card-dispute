import { ShieldAlert, MessageSquare, CheckCircle, Scale, DollarSign, RefreshCw, Brain } from 'lucide-react';
import scenariosData from '../data/scenarios.json';

interface AgentTimelineProps {
  activeAgent: string | null;
  isComplete: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  'shield-alert': ShieldAlert,
  'message-square': MessageSquare,
  'check-circle': CheckCircle,
  'scale': Scale,
  'dollar-sign': DollarSign,
  'refresh-cw': RefreshCw,
  'brain': Brain,
};

export function AgentTimeline({ activeAgent, isComplete }: AgentTimelineProps) {
  const agents = scenariosData.agents;

  const getAgentStatus = (agentName: string) => {
    if (isComplete) return 'completed';
    if (activeAgent === agentName) return 'active';

    const currentAgentIndex = agents.findIndex(a => a.name === activeAgent);
    const agentIndex = agents.findIndex(a => a.name === agentName);

    if (currentAgentIndex === -1) return 'pending';
    return agentIndex < currentAgentIndex ? 'completed' : 'pending';
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="border-b border-gray-200 px-8 py-6">
        <h2 className="text-2xl font-semibold text-black">Agent Orchestration</h2>
        <p className="text-sm text-gray-600 mt-1">Watch the AI agents work in sequence</p>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="space-y-6">
          {agents.map((agent, index) => {
            const Icon = iconMap[agent.icon];
            const status = getAgentStatus(agent.name);

            return (
              <div key={agent.id} className="relative">
                {index < agents.length - 1 && (
                  <div
                    className={`absolute left-[21px] top-[48px] w-[2px] h-[40px] transition-colors duration-1000 ease-in-out ${
                      status === 'completed' ? 'bg-gray-900' : 'bg-gray-200'
                    }`}
                  />
                )}

                <div
                  className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-700 ease-in-out ${
                    status === 'active'
                      ? 'bg-gray-900 text-white shadow-md'
                      : status === 'completed'
                      ? 'bg-gray-50 text-black'
                      : 'bg-white text-gray-400'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                      status === 'active'
                        ? 'bg-white text-gray-900'
                        : status === 'completed'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-semibold ${status === 'pending' ? 'text-gray-400' : ''}`}>
                      {agent.name}
                    </h3>
                    <p className={`text-sm mt-1 ${status === 'active' ? 'text-gray-200' : status === 'completed' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {agent.description}
                    </p>

                    {status === 'active' && (
                      <div className="animate-fadeIn">
                        <div className="flex items-center space-x-2 mt-3">
                          <div className="w-2 h-2 bg-white rounded-full animate-smooth-pulse"></div>
                          <span className="text-xs text-gray-200">Processing...</span>
                        </div>
                        <div className="mt-3 p-3 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
                          <p className="text-xs text-gray-200 leading-relaxed">{agent.reasoning}</p>
                        </div>
                      </div>
                    )}

                    {status === 'completed' && (
                      <div className="flex items-center space-x-2 mt-3 animate-fadeIn">
                        <CheckCircle className="w-4 h-4 text-gray-900" />
                        <span className="text-xs text-gray-600">Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {isComplete && (
          <div className="mt-8 p-6 bg-black text-white rounded-2xl text-center animate-fadeIn">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">All Agents Completed</h3>
            <p className="text-sm text-gray-300">Dispute resolved in under 2 minutes</p>
          </div>
        )}
      </div>
    </div>
  );
}
