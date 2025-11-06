import { useState } from 'react';
import { HelpCircle, Users, User } from 'lucide-react';
import { ChatWindow } from './components/ChatWindow';
import { ScenarioSelector } from './components/ScenarioSelector';
import { WelcomeModal } from './components/WelcomeModal';
import { HITLFeedbackHub } from './components/HITLFeedbackHub';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ResponsibleAITab } from './components/ResponsibleAITab';
import { LyzrAgents } from './components/LyzrAgents';
import { AgentConfiguration } from './components/AgentConfiguration';
import { StrategicAdvisor } from './components/StrategicAdvisor';
import { StrategicInsights } from './components/StrategicInsights';
import { PersonaSelector } from './components/PersonaSelector';
import { PersonaDashboard } from './components/PersonaDashboard';
import { AgentPanel } from './components/AgentPanel';
import scenariosData from './data/scenarios.json';
import personasData from './data/personas.json';

type ViewMode = 'customer' | 'bmo-team';
type BMOPersona = 'cardholder-resolution' | 'dispute-fraud' | 'transaction-integrity' | 'consumer-protection';

interface PersonaConfig {
  id: BMOPersona;
  name: string;
  description: string;
  availableTabs: string[];
}

const bmoPersonas: PersonaConfig[] = [
  {
    id: 'cardholder-resolution',
    name: 'Cardholder Resolution Services',
    description: 'Customer service and dispute resolution',
    availableTabs: ['live-demo', 'hitl', 'analytics', 'lyzr-agents', 'responsible-ai']
  },
  {
    id: 'dispute-fraud',
    name: 'Dispute & Fraud Management',
    description: 'Fraud detection and dispute investigation',
    availableTabs: ['live-demo', 'hitl', 'analytics', 'agent-config', 'lyzr-agents', 'responsible-ai']
  },
  {
    id: 'transaction-integrity',
    name: 'Transaction Integrity',
    description: 'Transaction monitoring and compliance',
    availableTabs: ['analytics', 'agent-config', 'strategic-insights', 'lyzr-agents', 'responsible-ai']
  },
  {
    id: 'consumer-protection',
    name: 'Consumer Protection Services',
    description: 'Regulatory compliance and customer protection',
    availableTabs: ['hitl', 'analytics', 'strategic-insights', 'lyzr-agents', 'responsible-ai']
  }
];

