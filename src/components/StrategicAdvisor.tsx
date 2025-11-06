import { useState } from 'react';
import {
  TrendingUp, DollarSign, Shield, AlertTriangle, Target, CheckCircle,
  Clock, Users, ArrowRight, Zap, Scale, Brain, Eye, BarChart3,
  Award, Briefcase, FileText, ChevronRight, AlertCircle, Star,
  Activity, TrendingDown, CircleDot, Calendar, Cpu
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface RecommendedAgent {
  id: string;
  name: string;
  priority: 'critical' | 'high' | 'strategic' | 'future';
  roi: string;
  paybackPeriod: string;
  annualSavings: string;
  implementationCost: string;
  timeline: string;
  complexity: 'low' | 'medium' | 'high';
  businessValue: string;
  riskMitigation: string[];
  useCases: string[];
  integrationRequirements: string[];
}

interface WorkflowOptimization {
  id: string;
  name: string;
  priority: 'critical' | 'high' | 'medium';
  currentProcess: string;
  proposedProcess: string;
  timeSaving: string;
  costReduction: string;
  errorReduction: string;
  implementationWeeks: number;
  resources: string[];
  complianceImpact: string;
}

interface Safeguard {
  id: string;
  category: 'compliance' | 'fraud' | 'bias' | 'audit';
  name: string;
  currentGap: string;
  recommendation: string;
  regulatoryImpact: string;
  implementationEffort: 'low' | 'medium' | 'high';
  priority: 'critical' | 'high' | 'medium';
}

export function StrategicAdvisor() {
  const [activeSubTab, setActiveSubTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'90day' | '6month' | '12month'>('90day');
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null);

  const executiveKPIs = [
    {
      label: 'Current Automation Rate',
      value: '95.7%',
      target: '98.5%',
      trend: 'up',
      change: '+2.8%',
      icon: Zap
    },
    {
      label: 'Customer Satisfaction',
      value: '94.2',
      target: '96.0',
      trend: 'up',
      change: '+35%',
      icon: Users
    },
    {
      label: 'Operational Efficiency',
      value: '87%',
      target: '93%',
      trend: 'up',
      change: '+12%',
      icon: Activity
    },
    {
      label: 'Compliance Score',
      value: '98.1%',
      target: '99.5%',
      trend: 'up',
      change: '+1.4%',
      icon: Shield
    }
  ];

  const maturityScore = {
    current: 87,
    industry: 65,
    target: 95
  };

  const roiProjection = [
    { quarter: 'Q1 2025', savings: 2.4, cumulative: 2.4 },
    { quarter: 'Q2 2025', savings: 3.8, cumulative: 6.2 },
    { quarter: 'Q3 2025', savings: 5.2, cumulative: 11.4 },
    { quarter: 'Q4 2025', savings: 6.7, cumulative: 18.1 }
  ];

  const capabilityRadar = [
    { capability: 'Fraud Detection', current: 92, target: 98 },
    { capability: 'Compliance', current: 88, target: 95 },
    { capability: 'Customer Experience', current: 85, target: 93 },
    { capability: 'Process Automation', current: 90, target: 96 },
    { capability: 'Risk Management', current: 86, target: 94 },
    { capability: 'Data Intelligence', current: 78, target: 92 }
  ];

  const recommendedAgents: RecommendedAgent[] = [
    {
      id: 'merchant-intel',
      name: 'Merchant Intelligence & Risk Scoring Agent',
      priority: 'critical',
      roi: '340%',
      paybackPeriod: '4.2 months',
      annualSavings: '$1.8M',
      implementationCost: '$520K',
      timeline: '12-14 weeks',
      complexity: 'medium',
      businessValue: 'Reduces false positives by 47% through real-time merchant behavior analysis and reputation scoring. Prevents legitimate transactions from being blocked while catching 23% more fraudulent merchants.',
      riskMitigation: [
        'Reduces merchant-related chargebacks by $890K annually',
        'Decreases false decline rate from 8.2% to 4.3%',
        'Prevents revenue loss from legitimate customer friction'
      ],
      useCases: [
        'Real-time merchant risk assessment during transaction authorization',
        'Historical fraud pattern matching across merchant categories',
        'Geographic risk scoring for international transactions',
        'Velocity monitoring for first-time merchant interactions'
      ],
      integrationRequirements: [
        'Merchant fraud database (Ethoca, Verifi)',
        'Transaction processing system hooks',
        'Real-time scoring API integration',
        'Fraud Sentinel agent coordination'
      ]
    },
    {
      id: 'predictive-escalation',
      name: 'Predictive Case Escalation & Routing Agent',
      priority: 'high',
      roi: '285%',
      paybackPeriod: '5.8 months',
      annualSavings: '$1.2M',
      implementationCost: '$420K',
      timeline: '10-12 weeks',
      complexity: 'medium',
      businessValue: 'Uses ML to predict which cases will require human review before processing begins, reducing rework by 64% and improving first-time resolution rate from 91% to 97%.',
      riskMitigation: [
        'Prevents costly rework loops and case reassignments',
        'Reduces average case handling time by 38%',
        'Improves specialist utilization efficiency by 52%'
      ],
      useCases: [
        'Early identification of complex disputes requiring expert review',
        'Optimal specialist matching based on case characteristics',
        'Workload balancing across human review teams',
        'Proactive escalation before SLA breach risk'
      ],
      integrationRequirements: [
        'HITL coordinator agent enhancement',
        'Historical case outcome database',
        'Specialist skill matrix and availability system',
        'Queue management platform integration'
      ]
    },
    {
      id: 'sentiment-analyzer',
      name: 'Customer Sentiment & Retention Risk Agent',
      priority: 'high',
      roi: '410%',
      paybackPeriod: '3.6 months',
      annualSavings: '$2.1M',
      implementationCost: '$510K',
      timeline: '8-10 weeks',
      complexity: 'low',
      businessValue: 'Analyzes customer communication patterns to identify at-risk relationships worth $890K in annual revenue. Triggers retention workflows that save 34% of at-risk accounts through proactive intervention.',
      riskMitigation: [
        'Prevents high-value customer attrition ($890K annual revenue protected)',
        'Identifies 76% of churning customers before account closure',
        'Enables targeted retention offers with 34% success rate'
      ],
      useCases: [
        'Real-time sentiment analysis during dispute conversations',
        'Churn risk scoring based on interaction patterns',
        'Automatic routing to retention specialists for high-value accounts',
        'Proactive goodwill gesture recommendations'
      ],
      integrationRequirements: [
        'Customer Outreach agent enhancement',
        'CRM customer lifetime value data',
        'Retention workflow automation platform',
        'Natural language processing API'
      ]
    },
    {
      id: 'regulatory-monitor',
      name: 'Regulatory Change Monitoring & Adaptation Agent',
      priority: 'strategic',
      roi: '220%',
      paybackPeriod: '8.4 months',
      annualSavings: '$680K',
      implementationCost: '$310K',
      timeline: '14-16 weeks',
      complexity: 'high',
      businessValue: 'Automatically monitors OCC, CFPB, FINRA, and card network rule changes, assessing impact on current workflows and recommending policy updates. Reduces compliance risk exposure by 83% and manual policy review time by 91%.',
      riskMitigation: [
        'Eliminates regulatory violation fines (avg $2.4M per incident)',
        'Reduces audit findings by 78% through proactive compliance',
        'Prevents business disruption from last-minute policy changes'
      ],
      useCases: [
        'Daily scanning of regulatory bulletins and rule updates',
        'Impact assessment on existing agent decision logic',
        'Automated policy recommendation generation',
        'Compliance gap analysis and remediation planning'
      ],
      integrationRequirements: [
        'Compliance Guard agent enhancement',
        'Regulatory data feeds (Federal Register, OCC, CFPB)',
        'Policy management system integration',
        'Legal review workflow system'
      ]
    },
    {
      id: 'cross-channel',
      name: 'Cross-Channel Dispute Detection Agent',
      priority: 'strategic',
      roi: '195%',
      paybackPeriod: '9.2 months',
      annualSavings: '$540K',
      implementationCost: '$280K',
      timeline: '10-12 weeks',
      complexity: 'medium',
      businessValue: 'Identifies patterns across credit cards, debit cards, and digital wallets to detect coordinated fraud rings and serial disputers. Catches 18% more organized fraud schemes that span multiple products.',
      riskMitigation: [
        'Detects organized fraud rings across product lines',
        'Identifies friendly fraud patterns (serial disputers)',
        'Reduces cross-product fraud losses by $340K annually'
      ],
      useCases: [
        'Multi-product transaction pattern analysis',
        'Serial disputer identification and flagging',
        'Coordinated fraud ring detection across accounts',
        'Cross-channel velocity and anomaly checks'
      ],
      integrationRequirements: [
        'Enterprise data warehouse access',
        'Multi-product transaction history',
        'Fraud Sentinel agent coordination',
        'Customer relationship graph database'
      ]
    },
    {
      id: 'recovery-optimizer',
      name: 'Recovery Strategy Optimization Agent',
      priority: 'future',
      roi: '165%',
      paybackPeriod: '11.3 months',
      annualSavings: '$420K',
      implementationCost: '$255K',
      timeline: '8-10 weeks',
      complexity: 'low',
      businessValue: 'Analyzes chargeback outcomes and merchant responses to optimize recovery strategies. Increases successful chargeback recoveries from 28% to 41%, recovering an additional $420K annually.',
      riskMitigation: [
        'Improves chargeback win rate by 46% (28% to 41%)',
        'Recovers additional $420K in previously lost chargebacks',
        'Reduces merchant relationship conflicts'
      ],
      useCases: [
        'Chargeback evidence package optimization',
        'Merchant representment strategy recommendations',
        'Recovery timeline optimization',
        'Success probability scoring for disputes'
      ],
      integrationRequirements: [
        'Resolution Executor agent enhancement',
        'Chargeback outcome history database',
        'Card network dispute platforms (Visa RDR, MC Collaborate)',
        'Document management system'
      ]
    }
  ];

  const workflowOptimizations: WorkflowOptimization[] = [
    {
      id: 'parallel-processing',
      name: 'Parallel Agent Execution Architecture',
      priority: 'critical',
      currentProcess: 'Sequential agent execution: Fraud → Eligibility → Compliance → Resolution (avg 24 min)',
      proposedProcess: 'Parallel execution of independent agents with orchestrator synthesis (avg 8 min)',
      timeSaving: '67%',
      costReduction: '$840K/year',
      errorReduction: '23%',
      implementationWeeks: 6,
      resources: ['2 Senior Engineers', '1 Solution Architect', '1 QA Engineer'],
      complianceImpact: 'Maintains all compliance checks; reduces time-sensitive deadline breaches by 78%'
    },
    {
      id: 'preemptive-analysis',
      name: 'Preemptive Transaction Analysis',
      priority: 'high',
      currentProcess: 'Analysis begins after customer reports dispute (reactive)',
      proposedProcess: 'Continuous monitoring flags likely disputes before customer contact (proactive)',
      timeSaving: '84%',
      costReduction: '$1.1M/year',
      errorReduction: '31%',
      implementationWeeks: 10,
      resources: ['3 Data Engineers', '1 ML Engineer', '1 Product Manager'],
      complianceImpact: 'Enhances consumer protection; demonstrates proactive fraud monitoring to regulators'
    },
    {
      id: 'dynamic-confidence',
      name: 'Dynamic Confidence Threshold Adjustment',
      priority: 'high',
      currentProcess: 'Static 60% HITL escalation threshold regardless of case characteristics',
      proposedProcess: 'ML-driven threshold per case based on risk, amount, customer value, complexity',
      timeSaving: '28%',
      costReduction: '$620K/year',
      errorReduction: '19%',
      implementationWeeks: 8,
      resources: ['2 ML Engineers', '1 Data Scientist', '1 Business Analyst'],
      complianceImpact: 'Improves audit trail with documented threshold rationale per case'
    },
    {
      id: 'merchant-auto-outreach',
      name: 'Automated Merchant Outreach & Resolution',
      priority: 'medium',
      currentProcess: 'Manual merchant contact for evidence collection (2-4 day delay)',
      proposedProcess: 'Automated API-based merchant evidence requests with 4-hour SLA',
      timeSaving: '76%',
      costReduction: '$480K/year',
      errorReduction: '41%',
      implementationWeeks: 12,
      resources: ['2 Integration Engineers', '1 Vendor Manager', '1 Product Manager'],
      complianceImpact: 'Reduces chargeback deadline violations; improves merchant relationship documentation'
    },
    {
      id: 'real-time-learning',
      name: 'Real-Time Model Retraining Pipeline',
      priority: 'medium',
      currentProcess: 'Quarterly model retraining with batch processing',
      proposedProcess: 'Continuous learning with hourly micro-retraining on recent cases',
      timeSaving: '12%',
      costReduction: '$290K/year',
      errorReduction: '15%',
      implementationWeeks: 14,
      resources: ['2 ML Engineers', '1 MLOps Engineer', '1 Data Engineer'],
      complianceImpact: 'Enhanced model governance with version control and rollback capabilities'
    }
  ];

  const safeguards: Safeguard[] = [
    {
      id: 'bias-monitoring',
      category: 'bias',
      name: 'Demographic Bias Detection & Alerting',
      currentGap: 'No systematic monitoring for disparate impact across protected classes in automated decisions',
      recommendation: 'Implement real-time bias detection monitoring all automated decisions for statistical disparities across age, gender, race, geography, and income levels. Alert compliance team when bias thresholds exceeded.',
      regulatoryImpact: 'Critical for ECOA compliance; prevents fair lending violations (avg $5M+ fines)',
      implementationEffort: 'medium',
      priority: 'critical'
    },
    {
      id: 'explainability',
      category: 'audit',
      name: 'Decision Explainability & Audit Trail Enhancement',
      currentGap: 'Agent decision rationale captured but not structured for regulatory examination',
      recommendation: 'Create standardized decision explanation format with feature importance, rule citations, confidence breakdowns, and human-readable justifications for all automated actions.',
      regulatoryImpact: 'Required for OCC Model Risk Management guidance; supports fair lending examinations',
      implementationEffort: 'high',
      priority: 'critical'
    },
    {
      id: 'override-tracking',
      category: 'audit',
      name: 'Human Override Pattern Analysis',
      currentGap: 'HITL overrides captured but not analyzed for systematic agent weaknesses',
      recommendation: 'Implement weekly analysis of human override patterns to identify blind spots, bias issues, or systemic errors in agent logic. Feed findings directly to Learning Agent for model improvement.',
      regulatoryImpact: 'Demonstrates continuous improvement and effective governance to regulators',
      implementationEffort: 'low',
      priority: 'high'
    },
    {
      id: 'amount-thresholds',
      category: 'fraud',
      name: 'Dynamic High-Value Transaction Thresholds',
      currentGap: 'Static $2,000 high-value threshold does not account for customer profile or behavior',
      recommendation: 'Implement personalized high-value thresholds per customer based on transaction history, account age, and behavior patterns. Adjust monitoring intensity dynamically.',
      regulatoryImpact: 'Balances fraud prevention with customer experience; reduces false positives',
      implementationEffort: 'medium',
      priority: 'high'
    },
    {
      id: 'regulatory-version',
      category: 'compliance',
      name: 'Regulation Version Control & Change Impact Assessment',
      currentGap: 'Policy updates applied manually; no systematic tracking of which agent versions use which regulation versions',
      recommendation: 'Create regulation version control system linking each agent decision to specific regulatory version. Enable instant impact assessment when regulations change.',
      regulatoryImpact: 'Essential for audit defense; proves which rules applied to which decisions',
      implementationEffort: 'high',
      priority: 'high'
    },
    {
      id: 'stress-testing',
      category: 'compliance',
      name: 'Agent Stress Testing & Adversarial Validation',
      currentGap: 'Agents tested on historical data but not adversarial edge cases or stress scenarios',
      recommendation: 'Quarterly stress testing with adversarial scenarios: coordinated fraud attacks, regulation changes, system failures, volume spikes. Document agent behavior under extreme conditions.',
      regulatoryImpact: 'Aligns with OCC operational resilience expectations; demonstrates robust risk management',
      implementationEffort: 'medium',
      priority: 'medium'
    }
  ];

  const roadmapItems = {
    '90day': [
      { week: 'Week 1-2', item: 'Parallel Agent Architecture - Design & Planning', type: 'optimization' },
      { week: 'Week 3-6', item: 'Implement Merchant Intelligence Agent', type: 'agent' },
      { week: 'Week 4-8', item: 'Deploy Bias Detection Monitoring', type: 'safeguard' },
      { week: 'Week 7-12', item: 'Launch Parallel Execution Framework', type: 'optimization' },
      { week: 'Week 9-12', item: 'Implement Decision Explainability Enhancement', type: 'safeguard' }
    ],
    '6month': [
      { week: 'Q1', item: 'Parallel architecture + Merchant Intel + Bias monitoring', type: 'phase' },
      { week: 'Q2', item: 'Predictive Escalation + Sentiment Analysis agents', type: 'phase' },
      { week: 'Q2', item: 'Preemptive Transaction Analysis workflow', type: 'phase' },
      { week: 'Q3', item: 'Dynamic confidence thresholds + Override tracking', type: 'phase' }
    ],
    '12month': [
      { week: 'Q1-Q2', item: 'Foundation: Critical agents + core optimizations', type: 'phase' },
      { week: 'Q3', item: 'Enhancement: Strategic agents + advanced workflows', type: 'phase' },
      { week: 'Q3-Q4', item: 'Regulatory Monitor + Cross-Channel Detection', type: 'phase' },
      { week: 'Q4', item: 'Future capabilities: Recovery Optimization + Real-time Learning', type: 'phase' }
    ]
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      critical: 'from-red-500 to-red-700',
      high: 'from-orange-500 to-orange-700',
      strategic: 'from-blue-500 to-blue-700',
      medium: 'from-yellow-500 to-yellow-700',
      future: 'from-gray-500 to-gray-700'
    };
    return colors[priority as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  const getPriorityLabel = (priority: string) => {
    const labels = {
      critical: 'CRITICAL PRIORITY',
      high: 'HIGH VALUE',
      strategic: 'STRATEGIC',
      medium: 'MEDIUM',
      future: 'FUTURE CONSIDERATION'
    };
    return labels[priority as keyof typeof labels] || priority.toUpperCase();
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">Strategic Advisory & Optimization Insights</h2>
          <p className="text-sm text-gray-600">Executive-level recommendations for agent expansion, workflow enhancements, and risk mitigation</p>
        </div>
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl px-6 py-4 text-white">
          <div className="text-xs text-gray-300 mb-1">Workflow Maturity Score</div>
          <div className="text-4xl font-bold">{maturityScore.current}</div>
          <div className="text-xs text-gray-400 mt-1">Industry Avg: {maturityScore.industry} • Target: {maturityScore.target}</div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white rounded-t-2xl">
        <div className="flex space-x-6 px-6">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'overview'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Executive Overview</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('agents')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'agents'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Recommended Agents</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('workflows')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'workflows'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Workflow Optimization</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('compliance')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'compliance'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Risk & Compliance</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('financial')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'financial'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Financial Impact</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('roadmap')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'roadmap'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Implementation Roadmap</span>
            </div>
          </button>
        </div>
      </div>

      {activeSubTab === 'overview' && (
        <div className="space-y-8">

      <div className="grid grid-cols-4 gap-4">
        {executiveKPIs.map((kpi, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <kpi.icon className="w-5 h-5 text-black" />
              {kpi.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-black" />
              ) : (
                <TrendingDown className="w-4 h-4 text-black" />
              )}
            </div>
            <div className="text-sm font-medium text-gray-600 mb-2">{kpi.label}</div>
            <div className="text-3xl font-bold text-black mb-1">{kpi.value}</div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Target: {kpi.target}</span>
              <span className="text-xs font-semibold text-black">{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-black mb-6">Projected ROI - Recommended Initiatives</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={roiProjection}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="quarter" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Savings ($M)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="savings" stroke="#000000" strokeWidth={3} name="Quarterly Savings" />
              <Line type="monotone" dataKey="cumulative" stroke="#059669" strokeWidth={3} name="Cumulative Savings" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">Year 1 Savings</div>
              <div className="text-2xl font-bold text-black">$18.1M</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">Total Investment</div>
              <div className="text-2xl font-bold text-black">$2.3M</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="text-xs text-gray-600 mb-1">Blended ROI</div>
              <div className="text-2xl font-bold text-black">687%</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-black mb-6">Capability Assessment</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={capabilityRadar}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="capability" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Current" dataKey="current" stroke="#000000" fill="#000000" fillOpacity={0.3} />
              <Radar name="Target" dataKey="target" stroke="#059669" fill="#059669" fillOpacity={0.1} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Strategic Priorities for BMO Leadership</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Immediate Impact</span>
            </div>
            <p className="text-sm text-gray-300">
              Deploy Merchant Intelligence Agent to reduce false positives by 47%, improving customer experience while catching 23% more fraud.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Risk Mitigation</span>
            </div>
            <p className="text-sm text-gray-300">
              Implement bias detection monitoring immediately to ensure ECOA compliance and prevent potential fair lending violations.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Competitive Advantage</span>
            </div>
            <p className="text-sm text-gray-300">
              Achieve 98.5% automation rate through parallel execution, setting industry benchmark for dispute resolution efficiency.
            </p>
          </div>
        </div>
      </div>
        </div>
      )}

      {activeSubTab === 'agents' && (
        <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">Recommended Agent Investments</h3>
        <p className="text-sm text-gray-600 mb-6">Prioritized by ROI, implementation complexity, and strategic value to BMO</p>

        <div className="space-y-4">
          {recommendedAgents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getPriorityColor(agent.priority)} text-white text-xs font-bold`}>
                        {getPriorityLabel(agent.priority)}
                      </div>
                      <Brain className="w-5 h-5 text-black" />
                      <h4 className="text-lg font-bold text-black">{agent.name}</h4>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">ROI</div>
                        <div className="text-xl font-bold text-black">{agent.roi}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Payback Period</div>
                        <div className="text-xl font-bold text-black">{agent.paybackPeriod}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Annual Savings</div>
                        <div className="text-xl font-bold text-green-700">{agent.annualSavings}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Implementation</div>
                        <div className="text-xl font-bold text-black">{agent.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Complexity</div>
                        <div className={`text-sm font-bold ${agent.complexity === 'low' ? 'text-green-700' : agent.complexity === 'medium' ? 'text-yellow-700' : 'text-red-700'}`}>
                          {agent.complexity.toUpperCase()}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">{agent.businessValue}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 ml-4 transition-transform ${expandedAgent === agent.id ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {expandedAgent === agent.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>Risk Mitigation Benefits</span>
                      </div>
                      <ul className="space-y-2">
                        {agent.riskMitigation.map((risk, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>BMO Use Cases</span>
                      </div>
                      <ul className="space-y-2">
                        {agent.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <CircleDot className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-2">
                      <div className="text-sm font-semibold text-black mb-3 flex items-center space-x-2">
                        <Cpu className="w-4 h-4" />
                        <span>Integration Requirements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {agent.integrationRequirements.map((req, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs text-gray-700">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-2 bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <DollarSign className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-blue-900 mb-1">Financial Summary</div>
                          <div className="text-xs text-blue-800">
                            Initial investment of {agent.implementationCost} delivers {agent.annualSavings} in year-one savings,
                            achieving {agent.roi} ROI with payback in {agent.paybackPeriod}. NPV over 3 years: {(parseFloat(agent.annualSavings.replace(/[$MK,]/g, '')) * 3 - parseFloat(agent.implementationCost.replace(/[$MK,]/g, ''))).toFixed(1)}M.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        </div>
      )}

      {activeSubTab === 'workflows' && (
        <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">Workflow Enhancement Opportunities</h3>
        <p className="text-sm text-gray-600 mb-6">Process optimizations to improve speed, reduce costs, and enhance accuracy</p>

        <div className="space-y-4">
          {workflowOptimizations.map((workflow) => (
            <div key={workflow.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setExpandedWorkflow(expandedWorkflow === workflow.id ? null : workflow.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getPriorityColor(workflow.priority)} text-white text-xs font-bold`}>
                        {getPriorityLabel(workflow.priority)}
                      </div>
                      <Zap className="w-5 h-5 text-black" />
                      <h4 className="text-lg font-bold text-black">{workflow.name}</h4>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Time Saving</div>
                        <div className="text-xl font-bold text-black">{workflow.timeSaving}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Cost Reduction</div>
                        <div className="text-xl font-bold text-green-700">{workflow.costReduction}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Error Reduction</div>
                        <div className="text-xl font-bold text-black">{workflow.errorReduction}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Timeline</div>
                        <div className="text-xl font-bold text-black">{workflow.implementationWeeks}w</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Resources</div>
                        <div className="text-sm font-bold text-black">{workflow.resources.length} roles</div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 ml-4 transition-transform ${expandedWorkflow === workflow.id ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {expandedWorkflow === workflow.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                        <div className="text-sm font-semibold text-red-900 mb-2">Current Process</div>
                        <p className="text-xs text-red-800">{workflow.currentProcess}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-sm font-semibold text-green-900 mb-2">Proposed Process</div>
                        <p className="text-xs text-green-800">{workflow.proposedProcess}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-sm font-semibold text-blue-900 mb-2 flex items-center space-x-2">
                        <Scale className="w-4 h-4" />
                        <span>Compliance Impact</span>
                      </div>
                      <p className="text-xs text-blue-800">{workflow.complianceImpact}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-black mb-2 flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Required Resources</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {workflow.resources.map((resource, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        </div>
      )}

      {activeSubTab === 'compliance' && (
        <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">Guardrails & Safeguards Assessment</h3>
        <p className="text-sm text-gray-600 mb-6">Compliance gaps and recommended safety enhancements</p>

        <div className="grid grid-cols-2 gap-4">
          {safeguards.map((safeguard) => (
            <div key={safeguard.id} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${getPriorityColor(safeguard.priority)} flex items-center justify-center text-white`}>
                    {safeguard.category === 'compliance' && <Scale className="w-5 h-5" />}
                    {safeguard.category === 'fraud' && <Shield className="w-5 h-5" />}
                    {safeguard.category === 'bias' && <Users className="w-5 h-5" />}
                    {safeguard.category === 'audit' && <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black">{safeguard.name}</div>
                    <div className="text-xs text-gray-500 uppercase mt-1">{safeguard.category}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs font-bold ${
                  safeguard.priority === 'critical' ? 'bg-red-100 text-red-800' :
                  safeguard.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {safeguard.priority.toUpperCase()}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1 flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Current Gap</span>
                  </div>
                  <p className="text-xs text-gray-700">{safeguard.currentGap}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1 flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Recommendation</span>
                  </div>
                  <p className="text-xs text-gray-700">{safeguard.recommendation}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="text-xs font-semibold text-blue-900 mb-1">Regulatory Impact</div>
                  <p className="text-xs text-blue-800">{safeguard.regulatoryImpact}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-xs text-gray-600">Implementation Effort:</span>
                  <span className={`text-xs font-bold ${
                    safeguard.implementationEffort === 'low' ? 'text-green-700' :
                    safeguard.implementationEffort === 'medium' ? 'text-yellow-700' :
                    'text-red-700'
                  }`}>
                    {safeguard.implementationEffort.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
      )}

      {activeSubTab === 'financial' && (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">Projected ROI - Recommended Initiatives</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={roiProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="quarter" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" label={{ value: 'Savings ($M)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="savings" stroke="#000000" strokeWidth={3} name="Quarterly Savings" />
                  <Line type="monotone" dataKey="cumulative" stroke="#059669" strokeWidth={3} name="Cumulative Savings" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Year 1 Savings</div>
                  <div className="text-2xl font-bold text-black">$18.1M</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Total Investment</div>
                  <div className="text-2xl font-bold text-black">$2.3M</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Blended ROI</div>
                  <div className="text-2xl font-bold text-black">687%</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">Capability Assessment</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={capabilityRadar}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="capability" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Current" dataKey="current" stroke="#000000" fill="#000000" fillOpacity={0.3} />
                  <Radar name="Target" dataKey="target" stroke="#059669" fill="#059669" fillOpacity={0.1} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'roadmap' && (
        <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">Implementation Roadmap</h3>
            <p className="text-sm text-gray-600">Phased deployment plan for recommended initiatives</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedTimeframe('90day')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                selectedTimeframe === '90day'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              90 Days
            </button>
            <button
              onClick={() => setSelectedTimeframe('6month')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                selectedTimeframe === '6month'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              6 Months
            </button>
            <button
              onClick={() => setSelectedTimeframe('12month')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                selectedTimeframe === '12month'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              12 Months
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {roadmapItems[selectedTimeframe].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="w-24 flex-shrink-0">
                <div className="text-xs font-semibold text-gray-600">{item.week}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-black">{item.item}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                item.type === 'agent' ? 'bg-purple-100 text-purple-800' :
                item.type === 'optimization' ? 'bg-blue-100 text-blue-800' :
                item.type === 'safeguard' ? 'bg-green-100 text-green-800' :
                'bg-gray-200 text-gray-800'
              }`}>
                {item.type === 'agent' ? 'NEW AGENT' :
                 item.type === 'optimization' ? 'OPTIMIZATION' :
                 item.type === 'safeguard' ? 'SAFEGUARD' :
                 'PHASE'}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div className="text-xs font-semibold text-green-700 mb-1">Quick Wins</div>
            <div className="text-2xl font-bold text-green-900">3</div>
            <div className="text-xs text-green-600 mt-1">Implementable in 6-8 weeks</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="text-xs font-semibold text-blue-700 mb-1">Strategic Initiatives</div>
            <div className="text-2xl font-bold text-blue-900">5</div>
            <div className="text-xs text-blue-600 mt-1">High-value 3-6 month projects</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div className="text-xs font-semibold text-purple-700 mb-1">Long-term Investments</div>
            <div className="text-2xl font-bold text-purple-900">3</div>
            <div className="text-xs text-purple-600 mt-1">Future capabilities 6-12 months</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Executive Summary: Next Steps for BMO</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Immediate Action (30 days)</span>
                </div>
                <p className="text-sm text-gray-300">
                  1. Deploy bias detection monitoring (critical compliance risk)
                  <br />2. Begin Merchant Intelligence Agent implementation
                  <br />3. Initiate parallel execution architecture design
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>Strategic Focus (90 days)</span>
                </div>
                <p className="text-sm text-gray-300">
                  1. Complete high-ROI agent deployments (Merchant Intel, Sentiment Analysis)
                  <br />2. Launch parallel execution for 67% time reduction
                  <br />3. Implement decision explainability framework
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-green-400" />
                  <span>Long-term Vision (12 months)</span>
                </div>
                <p className="text-sm text-gray-300">
                  1. Achieve 98.5% automation rate with full agent suite
                  <br />2. Establish industry-leading compliance framework
                  <br />3. Deliver $18.1M in operational savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
    </div>
  );
}
