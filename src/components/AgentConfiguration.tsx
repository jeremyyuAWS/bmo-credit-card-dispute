import { useState } from 'react';
import {
  Settings, Shield, Brain, Scale, Zap, AlertTriangle, TrendingUp,
  DollarSign, CheckCircle, Info, RotateCcw, Sliders
} from 'lucide-react';

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
}

export function AgentConfiguration() {
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
      impact: 'Higher values reduce false positives but may miss some fraud'
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
      impact: 'Higher values increase automation but raise financial risk'
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
      impact: 'Lower values send more cases to humans, reducing automation rate'
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
      impact: 'Lower values provide more protection but increase review volume'
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
      impact: 'Lower limits catch suspicious activity but may inconvenience heavy users'
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
      impact: 'Higher values ensure accuracy but reduce automation coverage'
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
      impact: 'Lower values ensure regulatory safety but increase review workload'
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
      impact: 'Longer windows catch more duplicates but may flag legitimate repeat purchases'
    }
  ]);

  const [showImpact, setShowImpact] = useState(false);

  const handleThresholdChange = (id: string, newValue: number) => {
    setThresholds(prev =>
      prev.map(threshold =>
        threshold.id === id ? { ...threshold, value: newValue } : threshold
      )
    );
  };

  const resetToDefaults = () => {
    setThresholds([
      { ...thresholds[0], value: 85 },
      { ...thresholds[1], value: 200 },
      { ...thresholds[2], value: 60 },
      { ...thresholds[3], value: 2000 },
      { ...thresholds[4], value: 10 },
      { ...thresholds[5], value: 75 },
      { ...thresholds[6], value: 70 },
      { ...thresholds[7], value: 24 }
    ]);
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
          <h2 className="text-2xl font-bold text-black mb-2">Agent Configuration</h2>
          <p className="text-sm text-gray-600">Adjust thresholds and parameters that control agent behavior and automation levels</p>
        </div>
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
              <TrendingUp className="w-5 h-5" />
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
                <div className="text-sm text-gray-300 mb-2">Customer Satisfaction</div>
                <div className="text-3xl font-bold mb-1">94%</div>
                <div className="text-xs text-gray-400">Based on current settings</div>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
