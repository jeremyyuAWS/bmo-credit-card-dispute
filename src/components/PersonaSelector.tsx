import { ChevronDown, ShieldAlert, Scale, Headphones, BarChart3, Users, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Persona {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface PersonaSelectorProps {
  personas: Persona[];
  selectedPersona: string;
  onSelect: (personaId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'shield-alert': ShieldAlert,
  'scale': Scale,
  'headphones': Headphones,
  'bar-chart-3': BarChart3,
  'users': Users,
  'trending-up': TrendingUp
};

const colorMap: Record<string, string> = {
  'red': 'bg-red-100 text-red-700 border-red-200',
  'blue': 'bg-blue-100 text-blue-700 border-blue-200',
  'green': 'bg-green-100 text-green-700 border-green-200',
  'purple': 'bg-purple-100 text-purple-700 border-purple-200',
  'gray': 'bg-gray-100 text-gray-700 border-gray-200',
  'orange': 'bg-orange-100 text-orange-700 border-orange-200'
};

export function PersonaSelector({ personas, selectedPersona, onSelect }: PersonaSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = personas.find(p => p.id === selectedPersona);
  const IconComponent = selected ? iconMap[selected.icon] : Users;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors min-w-[280px]"
      >
        {IconComponent && (
          <div className={`p-2 rounded-lg ${selected ? colorMap[selected.color] : 'bg-gray-100'}`}>
            <IconComponent className="w-4 h-4" />
          </div>
        )}
        <div className="flex-1 text-left">
          <div className="text-sm font-semibold text-black">
            {selected?.name || 'Select Persona'}
          </div>
          <div className="text-xs text-gray-500">
            {selected?.description.split(',')[0] || 'Choose your role'}
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
          {personas.map(persona => {
            const Icon = iconMap[persona.icon];
            return (
              <button
                key={persona.id}
                onClick={() => {
                  onSelect(persona.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
                  persona.id === selectedPersona ? 'bg-gray-50' : ''
                }`}
              >
                <div className={`p-2 rounded-lg ${colorMap[persona.color]} flex-shrink-0`}>
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-black">
                    {persona.name}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {persona.description}
                  </div>
                </div>
                {persona.id === selectedPersona && (
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
