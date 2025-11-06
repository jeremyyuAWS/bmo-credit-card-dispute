import { useState } from 'react';
import {
  Settings, Shield, Brain, Scale, Zap, AlertTriangle, TrendingUp,
  DollarSign, CheckCircle, Info, RotateCcw, Sliders, Activity,
  Database, Cloud, Server, Cpu, GitBranch, LineChart, BarChart3,
  Clock, AlertCircle, CheckSquare, XCircle, Play, Pause, RefreshCw,
  Eye, Target, Layers, Code, Package, HardDrive, Network, Gauge
} from 'lucide-react';
import { LineChart as RechartsLine, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface ThresholdConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  category: 'fraud' | 'automation' | 'risk' | 'compliance';
  impact: string;
  lastModified: string;
  modifiedBy: string;
}

interface AgentPerformance {
  agentId: string;
  agentName: string;
  status: 'healthy' | 'warning' | 'critical';
  uptime: number;
  avgResponseTime: number;
  successRate: number;
  dailyCalls: number;
  errorRate: number;
  lastDeployment: string;
}

interface ModelVersion {
  id: string;
  version: string;
  deployedDate: string;
  accuracy: number;
  status: 'active' | 'retired' | 'testing';
  trainingDataSize: string;
  features: number;
  agentName: string;
}

interface Integration {
  id: string;
  name: string;
  type: 'api' | 'database' | 'service' | 'queue';
  status: 'connected' | 'degraded' | 'offline';
  latency: number;
  uptime: number;
  lastCheck: string;
  callsPerDay: number;
}

