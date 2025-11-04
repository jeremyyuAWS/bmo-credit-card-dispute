import { useState } from 'react';
import {
  Brain, Shield, MessageSquare, CheckCircle, Scale, DollarSign,
  RefreshCw, TrendingUp, Users, Zap, Network, GitBranch, ArrowRight,
  User, AlertTriangle, Eye, Target, Workflow, Cpu, Radio, Activity,
  BarChart3, Clock, AlertCircle, X
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  type: 'manager' | 'specialist' | 'validator' | 'executor' | 'learner';
  icon: string;
  color: string;
  description: string;
  capabilities: string[];
  connections: string[];
  hitlTriggers: string[];
  inputs?: string[];
  outputs?: string[];
  processing?: string[];
  integrations?: string[];
}

const agents: Agent[] = [
  {
    id: 'orchestrator',
    name: 'Orchestrator Manager',
    type: 'manager',
    icon: 'cpu',
    color: 'from-purple-500 to-purple-700',
    description: 'Central coordination agent that routes cases, manages agent communication, and ensures workflow completion',
    capabilities: [
      'Case intake and triage',
      'Agent task delegation',
      'Workflow orchestration',
      'Priority management',
      'HITL escalation routing'
    ],
    connections: ['fraud-sentinel', 'outreach', 'eligibility', 'compliance', 'resolution', 'recovery', 'learning'],
    hitlTriggers: [
      'Low confidence score (<60%)',
      'High-value disputes (>$2,000)',
      'Conflicting agent recommendations',
      'Regulatory edge cases'
    ],
    inputs: [
      'Customer dispute submission from CRM',
      'Transaction data from core banking system',
      'Historical case data from data warehouse',
      'Agent availability and workload metrics'
    ],
    outputs: [
      'Task assignments to specialist agents',
      'Case priority scores and routing decisions',
      'Workflow status updates',
      'HITL escalation notifications'
    ],
    processing: [
      'Parse incoming dispute data and classify by category',
      'Analyze case complexity and confidence requirements',
      'Determine optimal agent workflow path',
      'Monitor agent responses and aggregate results'
    ],
    integrations: [
      'Core Banking System (CBS)',
      'Customer Relationship Management (CRM)',
      'Agent Communication Bus',
      'HITL Queue Management System'
    ]
  },
  {
    id: 'fraud-sentinel',
    name: 'Fraud Detection Sentinel',
    type: 'specialist',
    icon: 'shield',
    color: 'from-red-500 to-red-700',
    description: 'Analyzes transaction patterns, velocity checks, geolocation anomalies, and behavioral signals',
    capabilities: [
      'Real-time transaction monitoring',
      'Pattern recognition across 50M+ transactions',
      'Velocity and geo-anomaly detection',
      'Merchant risk scoring',
      'Customer behavior profiling'
    ],
    connections: ['orchestrator', 'eligibility'],
    hitlTriggers: [
      'Novel fraud pattern detected',
      'Cross-border anomaly requiring judgment',
      'Conflicting evidence signals'
    ],
    inputs: [
      'Transaction details (amount, merchant, location, time)',
      'Customer transaction history (180 days)',
      'Merchant fraud report database',
      'Geolocation and device fingerprinting data'
    ],
    outputs: [
      'Fraud risk score (0-100)',
      'Detected anomaly patterns with confidence levels',
      'Merchant reputation assessment',
      'Recommendation: approve/deny/escalate'
    ],
    processing: [
      'Run ML model trained on 50M+ historical transactions',
      'Calculate velocity: transactions per hour/day/week',
      'Compare geolocation vs typical customer patterns',
      'Cross-reference merchant against known fraud DB'
    ],
    integrations: [
      'Transaction Processing System',
      'Merchant Risk Database',
      'Geolocation Services API',
      'Fraud Pattern ML Model'
    ]
  },
  {
    id: 'outreach',
    name: 'Customer Outreach Agent',
    type: 'specialist',
    icon: 'message-square',
    color: 'from-blue-500 to-blue-700',
    description: 'Manages customer communication with empathetic language generation and context-aware responses',
    capabilities: [
      'Natural language generation',
      'Sentiment analysis and adaptation',
      'Multi-channel communication (SMS, email, app)',
      'Evidence collection automation',
      'Customer education and guidance'
    ],
    connections: ['orchestrator', 'fraud-sentinel'],
    hitlTriggers: [
      'Customer expresses frustration or confusion',
      'Complex explanation needed',
      'Escalation request from customer'
    ]
  },
  {
    id: 'eligibility',
    name: 'Eligibility Verification Agent',
    type: 'validator',
    icon: 'check-circle',
    color: 'from-green-500 to-green-700',
    description: 'Validates claims against card network rules, merchant policies, and transaction metadata',
    capabilities: [
      'Visa/Mastercard rule validation',
      'Merchant policy verification',
      'Transaction metadata analysis',
      'Time-bound deadline tracking',
      'Evidence sufficiency assessment'
    ],
    connections: ['orchestrator', 'compliance', 'fraud-sentinel'],
    hitlTriggers: [
      'Ambiguous policy interpretation',
      'Missing or incomplete evidence',
      'Time-sensitive deadline approaching'
    ],
    inputs: [
      'Dispute claim details and customer statement',
      'Transaction authorization data',
      'Card network rule database (Visa/MC/Amex)',
      'Merchant refund policy documents'
    ],
    outputs: [
      'Eligibility determination (eligible/ineligible)',
      'Applicable card network rules with citations',
      'Evidence gaps requiring customer follow-up',
      'Chargeback deadline countdown'
    ],
    processing: [
      'Parse dispute category and match to network rules',
      'Validate transaction characteristics against rules',
      'Check evidence completeness and quality',
      'Calculate remaining time before chargeback deadline'
    ],
    integrations: [
      'Card Network Rule Engine',
      'Merchant Policy Database',
      'Transaction Authorization System',
      'Evidence Management System'
    ]
  },
  {
    id: 'compliance',
    name: 'Compliance Guard',
    type: 'validator',
    icon: 'scale',
    color: 'from-yellow-600 to-yellow-800',
    description: 'Ensures regulatory compliance across OCC, CFPB, FINRA, and card network regulations',
    capabilities: [
      'Real-time regulatory rule checking',
      'Audit trail generation',
      'Policy version control',
      'Risk assessment and flagging',
      'Regulatory change monitoring'
    ],
    connections: ['orchestrator', 'eligibility', 'resolution'],
    hitlTriggers: [
      'Regulatory gray area detected',
      'High audit risk scenario',
      'New regulation application unclear',
      'Potential compliance violation'
    ],
    inputs: [
      'Proposed resolution action from agents',
      'Customer demographic and account data',
      'Regulatory rule database (OCC, CFPB, FINRA)',
      'Audit trail requirements'
    ],
    outputs: [
      'Compliance validation status (pass/fail/warning)',
      'Specific regulation citations',
      'Audit trail entries with timestamps',
      'Risk level assessment (low/medium/high)'
    ],
    processing: [
      'Validate action against all applicable regulations',
      'Check for discriminatory patterns or bias',
      'Generate audit trail with full decision lineage',
      'Flag high-risk scenarios for legal review'
    ],
    integrations: [
      'Regulatory Rule Engine',
      'Audit Trail Database',
      'Compliance Monitoring Dashboard',
      'Legal Review Queue'
    ]
  },
  {
    id: 'resolution',
    name: 'Resolution Executor',
    type: 'executor',
    icon: 'dollar-sign',
    color: 'from-indigo-500 to-indigo-700',
    description: 'Executes refunds, provisional credits, card blocks, and chargeback filings',
    capabilities: [
      'Automated refund processing',
      'Provisional credit issuance',
      'Card blocking and reissuance',
      'Chargeback filing automation',
      'Multi-system orchestration'
    ],
    connections: ['orchestrator', 'compliance', 'recovery'],
    hitlTriggers: [
      'Large refund amount requiring approval',
      'System integration failure',
      'Unusual resolution path'
    ],
    inputs: [
      'Approved resolution decision from orchestrator',
      'Customer account and card details',
      'Refund amount and method specifications',
      'Compliance validation results'
    ],
    outputs: [
      'Transaction confirmation number',
      'Customer notification (email/SMS)',
      'Account balance update confirmation',
      'Chargeback filing receipt (if applicable)'
    ],
    processing: [
      'Validate account status and available balance',
      'Execute refund transaction through payment gateway',
      'Update customer account ledger',
      'Trigger customer notification workflow'
    ],
    integrations: [
      'Core Banking System',
      'Payment Gateway API',
      'Card Management System',
      'Customer Notification Service',
      'Chargeback Network (Visa/MC)'
    ]
  },
  {
    id: 'recovery',
    name: 'Subscription Recovery Agent',
    type: 'executor',
    icon: 'refresh-cw',
    color: 'from-cyan-500 to-cyan-700',
    description: 'Identifies and reconnects recurring payments to prevent service disruption',
    capabilities: [
      'Subscription relationship mapping',
      'Merchant reconnection automation',
      'Customer notification management',
      'Service continuity assurance',
      'Payment method migration'
    ],
    connections: ['orchestrator', 'resolution'],
    hitlTriggers: [
      'Critical service disruption risk',
      'Merchant integration issues',
      'Customer preference uncertainty'
    ]
  },
  {
    id: 'learning',
    name: 'Continuous Learning Agent',
    type: 'learner',
    icon: 'brain',
    color: 'from-pink-500 to-pink-700',
    description: 'Captures outcomes, retrains models, and improves decision accuracy through feedback loops',
    capabilities: [
      'Outcome tracking and labeling',
      'Model retraining automation',
      'Pattern discovery and alerting',
      'Performance metrics analysis',
      'HITL feedback integration'
    ],
    connections: ['orchestrator', 'fraud-sentinel', 'eligibility', 'compliance'],
    hitlTriggers: [
      'Human override of AI decision',
      'New pattern flagged for review',
      'Model accuracy degradation detected'
    ]
  },
  {
    id: 'hitl-coordinator',
    name: 'HITL Coordination Agent',
    type: 'specialist',
    icon: 'users',
    color: 'from-orange-500 to-orange-700',
    description: 'Routes cases to human specialists, manages queues, and captures expert feedback',
    capabilities: [
      'Intelligent case routing to specialists',
      'Priority queue management',
      'Specialist workload balancing',
      'Expert feedback capture',
      'Training data generation'
    ],
    connections: ['orchestrator', 'learning'],
    hitlTriggers: [
      'Confidence threshold breach',
      'Bias flag raised',
      'Customer escalation',
      'Complex edge case'
    ]
  }
];

