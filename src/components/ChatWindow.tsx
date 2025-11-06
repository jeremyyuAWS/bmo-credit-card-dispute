import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { AgentCard } from './AgentCard';
import scenariosData from '../data/scenarios.json';

interface Message {
  agent?: string;
  speaker: string;
  text: string;
  delay?: number;
}

interface ChatWindowProps {
  conversation: Message[];
  onAgentChange: (agent: string | null) => void;
  onComplete: () => void;
  isActive: boolean;
  playbackSpeed?: number;
  viewMode?: 'customer' | 'bmo-team';
  customerName?: string;
  bmoTeamMember?: {
    name: string;
    role: string;
    initials: string;
  };
}

export function ChatWindow({
  conversation,
  onAgentChange,
  onComplete,
  isActive,
  playbackSpeed = 1,
  viewMode = 'customer',
  customerName,
  bmoTeamMember
}: ChatWindowProps) {
  const [messages, setMessages] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showingAgent, setShowingAgent] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showingAgent]);

  useEffect(() => {
    if (isActive && !hasStarted) {
      setMessages([0]);
      setCurrentIndex(0);
      setHasStarted(true);
      const firstMessage = conversation[0];
      if (firstMessage?.agent) {
        setShowingAgent(firstMessage.agent);
        onAgentChange(firstMessage.agent);
      }
    }

    if (!isActive && hasStarted) {
      setMessages([]);
      setCurrentIndex(0);
      setHasStarted(false);
      setShowingAgent(null);
      onAgentChange(null);
    }
  }, [isActive, hasStarted, conversation, onAgentChange]);

  const handleMessageComplete = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < conversation.length) {
      const nextMessage = conversation[nextIndex];

      if (nextMessage?.agent && nextMessage.agent !== showingAgent) {
        setShowingAgent(nextMessage.agent);
        onAgentChange(nextMessage.agent);
        setTimeout(() => {
          setCurrentIndex(nextIndex);
          setMessages(prev => [...prev, nextIndex]);
        }, 800 / playbackSpeed);
      } else {
        setCurrentIndex(nextIndex);
        setMessages(prev => [...prev, nextIndex]);
        if (nextMessage?.agent) {
          onAgentChange(nextMessage.agent);
        }
      }
    } else {
      onAgentChange(null);
      setTimeout(() => {
        onComplete();
      }, 1000 / playbackSpeed);
    }
  };

  const getAgentReasoning = (agentName: string) => {
    const agent = scenariosData.agents.find(a => a.name === agentName);
    return agent?.reasoning;
  };

  const renderMessages = () => {
    const elements: JSX.Element[] = [];
    let lastAgent: string | null = null;

    messages.forEach((index, arrayIndex) => {
      const msg = conversation[index];
      if (!msg) return;

      const isLast = arrayIndex === messages.length - 1;

      if (msg.agent && msg.agent !== lastAgent) {
        elements.push(
          <AgentCard
            key={`agent-${index}`}
            agentName={msg.agent}
            reasoning={getAgentReasoning(msg.agent)}
          />
        );
        lastAgent = msg.agent;
      }

      elements.push(
        <ChatMessage
          key={`msg-${index}`}
          speaker={msg.speaker as 'user' | 'agent'}
          text={msg.text}
          agent={msg.agent}
          delay={isLast ? msg.delay || 0 : 0}
          onComplete={isLast ? handleMessageComplete : undefined}
          playbackSpeed={playbackSpeed}
          viewMode={viewMode}
          customerName={customerName}
          bmoTeamMember={bmoTeamMember}
        />
      );
    });

    if (showingAgent && (!messages.length || conversation[messages[messages.length - 1]]?.agent !== showingAgent)) {
      elements.push(
        <AgentCard
          key={`agent-upcoming-${showingAgent}`}
          agentName={showingAgent}
          reasoning={getAgentReasoning(showingAgent)}
        />
      );
    }

    return elements;
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {renderMessages()}
          <div ref={chatEndRef} />
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-6 py-3">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 text-center">
            Simulated conversation powered by Lyzr Agentic AI
          </p>
        </div>
      </div>
    </div>
  );
}
