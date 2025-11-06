import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
}

interface PersonaDashboardProps {
  metrics: Metric[];
  quickActions: string[];
  personaColor: string;
  personaName: string;
}

const colorClasses: Record<string, string> = {
  'red': 'border-red-200 bg-red-50',
  'blue': 'border-blue-200 bg-blue-50',
  'green': 'border-green-200 bg-green-50',
  'purple': 'border-purple-200 bg-purple-50',
  'gray': 'border-gray-200 bg-gray-50',
  'orange': 'border-orange-200 bg-orange-50'
};

const trendIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'up': TrendingUp,
  'down': TrendingDown,
  'stable': Minus
};

const statusIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'green': CheckCircle,
  'yellow': AlertCircle,
  'blue': Clock,
  'red': AlertCircle
};

const statusColors: Record<string, string> = {
  'green': 'text-green-600',
  'yellow': 'text-yellow-600',
  'blue': 'text-blue-600',
  'red': 'text-red-600'
};

export function PersonaDashboard({ metrics, quickActions, personaColor, personaName }: PersonaDashboardProps) {
  return (
    <div className={`border-2 rounded-xl p-4 ${colorClasses[personaColor]}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-black">{personaName} Dashboard</h3>
        <span className="text-xs text-gray-500">Real-time</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {metrics.map((metric, index) => {
          const TrendIcon = metric.trend ? trendIcons[metric.trend] : null;
          const StatusIcon = metric.color ? statusIcons[metric.color] : null;

          return (
            <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-start justify-between mb-1">
                <div className="text-xs text-gray-600">{metric.label}</div>
                {TrendIcon && (
                  <TrendIcon className={`w-3 h-3 ${
                    metric.trend === 'up' ? 'text-green-600' :
                    metric.trend === 'down' ? 'text-red-600' :
                    'text-gray-400'
                  }`} />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-lg font-bold text-black">{metric.value}</div>
                {StatusIcon && (
                  <StatusIcon className={`w-4 h-4 ${statusColors[metric.color!]}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="text-xs font-semibold text-gray-700 mb-2">Quick Actions</div>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors text-left"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
