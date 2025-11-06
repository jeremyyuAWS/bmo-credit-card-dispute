import { useState } from 'react';
import { TrendingDown, TrendingUp, ArrowUp, ArrowDown, Clock, Users, CheckCircle, Zap, Brain, AlertTriangle, Lightbulb, Target, Activity, BarChart3, PieChart, Sparkles, TrendingUpIcon } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell, PieChart as RePieChart, Pie } from 'recharts';
import analyticsData from '../data/analytics.json';

type SubTab = 'overview' | 'real-time' | 'predictive' | 'agent-performance' | 'pattern-discovery';

export function EnhancedAnalytics() {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('overview');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-50 border-red-200 text-red-900';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'low': return 'bg-blue-50 border-blue-200 text-blue-900';
      default: return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'anomaly': return AlertTriangle;
      case 'opportunity': return Target;
      case 'risk': return AlertTriangle;
      case 'efficiency': return Lightbulb;
      default: return Brain;
    }
  };

  const COLORS = ['#000000', '#374151', '#6b7280', '#9ca3af'];

  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      <div className="p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">AI-Powered Analytics</h2>
          <p className="text-sm text-gray-600">Deep insights and predictive intelligence for strategic decision-making</p>
        </div>

        <div className="flex space-x-2 border-b border-gray-200 bg-white rounded-t-2xl px-4">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeSubTab === 'overview'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('real-time')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeSubTab === 'real-time'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Real-time Intelligence</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('predictive')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeSubTab === 'predictive'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <TrendingUpIcon className="w-4 h-4" />
              <span>Predictive Analytics</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('agent-performance')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeSubTab === 'agent-performance'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Agent Performance</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSubTab('pattern-discovery')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeSubTab === 'pattern-discovery'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Pattern Discovery</span>
            </div>
          </button>
        </div>

        {activeSubTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {analyticsData.metrics.map((metric) => (
                <div key={metric.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-black" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-black" />
                    )}
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-black">{metric.value}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium flex items-center ${metric.trend === 'up' ? 'text-black' : 'text-black'}`}>
                      {metric.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                      {metric.change}
                    </span>
                    <span className="text-xs text-gray-500">{metric.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">Resolution Time Comparison</h3>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Traditional Process</div>
                      <div className="text-3xl font-bold text-gray-800">7-14 days</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Manual review required</span>
                      <span className="font-semibold">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Multiple touchpoints</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Teams involved</span>
                      <span className="font-semibold">9</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-300 mb-1">Agentic AI Process</div>
                      <div className="text-3xl font-bold text-white">24 minutes</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Manual review required</span>
                      <span className="font-semibold text-white">4.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Multiple touchpoints</span>
                      <span className="font-semibold text-white">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Teams involved</span>
                      <span className="font-semibold text-white">1</span>
                    </div>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analyticsData.resolutionTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="traditional" stroke="#999999" strokeWidth={3} name="Traditional (hours)" />
                  <Line type="monotone" dataKey="agentic" stroke="#000000" strokeWidth={3} name="Agentic (minutes)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-6">Cost Savings Breakdown</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <RePieChart>
                    <Pie
                      data={analyticsData.costSavingsBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analyticsData.costSavingsBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${(value / 1000).toFixed(0)}K`} />
                  </RePieChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-600 mb-1">Total Annual Savings</div>
                  <div className="text-3xl font-bold text-black">$2.4M</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-6">Process Efficiency Gains</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.processComparison}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="metric" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="traditional" fill="#999999" name="AS-IS" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="agentic" fill="#000000" name="TO-BE" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'real-time' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <Activity className="w-6 h-6" />
                <h3 className="text-xl font-bold">Live AI Intelligence Feed</h3>
              </div>
              <p className="text-sm text-gray-300">Real-time insights detected by autonomous agents analyzing patterns across all dispute cases</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {analyticsData.liveInsights.map((insight) => {
                const Icon = getTypeIcon(insight.type);
                return (
                  <div key={insight.id} className={`bg-white rounded-2xl border-2 p-6 ${getSeverityColor(insight.severity)}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-black bg-opacity-10 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base">{insight.title}</h4>
                          <span className="text-xs opacity-70">{insight.timestamp}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Confidence</div>
                        <div className="text-2xl font-bold">{insight.confidence}%</div>
                      </div>
                    </div>
                    <p className="text-sm mb-3 leading-relaxed">{insight.description}</p>
                    <div className="bg-white bg-opacity-50 rounded-xl p-3 border border-black border-opacity-10">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-70">AI Recommendation</div>
                      <p className="text-sm font-medium">{insight.recommendation}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">Fraud Risk Trends (Last 7 Days)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analyticsData.fraudRiskTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="prevented" stackId="1" stroke="#10b981" fill="#10b981" name="AI Prevented" />
                  <Area type="monotone" dataKey="flagged" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Flagged for Review" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeSubTab === 'predictive' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUpIcon className="w-6 h-6" />
                <h3 className="text-xl font-bold">Predictive Forecasting</h3>
              </div>
              <p className="text-sm text-blue-100">AI models predict future dispute volumes with 93% accuracy based on historical patterns and external factors</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">6-Week Dispute Volume Forecast</h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={analyticsData.predictiveForecasts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#10b981"
                    strokeWidth={3}
                    name="Actual Volume"
                    connectNulls={false}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="AI Prediction"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="text-xs text-green-700 mb-1">Prediction Accuracy</div>
                  <div className="text-2xl font-bold text-green-900">96.2%</div>
                  <div className="text-xs text-green-600 mt-1">Last 3 weeks avg</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-xs text-blue-700 mb-1">Expected Growth</div>
                  <div className="text-2xl font-bold text-blue-900">+14.3%</div>
                  <div className="text-xs text-blue-600 mt-1">Next 6 weeks</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="text-xs text-purple-700 mb-1">Staff Planning</div>
                  <div className="text-2xl font-bold text-purple-900">+2 FTE</div>
                  <div className="text-xs text-purple-600 mt-1">Recommended</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">AI-Powered Business Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Brain className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Volume Spike Expected</h4>
                    <p className="text-sm text-gray-700">AI predicts 18% increase in dispute volume during Week 5 due to holiday shopping refunds. Recommend proactive staffing adjustment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Target className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Seasonal Pattern Identified</h4>
                    <p className="text-sm text-gray-700">Historical analysis shows consistent Q4 surge. AI agents are pre-training on previous year's patterns to improve response accuracy by 12%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-black mt-1" />
                  <div>
                    <h4 className="font-semibold text-black mb-1">Cost Optimization Opportunity</h4>
                    <p className="text-sm text-gray-700">Predicted volume allows for strategic agent rebalancing, saving estimated $47K in compute costs while maintaining 24-min resolution time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'agent-performance' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <Brain className="w-6 h-6" />
                <h3 className="text-xl font-bold">Agent Performance Analytics</h3>
              </div>
              <p className="text-sm text-purple-100">Deep insights into each AI agent's accuracy, speed, and continuous learning metrics</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {analyticsData.agentEfficiency.map((agent) => (
                <div key={agent.agent} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-black">{agent.agent}</h4>
                      <p className="text-sm text-gray-600">{agent.cases.toLocaleString()} cases processed this month</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600 mb-1">Overall Score</div>
                      <div className="text-3xl font-bold text-black">
                        {((agent.accuracy + agent.speed) / 2).toFixed(1)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <div className="text-xs text-green-700 mb-1">Accuracy</div>
                      <div className="text-2xl font-bold text-green-900">{agent.accuracy}%</div>
                      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${agent.accuracy}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="text-xs text-blue-700 mb-1">Speed</div>
                      <div className="text-2xl font-bold text-blue-900">{agent.speed}%</div>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${agent.speed}%` }}></div>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-xs text-purple-700 mb-1">Learning Rate</div>
                      <div className="text-2xl font-bold text-purple-900">+{agent.learning}%</div>
                      <div className="text-xs text-purple-600 mt-1">Month over month</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-6">Agent Capability Radar</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={analyticsData.agentEfficiency.map(a => ({
                  agent: a.agent,
                  Accuracy: a.accuracy,
                  Speed: a.speed,
                  Learning: a.learning * 3
                }))}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="agent" stroke="#6b7280" />
                  <PolarRadiusAxis stroke="#6b7280" />
                  <Radar name="Accuracy" dataKey="Accuracy" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <Radar name="Speed" dataKey="Speed" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Radar name="Learning" dataKey="Learning" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeSubTab === 'pattern-discovery' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl font-bold">AI Pattern Discovery</h3>
              </div>
              <p className="text-sm text-orange-100">Learning Agent automatically identifies dispute patterns and suggests proactive solutions to prevent future cases</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {analyticsData.patternDiscovery.map((pattern) => (
                <div key={pattern.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-black">{pattern.pattern}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pattern.impact === 'high' ? 'bg-red-100 text-red-800' :
                          pattern.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {pattern.impact.toUpperCase()} IMPACT
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pattern.trend === 'up' ? 'bg-red-100 text-red-800' :
                          pattern.trend === 'down' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {pattern.trend === 'up' ? 'RISING' : pattern.trend === 'down' ? 'DECLINING' : 'STABLE'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">{pattern.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div>
                          <span className="text-gray-600">Frequency: </span>
                          <span className="font-bold text-black">{pattern.frequency} cases/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-xs text-gray-600 mb-1">Potential Reduction</div>
                      <div className="text-4xl font-bold text-green-600">{pattern.estimatedReduction}</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border-2 border-green-200">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-green-700 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-1">AI-Suggested Solution</div>
                        <p className="text-sm font-medium text-gray-900">{pattern.aiSuggestion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Pattern Impact Analysis</h3>
              <p className="text-sm text-gray-600 mb-6">If all AI-suggested solutions are implemented, projected dispute reduction:</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300">
                  <div className="text-xs text-green-700 mb-1">Total Cases Prevented</div>
                  <div className="text-3xl font-bold text-green-900">521</div>
                  <div className="text-xs text-green-600 mt-1">per month</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                  <div className="text-xs text-blue-700 mb-1">Cost Savings</div>
                  <div className="text-3xl font-bold text-blue-900">$167K</div>
                  <div className="text-xs text-blue-600 mt-1">annually</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-300">
                  <div className="text-xs text-purple-700 mb-1">Customer Satisfaction</div>
                  <div className="text-3xl font-bold text-purple-900">+23%</div>
                  <div className="text-xs text-purple-600 mt-1">projected lift</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-300">
                  <div className="text-xs text-orange-700 mb-1">Implementation Time</div>
                  <div className="text-3xl font-bold text-orange-900">4-6w</div>
                  <div className="text-xs text-orange-600 mt-1">estimated</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
