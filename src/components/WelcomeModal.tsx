import { X, Zap, Users, Shield, TrendingUp } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black">Welcome to Agentic Dispute Resolution</h2>
            <p className="text-sm text-gray-600 mt-1">Transforming BMO's dispute process with AI agents</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">Business Value</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Zap className="w-6 h-6 text-black mb-2" />
                <h4 className="font-semibold text-black mb-1">72 to 6 Steps</h4>
                <p className="text-sm text-gray-600">Reduces complex multi-team workflow to 6 intelligent agent actions</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <TrendingUp className="w-6 h-6 text-black mb-2" />
                <h4 className="font-semibold text-black mb-1">2 Min Resolution</h4>
                <p className="text-sm text-gray-600">Average dispute resolved in under 2 minutes vs. 7-14 days</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Users className="w-6 h-6 text-black mb-2" />
                <h4 className="font-semibold text-black mb-1">Proactive Detection</h4>
                <p className="text-sm text-gray-600">Identifies fraud before customers notice, reducing complaints by 60%</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <Shield className="w-6 h-6 text-black mb-2" />
                <h4 className="font-semibold text-black mb-1">Zero Audit Risk</h4>
                <p className="text-sm text-gray-600">Real-time compliance validation ensures regulatory adherence</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black mb-3">AI Agents in Action</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-black">Fraud Sentinel</h4>
                  <p className="text-sm text-gray-600">Detects anomalies and notifies customers proactively</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-black">Outreach Agent</h4>
                  <p className="text-sm text-gray-600">Confirms with empathetic natural language dialogue</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-black">Eligibility Agent</h4>
                  <p className="text-sm text-gray-600">Validates claims against KYC and card network rules</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-black">Compliance Guard</h4>
                  <p className="text-sm text-gray-600">Ensures adherence to OCC, FINRA, and network policies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-black">Resolution Agent</h4>
                  <p className="text-sm text-gray-600">Processes refunds and orchestrates card reissuance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  6
                </div>
                <div>
                  <h4 className="font-semibold text-black">Recovery Agent</h4>
                  <p className="text-sm text-gray-600">Reconnects trusted subscriptions to new card</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  7
                </div>
                <div>
                  <h4 className="font-semibold text-black">Learning Agent</h4>
                  <p className="text-sm text-gray-600">Feeds insights to fraud models for continuous improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-3">How This Demo Works</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Select a scenario from the cards above to watch an end-to-end dispute resolution</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Watch agents activate in real-time as they process each stage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>See agent reasoning in context cards on the right panel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All conversations are pre-scripted simulations — no live API calls</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4">
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
