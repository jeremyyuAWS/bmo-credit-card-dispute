import { CheckCircle } from 'lucide-react';
import { ShieldAlert, MessageSquare, Scale, DollarSign, RefreshCw, Brain } from 'lucide-react';

interface AgentCardProps {
  agentName: string;
  reasoning?: string;
}

const iconMap: Record<string, React.ElementType> = {
  'Fraud Sentinel': ShieldAlert,
  'Outreach': MessageSquare,
  'Eligibility': CheckCircle,
  'Compliance Guard': Scale,
  'Resolution': DollarSign,
  'Recovery': RefreshCw,
  'Learning': Brain,
};

const agentDescriptions: Record<string, string> = {
  'Fraud Sentinel': 'Analyzes transaction patterns for fraud indicators',
  'Outreach': 'Communicates with customer and merchant',
  'Eligibility': 'Validates dispute against card network rules',
  'Compliance Guard': 'Ensures regulatory compliance (OCC, FCRA)',
  'Resolution': 'Determines refund amount and processes payment',
  'Recovery': 'Initiates merchant chargeback recovery',
  'Learning': 'Updates fraud models with case outcomes',
};

export function AgentCard({ agentName, reasoning }: AgentCardProps) {
  const Icon = iconMap[agentName] || CheckCircle;
  const description = agentDescriptions[agentName] || '';

  return (
    <div className="my-4 animate-fadeIn">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-5 shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-11 h-11 bg-white rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-gray-900" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="font-semibold text-base">{agentName}</h4>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-smooth-pulse"></div>
                <span className="text-xs text-gray-300">Active</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{description}</p>
            {reasoning && (
              <div className="bg-white bg-opacity-10 rounded-lg p-3 border border-white border-opacity-20">
                <p className="text-xs text-gray-200 leading-relaxed">{reasoning}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
