import { Shield, Eye, Lock, AlertCircle, UserCheck, FileCheck, CheckCircle, BarChart3, BookOpen, Scale, TrendingUp, Zap, Database, Users, Target } from 'lucide-react';
import { useState } from 'react';

interface ResponsibleAITabProps {
  viewMode?: 'customer' | 'bmo-team';
}

export function ResponsibleAITab({ viewMode = 'bmo-team' }: ResponsibleAITabProps) {
  const [selectedMetric, setSelectedMetric] = useState<string>('fairness');

  if (viewMode === 'customer') {
    return (
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">Your Protection is Our Priority</h2>
          <p className="text-sm text-gray-600">How our AI keeps you safe, secure, and treated fairly</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-xs font-semibold text-gray-600">Zero Liability</span>
            </div>
            <div className="text-2xl font-bold text-black">100%</div>
            <div className="text-xs text-gray-600 mt-1">You're never responsible for fraud</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="w-6 h-6 text-purple-600" />
              <span className="text-xs font-semibold text-gray-600">Your Data</span>
            </div>
            <div className="text-2xl font-bold text-black">Private</div>
            <div className="text-xs text-gray-600 mt-1">Never shared externally</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-semibold text-gray-600">Transparency</span>
            </div>
            <div className="text-2xl font-bold text-black">100%</div>
            <div className="text-xs text-gray-600 mt-1">Full explanation of every decision</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-black mb-6">How We Protect You</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Instant Fraud Protection</h4>
                <p className="text-sm text-gray-600">
                  Our AI monitors every transaction in real-time to catch fraud before you even notice it. If something suspicious happens, we'll alert you immediately and protect your account.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Your Data Stays Private</h4>
                <p className="text-sm text-gray-600">
                  Your personal information is never shared with third parties. All data is encrypted with bank-grade security and stays within BMO's secure systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Fair Treatment, Every Time</h4>
                <p className="text-sm text-gray-600">
                  Our AI treats all customers equally regardless of age, location, or background. Every decision is reviewed to ensure fairness and compliance with banking regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">You're Always in Control</h4>
                <p className="text-sm text-gray-600">
                  You can request to speak with a person at any time. Every AI decision comes with a clear explanation, and you always have the option for human review.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-black">Understanding AI Decisions</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">Here's why our AI approved your $142 refund request:</p>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">1</span>
                <div>
                  <div className="font-semibold text-black">Transaction Didn't Match Your Pattern</div>
                  <div className="text-sm text-gray-600 mt-1">The purchase was made in Dallas while you were in Toronto, and you've never shopped at this merchant before.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">2</span>
                <div>
                  <div className="font-semibold text-black">You're a Trusted Customer</div>
                  <div className="text-sm text-gray-600 mt-1">You've been banking with us for 4 years with perfect account history and zero fraud claims.</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">3</span>
                <div>
                  <div className="font-semibold text-black">Federal Law Protects You</div>
                  <div className="text-sm text-gray-600 mt-1">Banking regulations require us to protect you from unauthorized charges with zero liability.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
          <div className="flex items-start space-x-6">
            <BookOpen className="w-12 h-12 text-white flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">Our Commitment to You</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                BMO uses AI to make your banking faster and safer, but we never compromise on your security or privacy. Every AI decision is designed to protect you, follows banking regulations, and can be reviewed by our team at your request.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You always have the right to speak with a person, request a manual review, or ask questions about any decision. Your trust is our most important asset, and we're committed to earning it every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const auditTrail = [
    { step: 1, rule: "Visa Rule 4863", agent: "Eligibility", status: "validated", description: "Fraud liability shift validation" },
    { step: 2, rule: "OCC Reg E Compliance", agent: "Compliance Guard", status: "validated", description: "Electronic fund transfer consumer protections" },
    { step: 3, rule: "PII Masking Protocol", agent: "Data Privacy", status: "applied", description: "Personal information redacted before processing" },
    { step: 4, rule: "Fair Credit Billing Act", agent: "Compliance Guard", status: "validated", description: "Credit billing rights and obligations" },
    { step: 5, rule: "CFPB 1073 Dispute Rules", agent: "Compliance Guard", status: "validated", description: "Credit card dispute resolution requirements" },
    { step: 6, rule: "Reg Z Truth in Lending", agent: "Compliance Guard", status: "validated", description: "Consumer credit disclosure requirements" }
  ];

  const fairnessMetrics = {
    fairness: {
      title: 'Fairness Across Demographics',
      metrics: [
        { label: 'Approval Rate Parity', value: '98.2%', status: 'excellent', description: 'Consistent approval rates across customer segments' },
        { label: 'Geographic Bias Score', value: '0.03', status: 'excellent', description: 'Near-zero disparity across regions (target: <0.05)' },
        { label: 'Income Level Variance', value: '1.2%', status: 'good', description: 'Minimal variance in decision quality by income bracket' },
        { label: 'Age Group Equity', value: '99.1%', status: 'excellent', description: 'Equal treatment across all age demographics' }
      ]
    },
    transparency: {
      title: 'Explainability & Transparency',
      metrics: [
        { label: 'Decision Explainability Rate', value: '100%', status: 'excellent', description: 'All decisions include human-readable explanations' },
        { label: 'Avg Explanation Complexity', value: '8th grade', status: 'excellent', description: 'Plain language readability level' },
        { label: 'Customer Understanding Score', value: '92%', status: 'excellent', description: 'Customers report understanding AI decisions' },
        { label: 'Audit Trail Completeness', value: '100%', status: 'excellent', description: 'Full traceability of all decision factors' }
      ]
    },
    privacy: {
      title: 'Data Privacy & Security',
      metrics: [
        { label: 'PII Exposure Risk', value: '0%', status: 'excellent', description: 'Zero PII leakage to external models' },
        { label: 'Data Encryption Level', value: 'AES-256', status: 'excellent', description: 'Military-grade encryption at rest and in transit' },
        { label: 'Retention Compliance', value: '100%', status: 'excellent', description: 'All data retention policies enforced' },
        { label: 'Access Control Violations', value: '0', status: 'excellent', description: 'No unauthorized data access detected' }
      ]
    },
    accuracy: {
      title: 'Model Accuracy & Reliability',
      metrics: [
        { label: 'Overall Accuracy', value: '98.9%', status: 'excellent', description: 'Agreement rate with human expert review' },
        { label: 'False Positive Rate', value: '0.8%', status: 'excellent', description: 'Incorrect fraud flags (industry avg: 2.4%)' },
        { label: 'False Negative Rate', value: '1.1%', status: 'good', description: 'Missed fraud cases (industry avg: 1.9%)' },
        { label: 'Model Drift Detection', value: 'Active', status: 'excellent', description: 'Continuous monitoring for performance degradation' }
      ]
    }
  };

  const currentMetrics = fairnessMetrics[selectedMetric as keyof typeof fairnessMetrics];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-2">Responsible AI Governance</h2>
        <p className="text-sm text-gray-600">Transparency, fairness, and compliance at every layer of the AI system</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-xs font-semibold text-gray-600">Compliance Status</span>
          </div>
          <div className="text-2xl font-bold text-black">100%</div>
          <div className="text-xs text-gray-600 mt-1">All regulations validated</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-semibold text-gray-600">Human Oversight</span>
          </div>
          <div className="text-2xl font-bold text-black">4.3%</div>
          <div className="text-xs text-gray-600 mt-1">Cases reviewed by humans</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Lock className="w-5 h-5 text-purple-600" />
            <span className="text-xs font-semibold text-gray-600">Data Security</span>
          </div>
          <div className="text-2xl font-bold text-black">Zero</div>
          <div className="text-xs text-gray-600 mt-1">Privacy incidents</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="w-5 h-5 text-orange-600" />
            <span className="text-xs font-semibold text-gray-600">Fairness Score</span>
          </div>
          <div className="text-2xl font-bold text-black">98.2%</div>
          <div className="text-xs text-gray-600 mt-1">Demographic parity</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold text-black">Responsible AI Metrics Dashboard</h3>
        </div>

        <div className="flex space-x-2 mb-6">
          {Object.keys(fairnessMetrics).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                selectedMetric === key
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {fairnessMetrics[key as keyof typeof fairnessMetrics].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {currentMetrics.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <div className="font-semibold text-black">{metric.label}</div>
                <div className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(metric.status)}`}>
                  {metric.status.toUpperCase()}
                </div>
              </div>
              <div className="text-2xl font-bold text-black mb-2">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <FileCheck className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold text-black">Real-Time Compliance Validation Trail</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Every decision passes through multiple regulatory checkpoints with full audit trail</p>

        <div className="space-y-3">
          {auditTrail.map((item) => (
            <div key={item.step} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-black">{item.rule}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                  <div className="text-xs text-gray-500 mt-1">Applied by {item.agent}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700 capitalize">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="w-6 h-6 text-black" />
          <h3 className="text-lg font-bold text-black">Decision Explainability Panel</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Plain-language explanation of AI reasoning for every decision</p>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
          <div className="font-semibold text-black mb-3">Example: Why did AI approve this $142 refund?</div>
          <div className="text-sm text-gray-800 space-y-2">
            <div className="flex items-start space-x-3 bg-white bg-opacity-60 rounded-lg p-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Regulatory Validation:</strong> Transaction matched Visa Rule 4863 (fraud liability shift for card-not-present transactions)</span>
            </div>
            <div className="flex items-start space-x-3 bg-white bg-opacity-60 rounded-lg p-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Risk Assessment:</strong> Amount $142 below instant refund threshold ($200) for low-risk customers</span>
            </div>
            <div className="flex items-start space-x-3 bg-white bg-opacity-60 rounded-lg p-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Customer Profile:</strong> Low-risk classification based on 7-year account history with zero fraud flags</span>
            </div>
            <div className="flex items-start space-x-3 bg-white bg-opacity-60 rounded-lg p-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Pattern Analysis:</strong> Merchant had 3 similar confirmed fraud reports in past 30 days across customer base</span>
            </div>
            <div className="flex items-start space-x-3 bg-white bg-opacity-60 rounded-lg p-3">
              <span className="text-blue-600 font-bold">5.</span>
              <span><strong>Compliance Check:</strong> Decision aligns with CFPB 1073 dispute resolution guidelines and OCC Reg E protections</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-black mb-6">Lyzr's Core AI Guardrails</h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Mandatory Human Oversight</h4>
              <p className="text-sm text-gray-600 mb-2">
                High-risk decisions automatically trigger human review. AI provides recommendations, but humans make final calls on edge cases, ambiguous policies, and high-value disputes.
              </p>
              <div className="text-xs text-gray-500">Escalation rate: 4.3% • Average review time: 3.2 min</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Zero-Trust Data Privacy</h4>
              <p className="text-sm text-gray-600 mb-2">
                Customer data never leaves secure banking infrastructure. All PII is masked before any AI processing. End-to-end encryption with AES-256 at rest and in transit.
              </p>
              <div className="text-xs text-gray-500">Privacy incidents: 0 • GDPR compliant</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Continuous Bias Monitoring</h4>
              <p className="text-sm text-gray-600 mb-2">
                Models are tested for fairness across demographics, geography, and income levels. Real-time alerts flag if decisions skew by any protected category. Monthly fairness audits.
              </p>
              <div className="text-xs text-gray-500">Fairness score: 98.2% • Last audit: 3 days ago</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Customer Control & Transparency</h4>
              <p className="text-sm text-gray-600 mb-2">
                Customers can request manual review at any stage. Full access to decision explanations. Opt-out options available for customers who prefer traditional service channels.
              </p>
              <div className="text-xs text-gray-500">Manual review requests: 0.8% • Satisfaction: +82</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Real-Time Regulatory Compliance</h4>
              <p className="text-sm text-gray-600 mb-2">
                Built-in compliance with OCC, FINRA, CFPB, GDPR, and Visa/Mastercard regulations. Real-time validation prevents violations. Automatic updates when regulations change.
              </p>
              <div className="text-xs text-gray-500">Compliance rate: 100% • Violations: 0</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Continuous Learning with Oversight</h4>
              <p className="text-sm text-gray-600 mb-2">
                Models improve through human feedback loops. Every override is captured and used to retrain agents. Performance monitoring detects model drift and triggers retraining.
              </p>
              <div className="text-xs text-gray-500">Accuracy improvement: +2.3% QoQ • Learning updates: 142/week</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-6">
          <BookOpen className="w-12 h-12 text-white flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-3">BMO's AI Transparency Commitment</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Bank of Montreal is committed to responsible and explainable AI. Every automated decision includes human-readable reasoning
              that can be reviewed by customers, regulators, and internal auditors. We continuously monitor system performance across fairness,
              accuracy, privacy, and compliance dimensions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our multi-agent architecture is designed with guardrails at every layer, mandatory human oversight for edge cases, and continuous
              learning from expert feedback. We welcome customer feedback and maintain open dialogue with regulators to ensure our AI systems
              serve customers fairly, transparently, and in compliance with all applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
