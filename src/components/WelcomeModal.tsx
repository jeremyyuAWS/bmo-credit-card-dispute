import { useState } from 'react';
import { X, Users, Zap, PlayCircle } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'getting-started' | 'features' | 'agents';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('getting-started');

  if (!isOpen) return null;

  const tabs: Tab[] = [
    { id: 'getting-started', label: 'Getting Started', icon: <PlayCircle className="w-4 h-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="w-4 h-4" /> },
    { id: 'agents', label: 'AI Agents', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black">Demo Guide</h2>
            <p className="text-sm text-gray-600 mt-1">Learn how to use this interactive demo</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex overflow-x-auto px-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-black text-black bg-white'
                    : 'border-transparent text-gray-600 hover:text-black'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {activeTab === 'getting-started' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Welcome to the Demo</h3>
                <p className="text-gray-700 leading-relaxed">
                  This interactive demo showcases an enterprise-grade autonomous dispute resolution system.
                  Watch AI agents work together to handle credit card disputes in real-time.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-black mb-4">Quick Start Guide</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <div className="font-semibold text-black mb-1">Select a Scenario</div>
                      <div className="text-sm text-gray-700">Click on the <strong>Live Demo</strong> tab and choose from 8 dispute scenarios to see different use cases.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold text-black mb-1">Watch the Conversation</div>
                      <div className="text-sm text-gray-700">See AI agents interact with customers. Use the play/pause button and adjust speed (0.25x to 2x).</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <div className="font-semibold text-black mb-1">Switch Perspectives</div>
                      <div className="text-sm text-gray-700">Toggle between <strong>Customer</strong> and <strong>Team</strong> views to see both sides.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <div className="font-semibold text-black mb-1">Explore Other Tabs</div>
                      <div className="text-sm text-gray-700">Visit <strong>Analytics</strong>, <strong>Case Review</strong>, and other tabs to see metrics and insights.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Demo Features</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Explore the different tabs and features available in this interactive demo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">Live Demo</h4>
                  <p className="text-sm text-gray-700 mb-3">Watch AI agents handle disputes in real-time across 8 scenarios.</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Real-time agent conversations and actions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Playback controls with adjustable speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Resolution summaries with key metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">Analytics</h4>
                  <p className="text-sm text-gray-700 mb-3">View performance metrics, trends, and operational insights.</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Resolution times and automation rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Fraud detection and prevention stats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Performance trends over time</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">Case Review</h4>
                  <p className="text-sm text-gray-700 mb-3">Human oversight for complex cases and quality assurance.</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Review flagged edge cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Provide feedback to improve agents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Track quality assurance metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">Agent Configuration</h4>
                  <p className="text-sm text-gray-700 mb-3">Monitor and configure AI agent behavior and performance.</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Adjust thresholds and parameters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Monitor system health and uptime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Manage model versions and testing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-xl p-5">
                  <h4 className="font-bold text-black mb-2">Strategic Insights & Responsible AI</h4>
                  <p className="text-sm text-gray-700 mb-3">View recommendations and ensure ethical AI practices.</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>AI-generated optimization suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Explainability and audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Bias monitoring and governance</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          )}


          {activeTab === 'agents' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">AI Agents</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Seven specialized AI agents work together to handle dispute resolution. Each agent has a specific role
                  and expertise to ensure accurate and compliant outcomes.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-500">
                  <div className="font-bold text-black mb-1">Fraud Sentinel</div>
                  <div className="text-sm text-gray-700 mb-2">Real-time fraud detection across transaction patterns, geolocation, velocity checks</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Catches fraud patterns before they impact customers</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="font-bold text-black mb-1">Outreach Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Empathetic customer communication, context gathering, identity verification</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Provides empathetic communication and gathers dispute context</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="font-bold text-black mb-1">Eligibility Agent</div>
                  <div className="text-sm text-gray-700 mb-2">KYC validation, merchant reputation check, card network rule verification</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Validates dispute eligibility and verifies merchant information</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="font-bold text-black mb-1">Compliance Guard</div>
                  <div className="text-sm text-gray-700 mb-2">Real-time regulatory validation against OCC, FINRA, Visa/Mastercard policies</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Ensures all actions comply with regulations and card network rules</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-black mb-1">Resolution Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Executes provisional credits, card blocking, reissuance, backend orchestration</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Executes credits, card blocks, and reissuance processes</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <div className="font-bold text-black mb-1">Recovery Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Identifies and reconnects recurring payment relationships to new cards</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Identifies and reconnects recurring payments to new cards</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-700">
                  <div className="font-bold text-black mb-1">Learning Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Captures case outcomes, retrains fraud models, continuous improvement loop</div>
                  <div className="text-xs text-gray-600"><strong>Role:</strong> Captures outcomes and continuously improves system performance</div>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="bg-white border-t border-gray-200 px-8 py-4">
          <button
            onClick={onClose}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
