import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { ChatWindow } from './components/ChatWindow';
import { ScenarioSelector } from './components/ScenarioSelector';
import { WelcomeModal } from './components/WelcomeModal';
import { HITLFeedbackHub } from './components/HITLFeedbackHub';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ResponsibleAITab } from './components/ResponsibleAITab';
import { LyzrAgents } from './components/LyzrAgents';
import { AgentConfiguration } from './components/AgentConfiguration';
import { StrategicAdvisor } from './components/StrategicAdvisor';
import scenariosData from './data/scenarios.json';

function App() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(scenariosData.scenarios[0].id);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('live-demo');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [pauseRequested, setPauseRequested] = useState(false);

  const currentScenario = scenariosData.scenarios.find(s => s.id === selectedScenarioId) || scenariosData.scenarios[0];

  const handleScenarioSelect = (scenarioId: string) => {
    if (isPlaying) return;

    setSelectedScenarioId(scenarioId);
    setActiveAgent(null);
    setIsComplete(false);
    setIsPlaying(true);
    setPauseRequested(false);
  };

  const handleComplete = () => {
    setIsComplete(true);
    setTimeout(() => {
      setIsPlaying(false);
      setPauseRequested(false);
    }, 2000);
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setPauseRequested(false);
    } else {
      setPauseRequested(!pauseRequested);
    }
  };

  const handleRestart = () => {
    setActiveAgent(null);
    setIsComplete(false);
    setIsPlaying(true);
    setPauseRequested(false);
    setSelectedScenarioId(selectedScenarioId);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col">
      <header className="border-b border-gray-200 px-8 py-5 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/BMO-bank-logo.png" alt="BMO" className="h-12 object-contain" />
            <div>
              <h1 className="text-3xl font-bold text-black">Credit Card Dispute Resolution</h1>
              <p className="text-sm text-gray-600 mt-1">Agentic AI Demo — Bank of Montreal</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowWelcome(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Help</span>
            </button>
            {activeTab === 'live-demo' && (
              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-xs text-gray-500">Customer</div>
                  <div className="text-sm font-semibold text-black">{currentScenario.customer.name}</div>
                </div>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {currentScenario.customer.initials}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="border-b border-gray-200 bg-white">
        <div className="flex space-x-6 px-8">
          <button
            onClick={() => setActiveTab('live-demo')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'live-demo'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Live Demo
          </button>
          <button
            onClick={() => setActiveTab('hitl')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'hitl'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Case Review
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'analytics'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('lyzr-agents')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'lyzr-agents'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Lyzr Agents
          </button>
          <button
            onClick={() => setActiveTab('agent-config')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'agent-config'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Agent Configuration
          </button>
          <button
            onClick={() => setActiveTab('strategic-insights')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'strategic-insights'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Strategic Insights
          </button>
          <button
            onClick={() => setActiveTab('responsible-ai')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeTab === 'responsible-ai'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Responsible AI
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {activeTab === 'live-demo' && (
          <div className="h-full flex flex-col">
            <ScenarioSelector
              scenarios={scenariosData.scenarios}
              selectedScenario={selectedScenarioId}
              onSelect={handleScenarioSelect}
              disabled={isPlaying}
              isPlaying={isPlaying && !pauseRequested}
              onPlayPause={handlePlayPause}
              onRestart={handleRestart}
              playbackSpeed={playbackSpeed}
              onSpeedChange={setPlaybackSpeed}
            />
            <div className="flex-1 overflow-hidden">
              <ChatWindow
                conversation={currentScenario.conversation}
                onAgentChange={setActiveAgent}
                onComplete={handleComplete}
                isActive={isPlaying && !pauseRequested}
                playbackSpeed={playbackSpeed}
              />
            </div>
          </div>
        )}

        {activeTab === 'hitl' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <HITLFeedbackHub />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <AnalyticsDashboard />
          </div>
        )}

        {activeTab === 'lyzr-agents' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <LyzrAgents />
          </div>
        )}

        {activeTab === 'agent-config' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <AgentConfiguration />
          </div>
        )}

        {activeTab === 'strategic-insights' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <StrategicAdvisor />
          </div>
        )}

        {activeTab === 'responsible-ai' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <ResponsibleAITab />
          </div>
        )}
      </div>

      <WelcomeModal
        isOpen={showWelcome}
        onClose={() => setShowWelcome(false)}
      />
    </div>
  );
}

export default App;