function App() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(scenariosData.scenarios[0].id);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('live-demo');
  const [playbackSpeed, setPlaybackSpeed] = useState(0.5);
  const [pauseRequested, setPauseRequested] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('customer');
  const [selectedPersona, setSelectedPersona] = useState<BMOPersona>('cardholder-resolution');
  const [selectedPersonaRole, setSelectedPersonaRole] = useState('fraud-analyst');

  const currentPersona = bmoPersonas.find(p => p.id === selectedPersona) || bmoPersonas[0];
  const currentPersonaRole = personasData.personas.find(p => p.id === selectedPersonaRole);

  const getFilteredScenarios = () => {
    if (viewMode === 'customer') {
      return scenariosData.scenarios;
    }

    return scenariosData.scenarios.filter(scenario => {
      const relevantPersonas = (scenario as any).relevantPersonas;
      if (!relevantPersonas || relevantPersonas.length === 0) {
        return true;
      }
      return relevantPersonas.includes(selectedPersonaRole);
    });
  };

  const filteredScenarios = getFilteredScenarios();
  const currentScenario = filteredScenarios.find(s => s.id === selectedScenarioId) || filteredScenarios[0];

  const getAvailableTabs = () => {
    if (viewMode === 'customer') {
      return ['live-demo', 'responsible-ai'];
    }
    return currentPersonaRole?.availableTabs || currentPersona.availableTabs;
  };

  const availableTabs = getAvailableTabs();

  const getPersonaConversation = () => {
    if (viewMode === 'customer') {
      return currentScenario.conversation;
    }

    const conversationType = currentPersonaRole?.conversationType;
    if (conversationType && currentScenario.personaConversations?.[conversationType]) {
      return currentScenario.personaConversations[conversationType];
    }

    return currentScenario.bmoConversation || currentScenario.conversation;
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    const newAvailableTabs = mode === 'customer'
      ? ['live-demo', 'responsible-ai']
      : bmoPersonas[0].availableTabs;

    if (!newAvailableTabs.includes(activeTab)) {
      setActiveTab(newAvailableTabs[0]);
    }
  };

  const handlePersonaChange = (personaId: BMOPersona) => {
    setSelectedPersona(personaId);
    const persona = bmoPersonas.find(p => p.id === personaId);
    if (persona && !persona.availableTabs.includes(activeTab)) {
      setActiveTab(persona.availableTabs[0]);
    }
  };

  const handlePersonaRoleChange = (roleId: string) => {
    setSelectedPersonaRole(roleId);
    const role = personasData.personas.find(p => p.id === roleId);

    if (isPlaying) {
      setIsPlaying(false);
      setPauseRequested(false);
    }

    setActiveAgent(null);
    setIsComplete(false);

    const newFilteredScenarios = scenariosData.scenarios.filter(scenario => {
      const relevantPersonas = (scenario as any).relevantPersonas;
      if (!relevantPersonas || relevantPersonas.length === 0) {
        return true;
      }
      return relevantPersonas.includes(roleId);
    });

    if (newFilteredScenarios.length > 0 && !newFilteredScenarios.find(s => s.id === selectedScenarioId)) {
      setSelectedScenarioId(newFilteredScenarios[0].id);
    }

    if (role && !role.availableTabs.includes(activeTab)) {
      setActiveTab(role.availableTabs[0]);
    }
  };

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
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => handleViewModeChange('customer')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  viewMode === 'customer'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Customer</span>
              </button>
              <button
                onClick={() => handleViewModeChange('bmo-team')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  viewMode === 'bmo-team'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>BMO Team</span>
              </button>
            </div>

            <button
              onClick={() => setShowWelcome(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Help</span>
            </button>

            {viewMode === 'customer' && activeTab === 'live-demo' && (
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

      {viewMode === 'bmo-team' && (
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Personalized Role View
              </div>
              <PersonaSelector
                personas={personasData.personas.filter(p =>
                  ['fraud-analyst', 'operations-manager', 'executive'].includes(p.id)
                )}
                selectedPersona={selectedPersonaRole}
                onSelect={handlePersonaRoleChange}
              />
            </div>
            <div className="text-xs text-gray-500">
              UI customized for {personasData.personas.find(p => p.id === selectedPersonaRole)?.name}
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-gray-200 bg-white">
        <div className="flex space-x-6 px-8">
          {availableTabs.includes('live-demo') && (
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
          )}
          {availableTabs.includes('hitl') && (
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
          )}
          {availableTabs.includes('analytics') && (
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
          )}
          {availableTabs.includes('lyzr-agents') && (
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
          )}
          {availableTabs.includes('agent-config') && (
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
          )}
          {availableTabs.includes('strategic-insights') && (
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
          )}
          {availableTabs.includes('responsible-ai') && (
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
          )}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {activeTab === 'live-demo' && (
          <div className="h-full flex flex-col">
            <ScenarioSelector
              scenarios={filteredScenarios}
              selectedScenario={selectedScenarioId}
              onSelect={handleScenarioSelect}
              disabled={isPlaying}
              isPlaying={isPlaying && !pauseRequested}
              onPlayPause={handlePlayPause}
              onRestart={handleRestart}
              playbackSpeed={playbackSpeed}
              onSpeedChange={setPlaybackSpeed}
            />
            <div className="flex-1 overflow-hidden flex">
              <div className="flex-1 overflow-y-auto">
                <ChatWindow
                  conversation={getPersonaConversation()}
                  onAgentChange={setActiveAgent}
                  onComplete={handleComplete}
                  isActive={isPlaying && !pauseRequested}
                  playbackSpeed={playbackSpeed}
                  viewMode={viewMode}
                  customerName={currentScenario.customer?.name}
                  bmoTeamMember={currentScenario.bmoTeamMember}
                  priorityAgents={currentPersonaRole?.priorityAgents || []}
                />
              </div>
              {isPlaying && <AgentPanel activeAgent={activeAgent} />}
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
            {selectedPersonaRole === 'executive' ? <StrategicInsights /> : <StrategicAdvisor />}
          </div>
        )}

        {activeTab === 'responsible-ai' && (
          <div className="h-full overflow-y-auto bg-gray-50">
            <ResponsibleAITab viewMode={viewMode} />
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
