import { Shield, Eye, Lock, AlertCircle, UserCheck, FileCheck } from 'lucide-react';

export function ResponsibleAI() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-black" />
        <h3 className="text-xl font-bold text-black">Responsible AI Guardrails</h3>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Our agentic AI system operates within strict ethical and regulatory boundaries to ensure customer trust and compliance.
      </p>

      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Human Oversight</h4>
            <p className="text-sm text-gray-600">
              High-risk decisions trigger human review. Agents provide recommendations, humans make final calls on edge cases.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Lock className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Data Privacy</h4>
            <p className="text-sm text-gray-600">
              Customer data never leaves secure banking infrastructure. All processing occurs within BMO's private cloud.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Audit Trail</h4>
            <p className="text-sm text-gray-600">
              Every agent decision is logged with reasoning, enabling full traceability for regulatory audits and customer inquiries.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Bias Mitigation</h4>
            <p className="text-sm text-gray-600">
              Models are tested for fairness across demographics. Regular bias audits ensure equitable treatment for all customers.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Customer Control</h4>
            <p className="text-sm text-gray-600">
              Customers can request manual review at any stage. Opt-out options available for those preferring traditional service.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-black" />
          </div>
          <div>
            <h4 className="font-semibold text-black mb-1">Regulatory Compliance</h4>
            <p className="text-sm text-gray-600">
              Built-in compliance with OCC, FINRA, GDPR, and card network regulations. Real-time validation prevents policy violations.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-xs text-gray-600 leading-relaxed">
          <strong className="text-black">Transparency Commitment:</strong> BMO is committed to explainable AI.
          Every automated decision includes reasoning that can be reviewed by customers and auditors.
          We continuously monitor system performance and welcome feedback to improve fairness and accuracy.
        </p>
      </div>
    </div>
  );
}
