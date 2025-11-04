import { TrendingDown, TrendingUp, ArrowUp, ArrowDown, Clock, Users, CheckCircle, Zap } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import analyticsData from '../data/analytics.json';

export function AnalyticsDashboard() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2">Analytics Dashboard</h2>
        <p className="text-sm text-gray-600">Performance metrics and ROI analysis</p>
      </div>

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

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="text-xs text-green-700 mb-1">Time Saved</div>
            <div className="text-2xl font-bold text-green-900">68%</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="text-xs text-blue-700 mb-1">Cost Reduction</div>
            <div className="text-2xl font-bold text-blue-900">$2.4M/yr</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <div className="text-xs text-purple-700 mb-1">Customer Satisfaction</div>
            <div className="text-2xl font-bold text-purple-900">+35%</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-6">Process Efficiency: AS-IS vs TO-BE</h3>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-semibold text-gray-600 mb-2">AS-IS: Traditional Dispute Resolution</div>
              <div className="text-xs text-gray-500">Legacy multi-team manual process</div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-900">9 Teams</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">1</div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-sm font-semibold text-gray-900">Customer Contact Center</div>
                <div className="text-xs text-gray-600">Initial intake and documentation (2-3 days)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">2</div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-sm font-semibold text-gray-900">Fraud Investigation Team</div>
                <div className="text-xs text-gray-600">Transaction analysis and verification (1-2 days)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">3</div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-sm font-semibold text-gray-900">Compliance & Legal Review</div>
                <div className="text-xs text-gray-600">Policy validation and risk assessment (1-3 days)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">4</div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-sm font-semibold text-gray-900">Merchant Relations</div>
                <div className="text-xs text-gray-600">Outreach and evidence collection (2-4 days)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">5</div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-sm font-semibold text-gray-900">Resolution & Refunds</div>
                <div className="text-xs text-gray-600">Decision and processing (1-2 days)</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between bg-gray-100 rounded-lg p-4">
            <div>
              <div className="text-xs text-gray-600">Total Process Time</div>
              <div className="text-2xl font-bold text-gray-900">7-14 days</div>
            </div>
            <div>
              <div className="text-xs text-gray-600">Manual Steps</div>
              <div className="text-2xl font-bold text-gray-900">72</div>
            </div>
            <div>
              <div className="text-xs text-gray-600">Error Rate</div>
              <div className="text-2xl font-bold text-gray-900">8.2%</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-2">TO-BE: Agentic AI Resolution</div>
              <div className="text-xs text-gray-600">Autonomous multi-agent orchestration</div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-black" />
              <span className="text-sm font-semibold text-black">1 AI System</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-xs font-bold text-white">1</div>
              <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                <div className="text-sm font-semibold text-black">Detection → Eligibility → Compliance → Resolution</div>
                <div className="text-xs text-gray-700">Parallel AI agent execution (24 minutes average)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-xs font-bold text-white">2</div>
              <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                <div className="text-sm font-semibold text-black">Recovery & Learning Agents</div>
                <div className="text-xs text-gray-700">Subscription reconnection and model retraining (automated)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">3</div>
              <div className="flex-1 bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <div className="text-sm font-semibold text-yellow-900">Human-in-the-Loop Review</div>
                <div className="text-xs text-yellow-700">Edge cases only - 4.3% of total disputes</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between bg-gradient-to-br from-black to-gray-800 rounded-lg p-4 text-white">
            <div>
              <div className="text-xs text-gray-300">Total Process Time</div>
              <div className="text-2xl font-bold text-white">24 min</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Manual Steps</div>
              <div className="text-2xl font-bold text-white">6</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Error Rate</div>
              <div className="text-2xl font-bold text-white">1.1%</div>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analyticsData.processComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="metric" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Bar dataKey="traditional" fill="#999999" name="AS-IS (Traditional)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="agentic" fill="#000000" name="TO-BE (Agentic AI)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-3">Key Insights</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>68% faster resolution</strong> - Disputes now resolved in 24 minutes vs. 7-14 days traditionally</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>82% reduction in manual work</strong> - Only 4.3% of cases require human intervention</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Zero compliance violations</strong> - Real-time policy validation prevents audit risks</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>35% improvement in satisfaction</strong> - Customer sentiment score increased to +82</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>87% error reduction</strong> - Error rate dropped from 8.2% to 1.1% with AI automation</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>$2.4M annual savings</strong> - Reduced operational costs through automation and efficiency</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