export function AgentConfiguration() {
  const [activeSubTab, setActiveSubTab] = useState('thresholds');
  const [thresholds, setThresholds] = useState<ThresholdConfig[]>([
    {
      id: 'fraud-confidence',
      name: 'Fraud Detection Confidence',
      description: 'Minimum confidence score required to automatically flag a transaction as fraudulent',
      icon: 'shield',
      value: 85,
      min: 50,
      max: 99,
      unit: '%',
      category: 'fraud',
      impact: 'Higher values reduce false positives but may miss some fraud',
      lastModified: '2025-01-15 14:23',
      modifiedBy: 'Sarah Chen'
    },
    {
      id: 'auto-approval-threshold',
      name: 'Auto-Approval Threshold',
      description: 'Maximum dispute amount that can be automatically approved without human review',
      icon: 'dollar-sign',
      value: 200,
      min: 50,
      max: 500,
      unit: '$',
      category: 'automation',
      impact: 'Higher values increase automation but raise financial risk',
      lastModified: '2025-01-10 09:15',
      modifiedBy: 'Michael Torres'
    },
    {
      id: 'hitl-escalation',
      name: 'HITL Escalation Threshold',
      description: 'Confidence level below which cases are escalated to human specialists',
      icon: 'alert-triangle',
      value: 60,
      min: 40,
      max: 85,
      unit: '%',
      category: 'automation',
      impact: 'Lower values send more cases to humans, reducing automation rate',
      lastModified: '2025-01-12 16:45',
      modifiedBy: 'Sarah Chen'
    },
    {
      id: 'high-value-alert',
      name: 'High-Value Transaction Alert',
      description: 'Transaction amount that triggers enhanced fraud monitoring and review',
      icon: 'trending-up',
      value: 2000,
      min: 500,
      max: 5000,
      unit: '$',
      category: 'risk',
      impact: 'Lower values provide more protection but increase review volume',
      lastModified: '2025-01-08 11:30',
      modifiedBy: 'David Kim'
    },
    {
      id: 'velocity-check',
      name: 'Velocity Check Limit',
      description: 'Number of transactions within 24 hours that triggers fraud investigation',
      icon: 'zap',
      value: 10,
      min: 3,
      max: 20,
      unit: 'txns',
      category: 'fraud',
      impact: 'Lower limits catch suspicious activity but may inconvenience heavy users',
      lastModified: '2025-01-14 13:20',
      modifiedBy: 'Sarah Chen'
    },
    {
      id: 'ml-model-confidence',
      name: 'ML Model Minimum Confidence',
      description: 'Minimum confidence required from ML models to take automated action',
      icon: 'brain',
      value: 75,
      min: 50,
      max: 95,
      unit: '%',
      category: 'automation',
      impact: 'Higher values ensure accuracy but reduce automation coverage',
      lastModified: '2025-01-09 10:05',
      modifiedBy: 'Alex Rivera'
    },
    {
      id: 'compliance-risk',
      name: 'Compliance Risk Threshold',
      description: 'Risk score that triggers mandatory compliance officer review',
      icon: 'scale',
      value: 70,
      min: 50,
      max: 90,
      unit: '%',
      category: 'compliance',
      impact: 'Lower values ensure regulatory safety but increase review workload',
      lastModified: '2025-01-11 15:40',
      modifiedBy: 'Jennifer Wang'
    },
    {
      id: 'duplicate-window',
      name: 'Duplicate Charge Detection Window',
      description: 'Time window (in hours) to check for duplicate merchant charges',
      icon: 'check-circle',
      value: 24,
      min: 1,
      max: 72,
      unit: 'hrs',
      category: 'fraud',
      impact: 'Longer windows catch more duplicates but may flag legitimate repeat purchases',
      lastModified: '2025-01-07 14:55',
      modifiedBy: 'Michael Torres'
    }
  ]);

  const [showImpact, setShowImpact] = useState(false);

  const agentPerformance: AgentPerformance[] = [
    {
      agentId: 'fraud-sentinel',
      agentName: 'Fraud Detection Sentinel',
      status: 'healthy',
      uptime: 99.97,
      avgResponseTime: 1.2,
      successRate: 98.4,
      dailyCalls: 12847,
      errorRate: 0.3,
      lastDeployment: '2025-01-12 03:00'
    },
    {
      agentId: 'eligibility',
      agentName: 'Eligibility Verification',
      status: 'healthy',
      uptime: 99.94,
      avgResponseTime: 0.8,
      successRate: 99.1,
      dailyCalls: 11203,
      errorRate: 0.2,
      lastDeployment: '2025-01-10 02:30'
    },
    {
      agentId: 'compliance',
      agentName: 'Compliance Guard',
      status: 'warning',
      uptime: 99.82,
      avgResponseTime: 2.1,
      successRate: 97.8,
      dailyCalls: 10567,
      errorRate: 1.2,
      lastDeployment: '2025-01-14 04:15'
    },
    {
      agentId: 'resolution',
      agentName: 'Resolution Executor',
      status: 'healthy',
      uptime: 99.99,
      avgResponseTime: 1.5,
      successRate: 99.6,
      dailyCalls: 9834,
      errorRate: 0.1,
      lastDeployment: '2025-01-09 01:45'
    },
    {
      agentId: 'outreach',
      agentName: 'Customer Outreach',
      status: 'healthy',
      uptime: 99.91,
      avgResponseTime: 1.8,
      successRate: 98.7,
      dailyCalls: 13456,
      errorRate: 0.5,
      lastDeployment: '2025-01-11 03:30'
    },
    {
      agentId: 'recovery',
      agentName: 'Subscription Recovery',
      status: 'healthy',
      uptime: 99.88,
      avgResponseTime: 2.3,
      successRate: 96.5,
      dailyCalls: 4231,
      errorRate: 0.8,
      lastDeployment: '2025-01-13 02:00'
    },
    {
      agentId: 'learning',
      agentName: 'Continuous Learning',
      status: 'critical',
      uptime: 98.45,
      avgResponseTime: 5.2,
      successRate: 94.3,
      dailyCalls: 2847,
      errorRate: 2.4,
      lastDeployment: '2025-01-15 05:00'
    },
    {
      agentId: 'orchestrator',
      agentName: 'Orchestrator Manager',
      status: 'healthy',
      uptime: 99.98,
      avgResponseTime: 0.6,
      successRate: 99.8,
      dailyCalls: 14892,
      errorRate: 0.1,
      lastDeployment: '2025-01-08 02:15'
    }
  ];

  const performanceHistory = [
    { time: '00:00', fraudSentinel: 98.2, eligibility: 99.0, compliance: 97.5, resolution: 99.4 },
    { time: '04:00', fraudSentinel: 98.5, eligibility: 99.2, compliance: 97.8, resolution: 99.5 },
    { time: '08:00', fraudSentinel: 98.1, eligibility: 98.9, compliance: 97.3, resolution: 99.6 },
    { time: '12:00', fraudSentinel: 98.4, eligibility: 99.1, compliance: 97.8, resolution: 99.7 },
    { time: '16:00', fraudSentinel: 98.6, eligibility: 99.3, compliance: 98.0, resolution: 99.5 },
    { time: '20:00', fraudSentinel: 98.3, eligibility: 99.0, compliance: 97.6, resolution: 99.6 }
  ];

  const responseTimeData = [
    { hour: '12 AM', avg: 1.2, p95: 2.4, p99: 4.1 },
    { hour: '4 AM', avg: 0.9, p95: 1.8, p99: 3.2 },
    { hour: '8 AM', avg: 1.5, p95: 2.8, p99: 4.8 },
    { hour: '12 PM', avg: 2.1, p95: 3.5, p99: 5.9 },
    { hour: '4 PM', avg: 1.8, p95: 3.1, p99: 5.2 },
    { hour: '8 PM', avg: 1.4, p95: 2.6, p99: 4.3 }
  ];

  const modelVersions: ModelVersion[] = [
    {
      id: 'fraud-v23',
      version: 'v2.3.1',
      deployedDate: '2025-01-12',
      accuracy: 98.4,
      status: 'active',
      trainingDataSize: '2.4M cases',
      features: 147,
      agentName: 'Fraud Sentinel'
    },
    {
      id: 'fraud-v22',
      version: 'v2.2.8',
      deployedDate: '2024-12-20',
      accuracy: 97.9,
      status: 'retired',
      trainingDataSize: '2.1M cases',
      features: 142,
      agentName: 'Fraud Sentinel'
    },
    {
      id: 'eligibility-v15',
      version: 'v1.5.2',
      deployedDate: '2025-01-10',
      accuracy: 99.1,
      status: 'active',
      trainingDataSize: '1.8M cases',
      features: 89,
      agentName: 'Eligibility Verification'
    },
    {
      id: 'compliance-v31',
      version: 'v3.1.0',
      deployedDate: '2025-01-14',
      accuracy: 97.8,
      status: 'active',
      trainingDataSize: '950K cases',
      features: 203,
      agentName: 'Compliance Guard'
    },
    {
      id: 'sentiment-v12',
      version: 'v1.2.4',
      deployedDate: '2025-01-08',
      accuracy: 96.5,
      status: 'testing',
      trainingDataSize: '780K cases',
      features: 124,
      agentName: 'Customer Outreach'
    }
  ];

  const integrations: Integration[] = [
    {
      id: 'core-banking',
      name: 'Core Banking System',
      type: 'database',
      status: 'connected',
      latency: 45,
      uptime: 99.98,
      lastCheck: '2 min ago',
      callsPerDay: 45892
    },
    {
      id: 'card-network',
      name: 'Visa/MC Network API',
      type: 'api',
      status: 'connected',
      latency: 120,
      uptime: 99.94,
      lastCheck: '1 min ago',
      callsPerDay: 32456
    },
    {
      id: 'fraud-db',
      name: 'Merchant Fraud Database',
      type: 'database',
      status: 'connected',
      latency: 28,
      uptime: 99.99,
      lastCheck: '30 sec ago',
      callsPerDay: 28347
    },
    {
      id: 'crm-system',
      name: 'Customer CRM',
      type: 'service',
      status: 'degraded',
      latency: 340,
      uptime: 98.76,
      lastCheck: '3 min ago',
      callsPerDay: 19234
    },
    {
      id: 'notification',
      name: 'Notification Service',
      type: 'queue',
      status: 'connected',
      latency: 15,
      uptime: 99.97,
      lastCheck: '1 min ago',
      callsPerDay: 52341
    },
    {
      id: 'compliance-db',
      name: 'Regulatory Database',
      type: 'database',
      status: 'connected',
      latency: 52,
      uptime: 99.92,
      lastCheck: '2 min ago',
      callsPerDay: 15678
    },
    {
      id: 'payment-gateway',
      name: 'Payment Gateway',
      type: 'api',
      status: 'connected',
      latency: 95,
      uptime: 99.89,
      lastCheck: '45 sec ago',
      callsPerDay: 38921
    },
    {
      id: 'ml-platform',
      name: 'ML Training Platform',
      type: 'service',
      status: 'offline',
      latency: 0,
      uptime: 95.23,
      lastCheck: '15 min ago',
      callsPerDay: 3421
    }
  ];

  const handleThresholdChange = (id: string, newValue: number) => {
    setThresholds(prev =>
      prev.map(threshold =>
        threshold.id === id ? { ...threshold, value: newValue } : threshold
      )
    );
  };

  const resetToDefaults = () => {
    setThresholds(prev => prev.map((t, i) => ({ ...t, value: [85, 200, 60, 2000, 10, 75, 70, 24][i] })));
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'shield': Shield,
      'dollar-sign': DollarSign,
      'alert-triangle': AlertTriangle,
      'trending-up': TrendingUp,
      'zap': Zap,
      'brain': Brain,
      'scale': Scale,
      'check-circle': CheckCircle
    };
    const Icon = icons[iconName] || Settings;
    return <Icon className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'fraud': 'from-red-500 to-red-700',
      'automation': 'from-blue-500 to-blue-700',
      'risk': 'from-yellow-500 to-yellow-700',
      'compliance': 'from-green-500 to-green-700'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'fraud': 'Fraud Detection',
      'automation': 'Automation',
      'risk': 'Risk Management',
      'compliance': 'Compliance'
    };
    return labels[category] || category;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'healthy': 'text-green-600 bg-green-100',
      'warning': 'text-yellow-600 bg-yellow-100',
      'critical': 'text-red-600 bg-red-100',
      'connected': 'text-green-600 bg-green-100',
      'degraded': 'text-yellow-600 bg-yellow-100',
      'offline': 'text-red-600 bg-red-100',
      'active': 'text-green-600 bg-green-100',
      'testing': 'text-blue-600 bg-blue-100',
      'retired': 'text-gray-600 bg-gray-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  const groupedThresholds = {
    fraud: thresholds.filter(t => t.category === 'fraud'),
    automation: thresholds.filter(t => t.category === 'automation'),
    risk: thresholds.filter(t => t.category === 'risk'),
    compliance: thresholds.filter(t => t.category === 'compliance')
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">Agent Configuration & Monitoring</h2>
          <p className="text-sm text-gray-600">Real-time control center for agent behavior, performance, and integrations</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-xl border border-gray-200 px-4 py-2">
          <Activity className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-gray-700">All Systems Operational</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white rounded-t-2xl">
        <div className="flex space-x-6 px-6">
          <button
            onClick={() => setActiveSubTab('thresholds')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'thresholds'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Sliders className="w-4 h-4" />
              <span>Thresholds & Rules</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('performance')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'performance'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Performance Monitoring</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('models')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'models'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Model Management</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('integrations')}
            className={`py-4 px-2 border-b-2 text-sm font-semibold transition-colors ${
              activeSubTab === 'integrations'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>Integration Health</span>
            </div>
          </button>
        </div>
      </div>

      {activeSubTab === 'thresholds' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowImpact(!showImpact)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                  showImpact
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Info className="w-4 h-4" />
                <span className="text-sm font-semibold">{showImpact ? 'Hide' : 'Show'} Impact</span>
              </button>
              <button
                onClick={resetToDefaults}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Reset Defaults</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              {Object.entries(groupedThresholds).map(([category, configs]) => (
                <div key={category} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sliders className="w-5 h-5 text-black" />
                    <h3 className="text-lg font-semibold text-black">{getCategoryLabel(category)}</h3>
                    <span className="text-xs text-gray-500">({configs.length} parameters)</span>
                  </div>

                  <div className="space-y-5">
                    {configs.map((threshold) => (
                      <div key={threshold.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(threshold.category)} flex items-center justify-center text-white shadow`}>
                              {getIcon(threshold.icon)}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-black mb-1">{threshold.name}</div>
                              <div className="text-xs text-gray-600">{threshold.description}</div>
                              {showImpact && (
                                <div className="mt-2 flex items-start space-x-2 bg-blue-50 rounded-lg p-2 border border-blue-100">
                                  <Info className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-blue-800">{threshold.impact}</span>
                                </div>
                              )}
                              <div className="mt-2 flex items-center space-x-3 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{threshold.lastModified}</span>
                                </span>
                                <span>•</span>
                                <span>by {threshold.modifiedBy}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-black">
                              {threshold.value}{threshold.unit}
                            </div>
                            <div className="text-xs text-gray-500">
                              {threshold.min}{threshold.unit} - {threshold.max}{threshold.unit}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-gray-500 w-12">{threshold.min}{threshold.unit}</span>
                          <input
                            type="range"
                            min={threshold.min}
                            max={threshold.max}
                            value={threshold.value}
                            onChange={(e) => handleThresholdChange(threshold.id, Number(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, black 0%, black ${((threshold.value - threshold.min) / (threshold.max - threshold.min)) * 100}%, #e5e7eb ${((threshold.value - threshold.min) / (threshold.max - threshold.min)) * 100}%, #e5e7eb 100%)`
                            }}
                          />
                          <span className="text-xs text-gray-500 w-12 text-right">{threshold.max}{threshold.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 text-white sticky top-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Gauge className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">System Impact</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-300 mb-2">Automation Rate</div>
                    <div className="text-3xl font-bold mb-1">
                      {Math.round(100 - (thresholds.find(t => t.id === 'hitl-escalation')?.value || 60) * 0.5)}%
                    </div>
                    <div className="text-xs text-gray-400">Cases handled automatically</div>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="text-sm text-gray-300 mb-2">Fraud Detection Coverage</div>
                    <div className="text-3xl font-bold mb-1">
                      {Math.round((thresholds.find(t => t.id === 'fraud-confidence')?.value || 85) * 1.1)}%
                    </div>
                    <div className="text-xs text-gray-400">Fraudulent transactions caught</div>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="text-sm text-gray-300 mb-2">Average Resolution Time</div>
                    <div className="text-3xl font-bold mb-1">
                      {(2.5 - (thresholds.find(t => t.id === 'auto-approval-threshold')?.value || 200) / 200).toFixed(1)}m
                    </div>
                    <div className="text-xs text-gray-400">From dispute to resolution</div>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="text-sm text-gray-300 mb-2">Risk Exposure</div>
                    <div className="text-3xl font-bold mb-1">
                      ${(thresholds.find(t => t.id === 'auto-approval-threshold')?.value || 200) * 45}K
                    </div>
                    <div className="text-xs text-gray-400">Maximum daily exposure</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-blue-900 mb-2">Configuration Tips</div>
                    <ul className="text-xs text-blue-800 space-y-1.5">
                      <li>• Higher fraud thresholds reduce false alerts but may miss edge cases</li>
                      <li>• Lower HITL thresholds improve accuracy but reduce automation</li>
                      <li>• Balance speed and safety based on your risk tolerance</li>
                      <li>• Monitor impact metrics after making changes</li>
                      <li>• Changes are applied immediately to all agents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Agents</span>
                <Cpu className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{agentPerformance.length}</div>
              <div className="text-xs text-gray-500">{agentPerformance.filter(a => a.status === 'healthy').length} healthy</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">1.5s</div>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                12% faster
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Success Rate</span>
                <CheckCircle className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">98.3%</div>
              <div className="text-xs text-gray-500">Last 24 hours</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Daily Calls</span>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">67K</div>
              <div className="text-xs text-gray-500">Across all agents</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Agent Success Rates (24h)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={performanceHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" stroke="#6b7280" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#6b7280" domain={[95, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="fraudSentinel" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Fraud Sentinel" />
                  <Area type="monotone" dataKey="eligibility" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Eligibility" />
                  <Area type="monotone" dataKey="compliance" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Compliance" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Response Time Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsLine data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="hour" stroke="#6b7280" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#6b7280" label={{ value: 'Seconds', angle: -90, position: 'insideLeft', fontSize: 12 }} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="avg" stroke="#000000" strokeWidth={3} name="Average" />
                  <Line type="monotone" dataKey="p95" stroke="#3b82f6" strokeWidth={2} name="95th Percentile" />
                  <Line type="monotone" dataKey="p99" stroke="#ef4444" strokeWidth={2} name="99th Percentile" />
                </RechartsLine>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Agent Health Dashboard</h3>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <RefreshCw className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Refresh</span>
              </button>
            </div>

            <div className="space-y-4">
              {agentPerformance.map((agent) => (
                <div key={agent.agentId} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-black">{agent.agentName}</div>
                        <div className="text-xs text-gray-600">ID: {agent.agentId}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(agent.status)}`}>
                        {agent.status.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${agent.status === 'healthy' ? 'bg-green-500' : agent.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'} animate-pulse`}></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Uptime</div>
                      <div className="text-lg font-bold text-black">{agent.uptime}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Response Time</div>
                      <div className="text-lg font-bold text-black">{agent.avgResponseTime}s</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Success Rate</div>
                      <div className="text-lg font-bold text-black">{agent.successRate}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Daily Calls</div>
                      <div className="text-lg font-bold text-black">{agent.dailyCalls.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Error Rate</div>
                      <div className="text-lg font-bold text-black">{agent.errorRate}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Last Deploy</div>
                      <div className="text-xs font-semibold text-gray-700">{agent.lastDeployment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'models' && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Active Models</span>
                <Brain className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{modelVersions.filter(m => m.status === 'active').length}</div>
              <div className="text-xs text-gray-500">Currently deployed</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Accuracy</span>
                <Target className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">98.2%</div>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +1.4% vs prev
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Training Data</span>
                <Database className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">6.1M</div>
              <div className="text-xs text-gray-500">Total cases</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">In Testing</span>
                <Play className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{modelVersions.filter(m => m.status === 'testing').length}</div>
              <div className="text-xs text-gray-500">Pre-production</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Model Version Registry</h3>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors">
                <Play className="w-4 h-4" />
                <span className="text-sm font-semibold">Deploy New Version</span>
              </button>
            </div>

            <div className="space-y-4">
              {modelVersions.map((model) => (
                <div key={model.id} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white">
                        <Brain className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-black text-lg mb-1">{model.agentName}</div>
                        <div className="text-sm text-gray-600 mb-2">Version {model.version}</div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Deployed: {model.deployedDate}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Database className="w-3 h-3" />
                            <span>{model.trainingDataSize}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Layers className="w-3 h-3" />
                            <span>{model.features} features</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold mb-2 ${getStatusColor(model.status)}`}>
                        {model.status.toUpperCase()}
                      </div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                      <div className="text-2xl font-bold text-black">{model.accuracy}%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      {model.status === 'active' && (
                        <>
                          <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                            View Metrics
                          </button>
                          <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                            Download
                          </button>
                        </>
                      )}
                      {model.status === 'testing' && (
                        <>
                          <button className="px-3 py-1 rounded-lg bg-green-600 text-white text-xs font-semibold hover:bg-green-700">
                            Promote to Production
                          </button>
                          <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                            View Test Results
                          </button>
                        </>
                      )}
                      {model.status === 'retired' && (
                        <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                            Archive
                          </button>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      Model ID: {model.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-purple-900 mb-2">Model Management Best Practices</div>
                <ul className="text-xs text-purple-800 space-y-1.5">
                  <li>• Test new models in shadow mode before promoting to production</li>
                  <li>• Monitor accuracy metrics for 48 hours post-deployment</li>
                  <li>• Maintain at least 2 previous versions for rollback capability</li>
                  <li>• Retrain models monthly with new dispute data</li>
                  <li>• Document all model changes in the audit log</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'integrations' && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Integrations</span>
                <Network className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">{integrations.length}</div>
              <div className="text-xs text-gray-500">{integrations.filter(i => i.status === 'connected').length} connected</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Avg Latency</span>
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">
                {Math.round(integrations.reduce((sum, i) => sum + i.latency, 0) / integrations.length)}ms
              </div>
              <div className="text-xs text-gray-500">Across all endpoints</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">System Uptime</span>
                <CheckCircle className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">99.2%</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Daily API Calls</span>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold text-black mb-1">
                {(integrations.reduce((sum, i) => sum + i.callsPerDay, 0) / 1000).toFixed(0)}K
              </div>
              <div className="text-xs text-gray-500">Total volume</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Integration Health Monitor</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-semibold text-gray-700">{integrations.filter(i => i.status === 'connected').length} Connected</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gray-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs font-semibold text-gray-700">{integrations.filter(i => i.status === 'degraded').length} Degraded</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gray-100">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs font-semibold text-gray-700">{integrations.filter(i => i.status === 'offline').length} Offline</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {integrations.map((integration) => (
                <div key={integration.id} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        integration.type === 'api' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                        integration.type === 'database' ? 'bg-gradient-to-br from-green-500 to-green-700' :
                        integration.type === 'service' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                        'bg-gradient-to-br from-orange-500 to-orange-700'
                      } text-white`}>
                        {integration.type === 'api' && <Cloud className="w-5 h-5" />}
                        {integration.type === 'database' && <Database className="w-5 h-5" />}
                        {integration.type === 'service' && <Server className="w-5 h-5" />}
                        {integration.type === 'queue' && <Layers className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="font-semibold text-black">{integration.name}</div>
                        <div className="text-xs text-gray-600 uppercase mt-1">{integration.type}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-bold ${getStatusColor(integration.status)}`}>
                      {integration.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Latency</div>
                      <div className="text-sm font-bold text-black">{integration.latency}ms</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Uptime</div>
                      <div className="text-sm font-bold text-black">{integration.uptime}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Calls/Day</div>
                      <div className="text-sm font-bold text-black">{(integration.callsPerDay / 1000).toFixed(1)}K</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500">Last check: {integration.lastCheck}</span>
                    <button className="text-xs font-semibold text-black hover:underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-red-900 mb-2">Integration Alerts</div>
                <div className="space-y-2">
                  <div className="text-xs text-red-800 bg-white rounded-lg p-3 border border-red-200">
                    <strong>ML Training Platform</strong> - Connection lost 15 minutes ago. Automated retries in progress.
                  </div>
                  <div className="text-xs text-red-800 bg-white rounded-lg p-3 border border-red-200">
                    <strong>Customer CRM</strong> - Elevated latency detected (340ms). Investigating performance degradation.
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
