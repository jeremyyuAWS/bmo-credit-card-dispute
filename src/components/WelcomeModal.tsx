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
            <h2 className="text-2xl font-bold text-black">BMO Credit Card Dispute Resolution</h2>
            <p className="text-sm text-gray-600 mt-1">Agentic AI Platform Overview</p>
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
                <h3 className="text-xl font-bold text-black mb-3">Executive Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  This agentic AI platform transforms BMO's credit card dispute resolution from a multi-day,
                  multi-department process into an automated, compliant, and customer-centric experience.
                  Seven specialized AI agents orchestrate fraud detection, dispute validation, regulatory compliance,
                  resolution execution, and continuous learning.
                </p>
              </div>


              <div>
                <h3 className="text-lg font-bold text-black mb-3">Strategic Business Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <Shield className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">Risk Mitigation</div>
                      <div className="text-sm text-gray-600">Real-time compliance validation eliminates regulatory exposure through automated policy checks.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <Users className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">Operational Efficiency</div>
                      <div className="text-sm text-gray-600">Streamlines complex multi-step dispute workflows into coordinated automated agent actions.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <DollarSign className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-black">Revenue Protection</div>
                      <div className="text-sm text-gray-600">Proactive fraud detection with intelligent pattern recognition protects against unauthorized transactions.</div>
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
                <h4 className="font-bold text-black mb-3">Business Value for BMO</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Customer Experience:</strong> Instant resolution builds trust and loyalty through rapid response.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Operational Scale:</strong> Handles increased transaction volume without proportional headcount growth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Fraud Prevention:</strong> Proactive detection stops unauthorized charges before customer impact.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Card Portfolio Growth:</strong> Premium dispute resolution differentiates BMO's card products.</span>
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
                    <div className="text-xs text-gray-600">Specialized handling for complex travel scenarios</div>
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
                  While most disputes resolve automatically, the Case Review tab provides oversight for edge cases,
                  high-value transactions, and continuous quality assurance.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h4 className="font-bold text-black mb-3">Business Value for BMO</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Risk Management:</strong> Human oversight on complex cases protects against edge case errors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Quality Assurance:</strong> Sample reviews maintain high decision accuracy across all disputes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Regulatory Compliance:</strong> Documented review trail satisfies OCC oversight requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span><strong>Agent Improvement:</strong> Human feedback refines AI decision-making over time.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-black mb-2">Review Triggers</div>
                <div className="text-sm text-gray-600">High-value transactions, ambiguous cases, or customer-escalated disputes receive human oversight for quality assurance and continuous improvement.</div>
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
                <h4 className="font-bold text-black mb-3">Business Value for BMO</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Financial Visibility:</strong> Track cost efficiency and resource optimization metrics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Fraud Intelligence:</strong> Real-time detection of emerging fraud patterns across portfolio.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Regulatory Reporting:</strong> Automated compliance metrics for OCC, FINRA oversight.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>Performance Benchmarking:</strong> Compare resolution speed, costs against industry standards.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Key Metrics Tracked</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs text-gray-600 font-semibold mb-1">Automation Rate</div>
                    <div className="text-sm text-gray-700">Percentage of disputes resolved without manual intervention</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs text-gray-600 font-semibold mb-1">Fraud Prevention</div>
                    <div className="text-sm text-gray-700">Unauthorized charges detected and blocked</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="text-xs text-gray-600 font-semibold mb-1">Resolution Speed</div>
                    <div className="text-sm text-gray-700">Time from dispute submission to resolution</div>
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
                  <div className="text-xs text-gray-600"><strong>Value:</strong> Detects fraud patterns before authorization, preventing significant losses</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="font-bold text-black mb-1">Outreach Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Empathetic customer communication, context gathering, identity verification</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> High customer satisfaction through personalized, rapid communication</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="font-bold text-black mb-1">Eligibility Agent</div>
                  <div className="text-sm text-gray-700 mb-2">KYC validation, merchant reputation check, card network rule verification</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> High accuracy on dispute validity with minimal false positives</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div className="font-bold text-black mb-1">Compliance Guard</div>
                  <div className="text-sm text-gray-700 mb-2">Real-time regulatory validation against OCC, FINRA, Visa/Mastercard policies</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> Comprehensive compliance with regulatory requirements</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-black mb-1">Resolution Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Executes provisional credits, card blocking, reissuance, backend orchestration</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> Rapid resolution compared to traditional multi-day processes</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <div className="font-bold text-black mb-1">Recovery Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Identifies and reconnects recurring payment relationships to new cards</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> Maintains subscription continuity, preventing customer disruption</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-700">
                  <div className="font-bold text-black mb-1">Learning Agent</div>
                  <div className="text-sm text-gray-700 mb-2">Captures case outcomes, retrains fraud models, continuous improvement loop</div>
                  <div className="text-xs text-gray-600"><strong>Value:</strong> Continuous improvement in fraud detection accuracy over time</div>
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
                <h4 className="font-bold text-black mb-3">Business Value for BMO</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Business Control:</strong> Operations teams adjust fraud thresholds without IT dependency.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Risk Management:</strong> Real-time agent health monitoring prevents service degradation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Model Governance:</strong> Version control, A/B testing, rollback capabilities for ML models.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>Integration Health:</strong> Monitor connections to card networks, core banking, CRM systems.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-black mb-2">System Performance</div>
                <div className="text-sm text-gray-600">Enterprise-grade uptime and real-time response capabilities ensure reliable, consistent dispute resolution with minimal latency.</div>
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
                <h4 className="font-bold text-black mb-3">Business Value for BMO</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Competitive Intelligence:</strong> Benchmark resolution speed, costs against competitors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Fraud Forecasting:</strong> Predict emerging scam patterns before industry-wide impact.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Workflow Optimization:</strong> Identify bottlenecks, recommend process improvements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span><strong>Product Strategy:</strong> Inform card product design with dispute resolution insights.</span>
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
                    <div className="text-xs text-gray-600">Enhanced protection for vulnerable customers with family notification features</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm text-black">International Travel Dispute Specialization</div>
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">Quick Win</div>
                    </div>
                    <div className="text-xs text-gray-600">Enhanced win rates drive premium card differentiation</div>
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
                  BMO's commitment to ethical AI deployment. Every agent decision includes explainability,
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

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-black mb-2">Governance Standards</div>
                <div className="text-sm text-gray-600">All decisions include full audit trails and explainability for regulatory review, with ongoing fairness validation across all customer demographics.</div>
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
