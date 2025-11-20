import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';

interface Message {
  agent?: string;
  speaker: string;
  text: string;
  delay?: number;
  summaryData?: {
    title: string;
    metrics: Array<{ icon: string; label: string; value: string }>;
  };
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
  priorityAgents?: string[];
}

export function ChatWindow({
  conversation,
  onAgentChange,
  onComplete,
  isActive,
  playbackSpeed = 1,
  viewMode = 'customer',
  customerName,
  bmoTeamMember,
  priorityAgents = []
}: ChatWindowProps) {
  const [messages, setMessages] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showingAgent, setShowingAgent] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef(conversation);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollToBottom = () => {
        scrollContainerRef.current?.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      };

      scrollToBottom();
      const timeoutId = setTimeout(scrollToBottom, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [messages, showingAgent, isActive]);

  useEffect(() => {
    conversationRef.current = conversation;
    setMessages([]);
    setCurrentIndex(0);
    setHasStarted(false);
    setShowingAgent(null);
    onAgentChange(null);
  }, [conversation, onAgentChange]);

  useEffect(() => {
    if (!isActive && !hasStarted) {
      setMessages([]);
      setCurrentIndex(0);
      setHasStarted(false);
      setShowingAgent(null);
    }
  }, [isActive, hasStarted]);

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
  }, [isActive, hasStarted, conversation, onAgentChange]);

  const handleMessageComplete = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < conversation.length) {
      const nextMessage = conversation[nextIndex];
      const currentMessage = conversation[currentIndex];

      if (nextMessage?.agent && nextMessage.agent !== currentMessage?.agent) {
        setShowingAgent(nextMessage.agent);
        onAgentChange(nextMessage.agent);
        setTimeout(() => {
          setCurrentIndex(nextIndex);
          setMessages(prev => prev.includes(nextIndex) ? prev : [...prev, nextIndex]);
        }, 800 / playbackSpeed);
      } else {
        setCurrentIndex(nextIndex);
        setMessages(prev => prev.includes(nextIndex) ? prev : [...prev, nextIndex]);
        if (nextMessage?.agent) {
          setShowingAgent(nextMessage.agent);
          onAgentChange(nextMessage.agent);
        }
      }
    } else {
      onAgentChange(null);
      setShowingAgent(null);
      setTimeout(() => {
        onComplete();
      }, 1000 / playbackSpeed);
    }
  };

  const renderMessages = () => {
    const elements: JSX.Element[] = [];

    messages.forEach((index, arrayIndex) => {
      const msg = conversation[index];
      if (!msg) return;

      const isLast = arrayIndex === messages.length - 1;

      elements.push(
        <ChatMessage
          key={`msg-${index}`}
          speaker={msg.speaker as 'user' | 'agent' | 'summary'}
          text={msg.text}
          agent={msg.agent}
          delay={isLast ? msg.delay || 0 : 0}
          onComplete={isLast ? handleMessageComplete : undefined}
          playbackSpeed={playbackSpeed}
          isActive={isActive}
          viewMode={viewMode}
          customerName={customerName}
          bmoTeamMember={bmoTeamMember}
          summaryData={msg.summaryData}
        />
      );
    });

    return elements;
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-6 py-8">
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
