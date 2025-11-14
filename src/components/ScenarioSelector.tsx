import { Play, Pause, RotateCcw, Gauge, TrendingUp, Users } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  valueProps?: {
    customer: string;
    bmo: string;
  };
}

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  selectedScenario: string;
  onSelect: (scenarioId: string) => void;
  disabled?: boolean;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onRestart?: () => void;
  playbackSpeed?: number;
  onSpeedChange?: (speed: number) => void;
}

export function ScenarioSelector({
  scenarios,
  selectedScenario,
  onSelect,
  disabled,
  isPlaying,
  onPlayPause,
  onRestart,
  playbackSpeed = 1,
  onSpeedChange
}: ScenarioSelectorProps) {
  const speedOptions = [
    { value: 0.25, label: '0.25x' },
    { value: 0.5, label: '0.5x' },
    { value: 0.75, label: '0.75x' },
    { value: 1, label: '1x' },
    { value: 1.5, label: '1.5x' },
    { value: 2, label: '2x' }
  ];

  return (
    <div className="border-b border-gray-200 bg-white px-8 py-4 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-black mb-1">Demo Scenarios</h3>
          {!isPlaying && <p className="text-xs text-gray-500">Select a scenario to watch the AI agents in action</p>}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onRestart}
            disabled={disabled}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Restart scenario"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm font-semibold">Restart</span>
          </button>

          <button
            onClick={onPlayPause}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="text-sm font-semibold">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="text-sm font-semibold">Play</span>
              </>
            )}
          </button>

          <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-100 border border-gray-200">
            <Gauge className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Speed:</span>
            <div className="flex space-x-1">
              {speedOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onSpeedChange?.(option.value)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                    playbackSpeed === option.value
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!isPlaying && (
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

            {scenario.valueProps && (
              <div className="mt-3 pt-3 border-t border-gray-300 space-y-1.5">
                <div className="flex items-start space-x-1.5">
                  <Users className={`w-3 h-3 mt-0.5 flex-shrink-0 ${selectedScenario === scenario.id ? 'text-gray-300' : 'text-gray-500'}`} />
                  <span className={`text-xs leading-tight ${selectedScenario === scenario.id ? 'text-gray-300' : 'text-gray-600'}`}>
                    {scenario.valueProps.customer}
                  </span>
                </div>
                <div className="flex items-start space-x-1.5">
                  <TrendingUp className={`w-3 h-3 mt-0.5 flex-shrink-0 ${selectedScenario === scenario.id ? 'text-gray-300' : 'text-gray-500'}`} />
                  <span className={`text-xs font-semibold leading-tight ${selectedScenario === scenario.id ? 'text-white' : 'text-black'}`}>
                    {scenario.valueProps.bmo}
                  </span>
                </div>
              </div>
            )}
          </button>
          ))}
        </div>
      )}
    </div>
  );
}
