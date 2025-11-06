import { useState, useEffect } from 'react';

interface ChatMessageProps {
  speaker: 'user' | 'agent';
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
  bmoTeamMember
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

    const typingDuration = Math.min(text.length * 15, 800) / playbackSpeed;
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      setIsVisible(true);
      setDisplayedText(text);
      if (onComplete) {
        setTimeout(onComplete, 700 / playbackSpeed);
      }
    }, typingDuration);

    return () => clearTimeout(typingTimer);
  }, [isTyping, text, onComplete, playbackSpeed]);

  if (!isTyping && !isVisible) return null;

  const getUserLabel = () => {
    if (viewMode === 'bmo-team' && bmoTeamMember) {
      return bmoTeamMember.name;
    }
    return customerName || 'Customer';
  };

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
          className={`rounded-2xl px-5 py-3 shadow-sm ${
            speaker === 'user'
              ? viewMode === 'bmo-team'
                ? 'bg-blue-600 text-white'
                : 'bg-black text-white'
              : 'bg-white text-black border border-gray-200'
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
