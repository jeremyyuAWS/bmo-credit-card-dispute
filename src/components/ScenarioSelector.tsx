import { Play } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
}

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  selectedScenario: string;
  onSelect: (scenarioId: string) => void;
  disabled?: boolean;
}

export function ScenarioSelector({ scenarios, selectedScenario, onSelect, disabled }: ScenarioSelectorProps) {
  return (
    <div className="border-b border-gray-200 bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Demo Scenarios</h3>
          <p className="text-xs text-gray-500">Select a scenario to watch the AI agents in action</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => !disabled && onSelect(scenario.id)}
            disabled={disabled}
            className={`text-left p-4 rounded-xl border-2 transition-all ${
              selectedScenario === scenario.id
                ? 'border-black bg-black text-white'
                : 'border-gray-200 bg-white text-black hover:border-gray-400'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className={`text-sm font-semibold ${selectedScenario === scenario.id ? 'text-white' : 'text-black'}`}>
                {scenario.title}
              </h4>
              {selectedScenario === scenario.id && (
                <Play className="w-4 h-4 flex-shrink-0" />
              )}
            </div>
            <p className={`text-xs ${selectedScenario === scenario.id ? 'text-gray-300' : 'text-gray-600'}`}>
              {scenario.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
