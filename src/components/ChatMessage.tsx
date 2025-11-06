import { useState, useEffect } from 'react';
import { CheckCircle2, TrendingUp, DollarSign, Users } from 'lucide-react';
import scenariosData from '../data/scenarios.json';

interface ChatMessageProps {
  speaker: 'user' | 'agent' | 'summary';
  text: string;
  agent?: string;
  delay?: number;
  onComplete?: () => void;
  playbackSpeed?: number;
  viewMode?: 'customer' | 'bmo-team';
  customerName?: string;
  bmoTeamMember?: {
    name: string;
    role: string;
    initials: string;
  };
  summaryData?: {
    title: string;
    metrics: Array<{ icon: string; label: string; value: string }>;
  };
}

export function ChatMessage({
  speaker,
  text,
  agent,
  delay = 0,
  onComplete,
  playbackSpeed = 1,
  viewMode = 'customer',
  customerName,
  bmoTeamMember,
  summaryData
}: ChatMessageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay / playbackSpeed);

    return () => clearTimeout(showTimer);
  }, [delay, playbackSpeed]);

  useEffect(() => {
    if (!isTyping) return;

    const typingDuration = speaker === 'user'
      ? Math.min(text.length * 20, 1200) / playbackSpeed
      : Math.min(text.length * 15, 800) / playbackSpeed;

    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      setIsVisible(true);
      setDisplayedText(text);
      if (onComplete) {
        setTimeout(onComplete, 700 / playbackSpeed);
      }
    }, typingDuration);

    return () => clearTimeout(typingTimer);
  }, [isTyping, text, onComplete, playbackSpeed, speaker]);

  if (!isTyping && !isVisible) return null;

  const getUserLabel = () => {
    if (viewMode === 'bmo-team' && bmoTeamMember) {
      return bmoTeamMember.name;
    }
    return customerName || 'Customer';
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'check': return CheckCircle2;
      case 'trending': return TrendingUp;
      case 'dollar': return DollarSign;
      case 'users': return Users;
      default: return CheckCircle2;
    }
  };

  const getAgentColor = (agentName: string) => {
    const agentData = scenariosData.agents.find(a => a.name === agentName);
    return agentData?.colorClass || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  if (speaker === 'summary' && summaryData) {
    return (
      <div className="flex justify-center mb-6 animate-fadeIn mt-6">
        <div className="w-full max-w-4xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-black">{summaryData.title}</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">{text}</p>
          <div className="grid grid-cols-3 gap-4">
            {summaryData.metrics.map((metric, index) => {
              const Icon = getIcon(metric.icon);
              return (
                <div key={index} className="bg-white rounded-xl p-4 border border-green-100">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-gray-600">{metric.label}</span>
                  </div>
                  <p className="text-lg font-bold text-black">{metric.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${speaker === 'user' ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div className={`max-w-[75%] ${speaker === 'user' ? 'order-2' : 'order-1'}`}>
        {speaker === 'user' && viewMode === 'bmo-team' && bmoTeamMember && (
          <div className="text-xs text-gray-500 mb-1 font-medium text-right">
            {bmoTeamMember.name} <span className="text-gray-400">({bmoTeamMember.role})</span>
          </div>
        )}
        {speaker === 'agent' && agent && (
          <div className="text-xs text-gray-500 mb-1 font-medium">
            {agent} <span className="text-gray-400">(AI Agent)</span>
          </div>
        )}
        <div
          className={`rounded-2xl px-5 py-3 shadow-sm border-2 ${
            speaker === 'user'
              ? viewMode === 'bmo-team'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-black text-white border-black'
              : agent
              ? getAgentColor(agent)
              : 'bg-white text-black border-gray-200'
          }`}
        >
          {isTyping ? (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          ) : (
            <p className="text-sm leading-relaxed">{displayedText}</p>
          )}
        </div>
      </div>
    </div>
  );
}