const workflows = [
  {
    id: 'standard-fraud',
    name: 'Standard Fraud Resolution',
    steps: [
      { agent: 'orchestrator', action: 'Case intake & routing' },
      { agent: 'fraud-sentinel', action: 'Fraud analysis' },
      { agent: 'eligibility', action: 'Claim validation' },
      { agent: 'compliance', action: 'Policy check' },
      { agent: 'resolution', action: 'Refund execution' },
      { agent: 'recovery', action: 'Subscription reconnect' },
      { agent: 'learning', action: 'Outcome capture' }
    ],
    hitlCheckpoint: 'fraud-sentinel'
  },
  {
    id: 'complex-dispute',
    name: 'Complex Dispute with HITL',
    steps: [
      { agent: 'orchestrator', action: 'Case intake & routing' },
      { agent: 'fraud-sentinel', action: 'Initial analysis' },
      { agent: 'hitl-coordinator', action: 'Route to specialist', isHITL: true },
      { agent: 'compliance', action: 'Enhanced review' },
      { agent: 'resolution', action: 'Manual execution' },
      { agent: 'learning', action: 'Capture expert decision' }
    ],
    hitlCheckpoint: 'hitl-coordinator'
  }
];

export function LyzrAgents() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('standard-fraud');
  const [showPerformance, setShowPerformance] = useState(false);
  const [workflowAgentDetails, setWorkflowAgentDetails] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'cpu': Cpu,
      'shield': Shield,
      'message-square': MessageSquare,
      'check-circle': CheckCircle,
      'scale': Scale,
      'dollar-sign': DollarSign,
      'refresh-cw': RefreshCw,
      'brain': Brain,
      'users': Users
    };
    const Icon = icons[iconName] || Brain;
    return <Icon className="w-6 h-6" />;
  };

  const selectedAgentData = agents.find(a => a.id === selectedAgent);
  const currentWorkflow = workflows.find(w => w.id === selectedWorkflow);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2">Lyzr Agent Architecture</h2>
        <p className="text-sm text-gray-600">Multi-agent system with orchestration, specialization, and human-in-the-loop integration</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Network className="w-5 h-5 text-black" />
              <h3 className="text-lg font-semibold text-black">Agent Roles</h3>
            </div>
            <div className="space-y-3">
              {agents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedAgent === agent.id
                      ? 'bg-gradient-to-r ' + agent.color + ' text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {getIcon(agent.icon)}
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${selectedAgent === agent.id ? 'text-white' : 'text-black'}`}>
                        {agent.name}
                      </div>
                      <div className={`text-xs ${selectedAgent === agent.id ? 'text-white text-opacity-80' : 'text-gray-600'}`}>
                        {agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5" />
              <h3 className="text-lg font-semibold">System Metrics</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Active Agents</span>
                <span className="font-bold">{agents.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Avg Response Time</span>
                <span className="font-bold">1.2s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Daily Decisions</span>
                <span className="font-bold">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">HITL Escalation Rate</span>
                <span className="font-bold">4.3%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 space-y-6">
          {selectedAgentData ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedAgentData.color} flex items-center justify-center text-white shadow-lg`}>
                    {getIcon(selectedAgentData.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">{selectedAgentData.name}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mt-2">
                      {selectedAgentData.type.toUpperCase()} AGENT
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="text-gray-400 hover:text-black"
                >
                  <Target className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 mb-6">{selectedAgentData.description}</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Core Capabilities</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedAgentData.capabilities.map((cap, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>HITL Escalation Triggers</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedAgentData.hitlTriggers.map((trigger, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                  <GitBranch className="w-4 h-4" />
                  <span>Agent Connections</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedAgentData.connections.map((connId) => {
                    const connAgent = agents.find(a => a.id === connId);
                    return connAgent ? (
                      <div
                        key={connId}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${connAgent.color} text-white`}
                      >
                        {connAgent.name}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <Radio className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">Select an Agent</h3>
              <p className="text-sm text-gray-600">Click any agent on the left to view detailed capabilities, connections, and HITL integration</p>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-black">Agent Workflow Visualization</h3>
                <p className="text-sm text-gray-600 mt-1">End-to-end process orchestration</p>
              </div>
              <div className="flex space-x-2">
                {workflows.map((workflow) => (
                  <button
                    key={workflow.id}
                    onClick={() => setSelectedWorkflow(workflow.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      selectedWorkflow === workflow.id
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {workflow.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {currentWorkflow?.steps.map((step, index) => {
                const agent = agents.find(a => a.id === step.agent);
                const isLast = index === currentWorkflow.steps.length - 1;

                return (
                  <div key={index}>
                    <button
                      onClick={() => setWorkflowAgentDetails(workflowAgentDetails === step.agent ? null : step.agent)}
                      className={`w-full flex items-center space-x-4 ${step.isHITL ? 'bg-orange-50 border-2 border-orange-200' : 'bg-gray-50 border border-gray-200'} rounded-xl p-4 hover:shadow-md transition-all cursor-pointer`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      {agent && (
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-white shadow`}>
                          {getIcon(agent.icon)}
                        </div>
                      )}
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-black hover:underline">{agent?.name}</div>
                        <div className="text-sm text-gray-600">{step.action}</div>
                      </div>
                      {step.isHITL && (
                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold">
                          <User className="w-3 h-3" />
                          <span>HUMAN REVIEW</span>
                        </div>
                      )}
                      <Eye className="w-5 h-5 text-gray-400" />
                    </button>

                    {workflowAgentDetails === step.agent && agent && (
                      <div className="mt-3 bg-white rounded-xl border-2 border-black p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-black">Agent Processing Details</h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setWorkflowAgentDetails(null);
                            }}
                            className="text-gray-400 hover:text-black"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {agent.inputs && (
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                              <div className="text-sm font-semibold text-blue-900 mb-2">Inputs</div>
                              <ul className="space-y-1">
                                {agent.inputs.map((input, idx) => (
                                  <li key={idx} className="text-xs text-blue-800 flex items-start">
                                    <span className="mr-2">→</span>
                                    <span>{input}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {agent.outputs && (
                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                              <div className="text-sm font-semibold text-green-900 mb-2">Outputs</div>
                              <ul className="space-y-1">
                                {agent.outputs.map((output, idx) => (
                                  <li key={idx} className="text-xs text-green-800 flex items-start">
                                    <span className="mr-2">→</span>
                                    <span>{output}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {agent.processing && (
                            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                              <div className="text-sm font-semibold text-purple-900 mb-2">Processing Steps</div>
                              <ul className="space-y-1">
                                {agent.processing.map((proc, idx) => (
                                  <li key={idx} className="text-xs text-purple-800 flex items-start">
                                    <span className="mr-2">→</span>
                                    <span>{proc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {agent.integrations && (
                            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                              <div className="text-sm font-semibold text-orange-900 mb-2">System Integrations</div>
                              <ul className="space-y-1">
                                {agent.integrations.map((integration, idx) => (
                                  <li key={idx} className="text-xs text-orange-800 flex items-start">
                                    <span className="mr-2">→</span>
                                    <span>{integration}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {!isLast && (
                      <div className="flex justify-center py-2">
                        <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <div className="text-xs font-semibold text-purple-700 mb-1">Manager Agents</div>
              <div className="text-2xl font-bold text-purple-900">1</div>
              <div className="text-xs text-purple-600 mt-1">Orchestrator</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="text-xs font-semibold text-blue-700 mb-1">Specialist Agents</div>
              <div className="text-2xl font-bold text-blue-900">3</div>
              <div className="text-xs text-blue-600 mt-1">Domain Experts</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
              <div className="text-xs font-semibold text-green-700 mb-1">Validator Agents</div>
              <div className="text-2xl font-bold text-green-900">2</div>
              <div className="text-xs text-green-600 mt-1">Compliance & Rules</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-black">Agent Performance Monitoring</h3>
                <p className="text-sm text-gray-600 mt-1">Real-time health and accuracy metrics</p>
              </div>
              <button
                onClick={() => setShowPerformance(!showPerformance)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Activity className="w-4 h-4" />
                <span className="text-sm font-semibold">{showPerformance ? 'Hide' : 'Show'} Details</span>
              </button>
            </div>

            {showPerformance && (
              <div className="space-y-4">
                {agents.slice(0, 5).map((agent) => (
                  <div key={agent.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center text-white`}>
                          {getIcon(agent.icon)}
                        </div>
                        <div>
                          <div className="font-semibold text-black">{agent.name}</div>
                          <div className="text-xs text-gray-600">{agent.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-700">Active</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Accuracy</div>
                        <div className="text-lg font-bold text-black">{(95 + Math.random() * 4).toFixed(1)}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Avg Response</div>
                        <div className="text-lg font-bold text-black">{(0.5 + Math.random() * 2).toFixed(1)}s</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Daily Calls</div>
                        <div className="text-lg font-bold text-black">{Math.floor(1000 + Math.random() * 2000)}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">HITL Rate</div>
                        <div className="text-lg font-bold text-black">{(2 + Math.random() * 6).toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!showPerformance && (
              <div className="text-center py-8 text-gray-500">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">Click "Show Details" to view real-time agent performance metrics</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="w-5 h-5 text-black" />
              <h3 className="text-lg font-semibold text-black">Recent Agent Events</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                <Clock className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-black">Fraud Sentinel upgraded to v2.3</div>
                  <div className="text-xs text-gray-600 mt-1">Enhanced pattern recognition • 2 hours ago</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                <Clock className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-black">Learning Agent retrained</div>
                  <div className="text-xs text-gray-600 mt-1">142 new cases incorporated • 5 hours ago</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-black">Compliance Guard policy update</div>
                  <div className="text-xs text-gray-600 mt-1">New CFPB regulations applied • 1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
            <Eye className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">Human-in-the-Loop Integration Philosophy</h3>
            <p className="text-gray-300 mb-4">
              Our agent architecture embraces human expertise as a critical feedback mechanism. Rather than viewing HITL as a failure mode,
              we've designed it as an intentional escalation path that strengthens the entire system.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-semibold mb-2">Smart Escalation</div>
                <p className="text-sm text-gray-400">
                  Agents self-assess confidence and complexity, escalating only when human judgment adds unique value.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Continuous Learning</div>
                <p className="text-sm text-gray-400">
                  Every human decision is captured, labeled, and fed back into training pipelines for model improvement.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Workload Optimization</div>
                <p className="text-sm text-gray-400">
                  Specialists focus on edge cases where expertise matters most, while AI handles repetitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
