import { useState } from 'react';
import { X, DollarSign, Users, BarChart3, Shield, Zap, TrendingUp, Clock, Award, Target } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'overview' | 'live-demo' | 'case-review' | 'analytics' | 'agents' | 'config' | 'strategic' | 'responsible-ai';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  if (!isOpen) return null;

  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'live-demo', label: 'Live Demo', icon: <Zap className="w-4 h-4" /> },
    { id: 'case-review', label: 'Case Review', icon: <Shield className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'agents', label: 'Agents', icon: <Users className="w-4 h-4" /> },
    { id: 'config', label: 'Configuration', icon: <Clock className="w-4 h-4" /> },
    { id: 'strategic', label: 'Strategic', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'responsible-ai', label: 'Responsible AI', icon: <Award className="w-4 h-4" /> }
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Welcome to the Demo</h3>
                <p className="text-gray-700 leading-relaxed">
                  This interactive demo showcases an enterprise-grade autonomous dispute resolution system.
                  Explore how AI agents work together to handle credit card disputes in real-time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">How to Use This Demo</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <Zap className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">1. Select a Scenario</div>
                      <div className="text-sm text-gray-600">Choose from 8 dispute scenarios on the Live Demo tab to see different use cases in action.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <Users className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">2. Switch Perspectives</div>
                      <div className="text-sm text-gray-600">Toggle between Customer and BMO Team views to see both sides of the conversation.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <BarChart3 className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">3. Explore Insights</div>
                      <div className="text-sm text-gray-600">Visit Analytics, Strategic Insights, and other tabs to see operational metrics and business value.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'live-demo' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Live Demo Tab</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Live Demo showcases real-time dispute resolution across 8 common scenarios.
                  Watch AI agents detect fraud, validate claims, ensure compliance, and resolve cases in under 2 minutes.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">What You'll See</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Real-Time Conversations:</strong> Watch AI agents interact with customers and resolve disputes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Agent Actions:</strong> See specialized agents working together with fraud detection, validation, and compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Playback Controls:</strong> Adjust speed (0.25x to 2x) and pause/restart demos at any time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Resolution Summary:</strong> View final outcomes with metrics and actions taken.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Key Scenarios Demonstrated</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="font-semibold text-sm text-black mb-1">Fraudulent Charges</div>
                    <div className="text-xs text-gray-600">Instant detection, zero liability protection</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="font-semibold text-sm text-black mb-1">Duplicate Billing</div>
                    <div className="text-xs text-gray-600">Automatic merchant reconciliation</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="font-semibold text-sm text-black mb-1">Travel Disputes</div>
                    <div className="text-xs text-gray-600">83% win rate vs. 52% industry average</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="font-semibold text-sm text-black mb-1">Elder Fraud</div>
                    <div className="text-xs text-gray-600">Vulnerable customer protection, family alerts</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case-review' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Case Review (Human-in-the-Loop)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While 98% of disputes resolve automatically, the Case Review tab provides oversight for edge cases,
                  high-value transactions, and continuous quality assurance.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">What This Tab Shows</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Human Oversight:</strong> See how complex cases are flagged for human review and feedback.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Quality Assurance:</strong> Review sample cases to understand the decision-making process.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Feedback Loop:</strong> Explore how human input improves agent performance over time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Edge Cases:</strong> Understand when and why cases need human intervention.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">2%</div>
                  <div className="text-sm font-semibold text-gray-700">Cases Requiring Review</div>
                  <div className="text-xs text-gray-600 mt-2">High-value, ambiguous, or escalated disputes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">18 Min</div>
                  <div className="text-sm font-semibold text-gray-700">Avg Review Time</div>
                  <div className="text-xs text-gray-600 mt-2">Down from 4.2 hours manual processing</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Analytics Dashboard</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Real-time visibility into dispute volume, resolution rates, fraud patterns, and financial impact.
                  Executive-level KPIs track performance against business objectives.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">What This Tab Shows</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Key Metrics:</strong> View resolution times, automation rates, and cost savings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Fraud Patterns:</strong> Explore real-time detection and prevention analytics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Performance Trends:</strong> See how the system improves over time with charts and graphs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Operational Insights:</strong> Understand throughput, volumes, and efficiency metrics.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Key Metrics Tracked</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                    <div className="text-xl font-bold text-black">98.4%</div>
                    <div className="text-xs text-gray-600">Automation Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                    <div className="text-xl font-bold text-black">$8.4M</div>
                    <div className="text-xs text-gray-600">Fraud Prevented</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                    <div className="text-xl font-bold text-black">2.1 Min</div>
                    <div className="text-xs text-gray-600">Avg Resolution</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Lyzr Agents Architecture</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Seven specialized agents orchestrate the dispute workflow. Each agent has a specific responsibility
                  and operates with banking domain expertise, ensuring accuracy and compliance.
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

          {activeTab === 'config' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Agent Configuration & Monitoring</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enterprise controls for threshold tuning, model management, performance monitoring, and system health.
                  Enables BMO teams to optimize agent behavior without engineering resources.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">What This Tab Shows</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Agent Controls:</strong> See how thresholds and parameters are configured.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>System Health:</strong> Monitor agent performance, uptime, and response times.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Model Management:</strong> Explore version control and A/B testing capabilities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Integration Status:</strong> Check connections to external systems and APIs.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">99.98%</div>
                  <div className="text-sm font-semibold text-gray-700">Agent Uptime</div>
                  <div className="text-xs text-gray-600 mt-2">Enterprise SLA performance</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">0.8s</div>
                  <div className="text-sm font-semibold text-gray-700">Avg Response Time</div>
                  <div className="text-xs text-gray-600 mt-2">Real-time decision velocity</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'strategic' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Strategic Insights & Recommendations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AI-powered business intelligence identifies optimization opportunities, emerging fraud trends,
                  and strategic initiatives to enhance dispute operations and competitive positioning.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">What This Tab Shows</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Performance Benchmarks:</strong> Compare metrics against industry standards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Trend Analysis:</strong> Identify emerging patterns and opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Optimization Recommendations:</strong> See AI-generated suggestions for improvements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Strategic Insights:</strong> Understand business implications and growth opportunities.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Current Strategic Recommendations</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm text-black">Expand Elder Fraud Protection</div>
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">High Impact</div>
                    </div>
                    <div className="text-xs text-gray-600">Estimated $4.2M additional fraud prevention, NPS +8 points</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm text-black">International Travel Dispute Specialization</div>
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">Quick Win</div>
                    </div>
                    <div className="text-xs text-gray-600">83% vs. 52% win rate drives premium card differentiation</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'responsible-ai' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">Responsible AI & Governance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This system is built with ethical AI principles. Every agent decision includes explainability,
                  bias monitoring, audit trails, and human oversight capabilities.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">Governance Framework</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Explainable Decisions:</strong> Every dispute resolution includes reasoning chain for audit compliance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Bias Monitoring:</strong> Monthly fairness audits across demographics ensure equitable treatment.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Data Privacy:</strong> PII handling complies with PIPEDA, SOC 2 Type II certified infrastructure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Human Oversight:</strong> Escalation protocols ensure complex cases receive human review.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Model Transparency:</strong> Feature importance, training data provenance documented.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">100%</div>
                  <div className="text-sm font-semibold text-gray-700">Decisions Explainable</div>
                  <div className="text-xs text-gray-600 mt-2">Full audit trail for regulatory review</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-black mb-1">Zero</div>
                  <div className="text-sm font-semibold text-gray-700">Bias Incidents</div>
                  <div className="text-xs text-gray-600 mt-2">Fairness validation across all demographics</div>
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
