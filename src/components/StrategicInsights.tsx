import { TrendingUp, Target, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, DollarSign, Users, Shield, Zap } from 'lucide-react';

export function StrategicInsights() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2">Strategic Insights & Recommendations</h2>
        <p className="text-sm text-gray-600">Executive analysis of AI-driven fraud resolution workflow with strategic recommendations</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-xs font-semibold text-gray-600">Resolution Speed</span>
          </div>
          <div className="text-2xl font-bold text-black">2.3 min</div>
          <div className="text-xs text-gray-600 mt-1">vs. 4.2 hrs industry avg</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-semibold text-gray-600">Cost Efficiency</span>
          </div>
          <div className="text-2xl font-bold text-black">$3.20</div>
          <div className="text-xs text-gray-600 mt-1">per case (73% reduction)</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-green-600" />
            <span className="text-xs font-semibold text-gray-600">Customer Satisfaction</span>
          </div>
          <div className="text-2xl font-bold text-black">94%</div>
          <div className="text-xs text-gray-600 mt-1">CSAT score (+12pts YoY)</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-xs font-semibold text-gray-600">Automation Rate</span>
          </div>
          <div className="text-2xl font-bold text-black">87%</div>
          <div className="text-xs text-gray-600 mt-1">straight-through processing</div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-bold text-black">Workflow Analysis: Fraudulent Charge Resolution</h3>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-black mb-3">Current State Performance</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Time to Resolution</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Minutes vs industry hours - creates significant customer satisfaction advantage and reduces operational burden</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Automation Rate</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Near-complete automation enables staff reallocation to complex investigations and relationship management</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Cost Structure</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Dramatic per-case cost reduction creates sustainable competitive moat and improves unit economics</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-3">Agent Orchestration Insights</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Detection Agent</span>
                  <span className="text-xs font-bold text-red-600">Fraud Sentinel</span>
                </div>
                <p className="text-sm text-gray-700">Real-time monitoring prevents fraud before customer awareness - proactive protection drives brand loyalty</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Compliance Layer</span>
                  <span className="text-xs font-bold text-purple-600">Always Active</span>
                </div>
                <p className="text-sm text-gray-700">Embedded regulatory validation eliminates audit risk and reduces compliance overhead costs</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-600">Learning Loop</span>
                  <span className="text-xs font-bold text-indigo-600">Continuous</span>
                </div>
                <p className="text-sm text-gray-700">Pattern recognition improves with every case - creates compounding accuracy advantage over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Lightbulb className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-bold text-black">Strategic Recommendations</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border-l-4 border-green-500">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black mb-2">Leverage Market Leadership for Premium Card Growth</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Opportunity:</strong> Industry-leading fraud resolution speed creates differentiation for premium card products. Marketing can emphasize "instant protection" as key value proposition.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Action:</strong> Launch targeted campaign positioning BMO as technology leader in fraud protection. Expected to drive premium card acquisition and increase share of wallet.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black mb-2">Expand Multi-Agent Framework to Additional Use Cases</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Opportunity:</strong> Proven ROI and customer satisfaction justify expansion to loan origination, credit line increases, and payment disputes.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Action:</strong> Prioritize high-volume, rules-based workflows for next deployment. Expected to multiply cost savings and extend competitive advantage across product lines.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 border-l-4 border-purple-500">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black mb-2">Develop Board-Level AI Governance Framework</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Opportunity:</strong> Regulatory scrutiny of AI in financial services is increasing. Proactive governance framework demonstrates leadership and mitigates regulatory risk.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Action:</strong> Establish executive steering committee and quarterly AI performance reviews. Position BMO as industry thought leader in responsible AI deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border-l-4 border-orange-500">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black mb-2">Reallocate Staff to High-Value Relationship Management</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Opportunity:</strong> Automation frees experienced staff from routine work. Redeploying talent to complex cases and relationship building improves customer lifetime value.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Action:</strong> Create specialized fraud investigation and VIP customer support teams. Expected to increase retention rates and reduce attrition in high-value segments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h3 className="text-lg font-bold text-black">Risk Considerations & Mitigation</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h4 className="font-semibold text-black mb-2 flex items-center space-x-2">
              <span className="text-red-600">⚠️</span>
              <span>Regulatory Scrutiny Risk</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Risk:</strong> Increasing regulatory focus on AI decision-making in financial services may require enhanced explainability and oversight.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Mitigation:</strong> Built-in compliance validation and human oversight for edge cases. Full audit trails provide regulatory transparency. Risk level: Low.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h4 className="font-semibold text-black mb-2 flex items-center space-x-2">
              <span className="text-yellow-600">⚠️</span>
              <span>Model Drift & Accuracy</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Risk:</strong> Fraud patterns evolve rapidly. Models require continuous updating to maintain detection accuracy and avoid false positives.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Mitigation:</strong> Continuous learning architecture adapts in real-time. Human feedback loop ensures quality. Monitoring alerts flag performance degradation. Risk level: Low.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-black mb-2 flex items-center space-x-2">
              <span className="text-blue-600">⚠️</span>
              <span>Competitive Replication</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Risk:</strong> Competitors may adopt similar AI-driven fraud resolution, eroding differentiation advantage over time.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Mitigation:</strong> Continuous innovation and expansion to additional use cases. First-mover advantage in data collection creates defensible moat. Risk level: Medium.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-black mb-2 flex items-center space-x-2">
              <span className="text-purple-600">⚠️</span>
              <span>Customer Trust & Transparency</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Risk:</strong> Customers may be uncomfortable with automated fraud decisions without understanding AI reasoning.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Mitigation:</strong> Plain-language explanations for every decision. Option for human review maintains customer control. Transparent communication builds trust. Risk level: Low.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-6">
          <Zap className="w-12 h-12 text-white flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-3">Executive Summary</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The AI-driven fraud resolution platform represents a strategic asset that delivers immediate ROI while creating sustainable competitive advantage. Industry-leading resolution speed and automation rates position BMO as the innovation leader in customer protection.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold mb-1">Strategic</div>
                <div className="text-sm text-gray-300">Differentiation in premium card market drives growth</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold mb-1">Financial</div>
                <div className="text-sm text-gray-300">Exceptional ROI with proven unit economics improvement</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold mb-1">Operational</div>
                <div className="text-sm text-gray-300">Staff reallocation enables higher-value work and expertise development</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong>Next Steps:</strong> (1) Launch premium card campaign leveraging fraud protection positioning, (2) Expand multi-agent framework to loan origination, (3) Establish executive AI governance committee, (4) Develop talent redeployment strategy for freed capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
