import { useState, useMemo } from 'react';
import {
  CheckCircle, AlertCircle, Clock, MessageSquare, Copy, Check,
  Filter, Search, X, FileText, MapPin, CreditCard, Calendar,
  TrendingUp, Users, Target, ChevronDown, ChevronUp, Eye,
  UserCircle, AlertTriangle, Sparkles
} from 'lucide-react';
import hitlData from '../data/hitl-cases.json';
import { FeedbackModal, FeedbackData } from './FeedbackModal';

interface CaseStatus {
  [key: string]: string;
}

interface CaseItem {
  id: string;
  status: string;
  customer: string;
  amount: string;
  merchant: string;
  date: string;
  aiDecision: string;
  reason: string;
  riskLevel: string;
  suggestedAction: string;
  category: string;
  evidenceCount: number;
  customerType: string;
  aiConfidence: number;
  merchantLocation: string;
  transactionMethod: string;
  chargebackDeadline: string;
  similarCases: number;
}

interface ScriptSuggestion {
  situation: string;
  script: string;
}

export function HITLFeedbackHub() {
  const [caseStatuses, setCaseStatuses] = useState<CaseStatus>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedCustomerType, setSelectedCustomerType] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackCaseId, setFeedbackCaseId] = useState<string | null>(null);
  const [explainabilityExpanded, setExplainabilityExpanded] = useState<string | null>(null);

  const handleApprove = (caseId: string) => {
    setCaseStatuses(prev => ({ ...prev, [caseId]: 'approved' }));
  };

  const handleReject = (caseId: string) => {
    setFeedbackCaseId(caseId);
    setFeedbackModalOpen(true);
  };

  const handleFeedbackSubmit = (feedback: FeedbackData) => {
    if (feedbackCaseId) {
      setCaseStatuses(prev => ({ ...prev, [feedbackCaseId]: 'rejected' }));
      console.log('Feedback submitted for case:', feedbackCaseId, feedback);
    }
    setFeedbackModalOpen(false);
    setFeedbackCaseId(null);
  };

  const handleSecondReview = (caseId: string) => {
    setCaseStatuses(prev => ({ ...prev, [caseId]: 'second-review' }));
  };

  const handleFlagBias = (caseId: string) => {
    setCaseStatuses(prev => ({ ...prev, [caseId]: 'flagged' }));
  };

  const handleCopyScript = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getCaseStatus = (caseId: string, originalStatus: string) => {
    return caseStatuses[caseId] || originalStatus;
  };

  const toggleExpanded = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(selectedCaseId === caseId ? null : caseId);
  };

  const getExplainabilitySteps = (caseItem: CaseItem): string[] => {
    const steps: string[] = [];

    steps.push(`<strong>Case Classification:</strong> Identified as ${getCategoryLabel(caseItem.category)} dispute based on transaction characteristics and customer claim description`);

    if (caseItem.aiConfidence >= 80) {
      steps.push(`<strong>High Confidence Analysis:</strong> AI confidence score of ${caseItem.aiConfidence}% based on strong pattern match across ${caseItem.similarCases} similar historical cases`);
    } else if (caseItem.aiConfidence >= 60) {
      steps.push(`<strong>Moderate Confidence Analysis:</strong> AI confidence score of ${caseItem.aiConfidence}% suggests borderline case requiring human expert review`);
    } else {
      steps.push(`<strong>Low Confidence Analysis:</strong> AI confidence score of ${caseItem.aiConfidence}% indicates significant ambiguity - ${caseItem.similarCases} similar cases show mixed outcomes`);
    }

    steps.push(`<strong>Risk Assessment:</strong> Classified as ${caseItem.riskLevel.toUpperCase()} risk based on amount (${caseItem.amount}), customer profile (${caseItem.customerType}), and dispute complexity`);

    if (caseItem.customerType === 'VIP') {
      steps.push(`<strong>Customer Relationship Priority:</strong> VIP status customer with high lifetime value - resolution impacts customer retention and satisfaction metrics`);
    } else if (caseItem.customerType === 'long-standing') {
      steps.push(`<strong>Customer History Analysis:</strong> Long-standing customer with established account history and positive track record factored into decision`);
    } else {
      steps.push(`<strong>New Customer Profile:</strong> Recently opened account requires careful fraud screening while maintaining positive onboarding experience`);
    }

    steps.push(`<strong>Evidence Review:</strong> ${caseItem.evidenceCount} supporting documents analyzed including transaction logs, merchant communications, and customer statements`);

    if (caseItem.transactionMethod === 'online') {
      steps.push(`<strong>Transaction Context:</strong> Card-not-present (online) transaction subject to different fraud liability rules and verification requirements than in-person purchases`);
    } else {
      steps.push(`<strong>Transaction Context:</strong> Card-present transaction with chip/PIN verification - physical signature or authentication captured at point of sale`);
    }

    steps.push(`<strong>Regulatory Compliance Check:</strong> Decision validated against OCC Reg E, CFPB 1073 dispute rules, and ${caseItem.transactionMethod === 'online' ? 'Visa Rule 4863 (CNP fraud liability)' : 'Card network authorization protocols'}`);

    const daysUntilDeadline = Math.ceil((new Date(caseItem.chargebackDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (daysUntilDeadline <= 5) {
      steps.push(`<strong>Time-Sensitive Action:</strong> Only ${daysUntilDeadline} days remaining until chargeback deadline - immediate specialist decision required to preserve customer rights`);
    } else {
      steps.push(`<strong>Processing Timeline:</strong> ${daysUntilDeadline} days remaining until chargeback deadline (${caseItem.chargebackDeadline}) allows time for thorough investigation`);
    }

    return steps;
  };

  const getContextualScripts = (caseItem: CaseItem): ScriptSuggestion[] => {
    const scripts: ScriptSuggestion[] = [];

    if (caseItem.category === 'medical-billing') {
      scripts.push({
        situation: 'Insurance Coordination Needed',
        script: `I understand medical billing can be complex, especially with insurance. Let me coordinate with your insurance provider to clarify coverage details and resolve this billing issue for you, ${caseItem.customer.split(' ')[0]}.`
      });
      scripts.push({
        situation: 'High Amount Medical Dispute',
        script: `I see this is a significant medical charge. I'm prioritizing this case and will personally ensure we get clarity on what should have been covered. You shouldn't have to worry about this.`
      });
    } else if (caseItem.category === 'international-dispute') {
      scripts.push({
        situation: 'Currency Conversion Issue',
        script: `Currency conversion fees can be confusing and weren't clearly disclosed. I'm reviewing the merchant's compliance with international transaction disclosure rules. This should be resolved in your favor.`
      });
      scripts.push({
        situation: 'International Transaction Support',
        script: `I understand international purchases can have unexpected fees. Let me investigate the currency markup and ensure all charges were properly disclosed at checkout.`
      });
    } else if (caseItem.category === 'digital-goods') {
      scripts.push({
        situation: 'Digital Goods Policy Review',
        script: `Digital purchases have unique policies. Let me review the merchant's terms of service and your usage logs to find a fair resolution that considers both sides.`
      });
      scripts.push({
        situation: 'Virtual Items Dispute',
        script: `I understand your concern about these virtual items. While digital goods policies can be strict, let me review if the merchant properly disclosed their no-refund policy before your purchase.`
      });
    } else if (caseItem.category === 'service-quality' || caseItem.category === 'wedding-services') {
      scripts.push({
        situation: 'Service Quality Concern',
        script: `Quality disputes require careful evaluation. I'm escalating this for a thorough review and may request third-party verification to ensure you receive fair treatment.`
      });
      scripts.push({
        situation: 'Contract Review Needed',
        script: `Let me review the contract deliverables against what was actually provided. Your satisfaction matters, and we'll work to find a resolution that reflects the service you expected.`
      });
    } else if (caseItem.category === 'subscription-trial') {
      scripts.push({
        situation: 'Trial Conversion Issue',
        script: `Free trial conversions should always be clearly communicated. I'm reviewing the merchant's notification practices. If proper disclosure wasn't made, we'll get this charge reversed.`
      });
      scripts.push({
        situation: 'Unauthorized Subscription',
        script: `You shouldn't be charged without clear authorization. Let me verify the trial-to-paid conversion disclosure and ensure you weren't charged unfairly.`
      });
    }

    if (caseItem.riskLevel === 'high') {
      scripts.push({
        situation: 'High-Risk Case - Extra Care',
        script: `I see this is a complex case requiring extra attention. I'm personally overseeing this review to ensure we consider all factors and reach the right decision for you.`
      });
    }

    if (caseItem.customerType === 'VIP') {
      scripts.push({
        situation: 'VIP Customer Priority',
        script: `As one of our valued VIP members, ${caseItem.customer.split(' ')[0]}, this case is receiving priority attention. I'll ensure we resolve this quickly and to your satisfaction.`
      });
    }

    if (caseItem.aiConfidence < 60) {
      scripts.push({
        situation: 'Complex Case - Human Judgment',
        script: `This situation has some gray areas that require human judgment. I'm taking the time to review all details carefully rather than rushing to a decision. Your case deserves this attention.`
      });
    }

    scripts.push({
      situation: 'General Empathy - Frustration',
      script: `I understand this must be frustrating. Let's walk through what we've found and explore all available options together. I'm here to help resolve this fairly.`
    });

    scripts.push({
      situation: 'Need Documentation',
      script: `To help resolve this quickly, could you provide your ${caseItem.category.includes('medical') ? 'insurance explanation of benefits' : caseItem.category.includes('service') ? 'contract or receipt' : 'purchase confirmation'}? This will allow me to expedite your case.`
    });

    return scripts;
  };

  const selectedCase = selectedCaseId
    ? hitlData.cases.find((c: CaseItem) => c.id === selectedCaseId)
    : null;

  const displayedScripts = selectedCase
    ? getContextualScripts(selectedCase)
    : hitlData.scriptSuggestions;

  const filteredCases = useMemo(() => {
    return hitlData.cases.filter((caseItem: CaseItem) => {
      const matchesSearch =
        caseItem.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseItem.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRisk = selectedRisk.length === 0 || selectedRisk.includes(caseItem.riskLevel);
      const matchesCategory = selectedCategory.length === 0 || selectedCategory.includes(caseItem.category);
      const matchesCustomerType = selectedCustomerType.length === 0 || selectedCustomerType.includes(caseItem.customerType);

      return matchesSearch && matchesRisk && matchesCategory && matchesCustomerType;
    });
  }, [searchTerm, selectedRisk, selectedCategory, selectedCustomerType]);

  const uniqueCategories = Array.from(new Set(hitlData.cases.map((c: CaseItem) => c.category)));

  const toggleFilter = (filterArray: string[], setFilter: (value: string[]) => void, value: string) => {
    if (filterArray.includes(value)) {
      setFilter(filterArray.filter(v => v !== value));
    } else {
      setFilter([...filterArray, value]);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCustomerTypeColor = (type: string) => {
    switch (type) {
      case 'VIP': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'long-standing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'new': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected': return <X className="w-5 h-5 text-red-600" />;
      case 'second-review': return <AlertCircle className="w-5 h-5 text-blue-600" />;
      case 'flagged': return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'pending-review': return <Clock className="w-5 h-5 text-yellow-600" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const activeFiltersCount = selectedRisk.length + selectedCategory.length + selectedCustomerType.length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">Case Review Feed</h2>
          <p className="text-sm text-gray-600">Supervise and correct AI decisions on edge cases</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-2">
            <div className="text-xs text-gray-600">Active Cases</div>
            <div className="text-2xl font-bold text-black">{filteredCases.length}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, merchant, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-colors ${
              showFilters ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-semibold">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-white text-black rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2">Risk Level</div>
              <div className="flex flex-wrap gap-2">
                {['high', 'medium', 'low'].map((risk) => (
                  <button
                    key={risk}
                    onClick={() => toggleFilter(selectedRisk, setSelectedRisk, risk)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      selectedRisk.includes(risk)
                        ? getRiskColor(risk)
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {risk.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2">Category</div>
              <div className="flex flex-wrap gap-2">
                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleFilter(selectedCategory, setSelectedCategory, category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      selectedCategory.includes(category)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2">Customer Type</div>
              <div className="flex flex-wrap gap-2">
                {['VIP', 'long-standing', 'new'].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter(selectedCustomerType, setSelectedCustomerType, type)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      selectedCustomerType.includes(type)
                        ? getCustomerTypeColor(type)
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {type === 'long-standing' ? 'Long Standing' : type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setSelectedRisk([]);
                  setSelectedCategory([]);
                  setSelectedCustomerType([]);
                }}
                className="text-xs text-gray-600 hover:text-black font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          {filteredCases.map((caseItem: CaseItem) => {
            const currentStatus = getCaseStatus(caseItem.id, caseItem.status);
            const isExpanded = expandedCase === caseItem.id;
            const isSelected = selectedCaseId === caseItem.id;
            const daysUntilDeadline = getDaysUntilDeadline(caseItem.chargebackDeadline);

            return (
              <div
                key={caseItem.id}
                onClick={() => handleSelectCase(caseItem.id)}
                className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-black shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {isSelected && (
                  <div className="mb-4 bg-black text-white px-3 py-1 rounded-lg text-xs font-semibold inline-block">
                    Selected - Scripts updated below
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(currentStatus)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-black">{caseItem.customer}</h4>
                        <div className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getCustomerTypeColor(caseItem.customerType)}`}>
                          {caseItem.customerType === 'long-standing' ? 'Long Standing' : caseItem.customerType.toUpperCase()}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{caseItem.merchant} • {caseItem.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-black">{caseItem.amount}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-1 ${getRiskColor(caseItem.riskLevel)}`}>
                      {caseItem.riskLevel.toUpperCase()} RISK
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Sparkles className="w-4 h-4 text-gray-600" />
                      <div className="text-xs font-semibold text-gray-600">AI Confidence</div>
                    </div>
                    <div className={`text-lg font-bold ${getConfidenceColor(caseItem.aiConfidence)}`}>
                      {caseItem.aiConfidence}%
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <div className="text-xs font-semibold text-gray-600">Chargeback Deadline</div>
                    </div>
                    <div className={`text-lg font-bold ${daysUntilDeadline <= 3 ? 'text-red-600' : 'text-gray-900'}`}>
                      {daysUntilDeadline} days
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                  <div className="text-sm font-semibold text-black mb-1">AI-Generated Resolution Recommendation</div>
                  <div className="text-sm text-gray-700">{caseItem.aiDecision}</div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-black mb-1">Multi-Agent Analysis & Decision Rationale</div>
                  <div className="text-sm text-gray-700">{caseItem.reason}</div>
                </div>

                <div className="mb-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExplainabilityExpanded(explainabilityExpanded === caseItem.id ? null : caseItem.id);
                    }}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-blue-700" />
                        <span className="text-sm font-semibold text-blue-900">Why did AI make this recommendation?</span>
                      </div>
                      {explainabilityExpanded === caseItem.id ? (
                        <ChevronUp className="w-5 h-5 text-blue-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-700" />
                      )}
                    </div>
                  </button>

                  {explainabilityExpanded === caseItem.id && (
                    <div className="mt-3 bg-white rounded-xl p-5 border border-blue-200">
                      <div className="space-y-3">
                        {getExplainabilitySteps(caseItem).map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 text-blue-600 font-bold text-sm">{idx + 1}.</span>
                            <div className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: step }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {isExpanded && (
                  <div className="space-y-4 mb-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-600">Supporting Documentation:</span>
                        <span className="font-semibold text-black">{caseItem.evidenceCount} files</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-600">Merchant Location:</span>
                        <span className="font-semibold text-black">{caseItem.merchantLocation}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CreditCard className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-600">Transaction Method:</span>
                        <span className="font-semibold text-black">{caseItem.transactionMethod}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-gray-600" />
                        <div className="text-sm font-semibold text-black">Historical Pattern Analysis</div>
                      </div>
                      <div className="text-sm text-gray-700">
                        {caseItem.similarCases} similar dispute pattern{caseItem.similarCases !== 1 ? 's' : ''} identified across customer base with comparable merchant, transaction type, and dispute characteristics
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm font-semibold text-black mb-2">Dispute Classification Category</div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-white border-gray-200 text-gray-700">
                        {getCategoryLabel(caseItem.category)}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded(caseItem.id);
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-black font-semibold py-2 border-t border-gray-200"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Show less</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      <span>View full details</span>
                    </>
                  )}
                </button>

                <div className="mb-4 pt-4 border-t border-gray-200">
                  <div className="text-sm font-semibold text-black mb-1">Recommended Specialist Intervention Path</div>
                  <div className="text-sm text-gray-700">{caseItem.suggestedAction}</div>
                </div>

                {currentStatus === 'pending-review' && (
                  <div className="flex space-x-2 pt-4 border-t border-gray-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApprove(caseItem.id);
                      }}
                      className="flex-1 bg-black text-white py-2 px-4 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Approve AI Decision
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReject(caseItem.id);
                      }}
                      className="flex-1 bg-white text-black py-2 px-4 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Override & Reject
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSecondReview(caseItem.id);
                      }}
                      className="bg-white text-black py-2 px-4 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Escalate
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlagBias(caseItem.id);
                      }}
                      className="bg-white text-black p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                      title="Flag for bias check"
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {currentStatus === 'approved' && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Approved by human specialist</span>
                    </div>
                  </div>
                )}

                {currentStatus === 'rejected' && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2">
                      <X className="w-4 h-4" />
                      <span>AI decision overridden and rejected by specialist</span>
                    </div>
                  </div>
                )}

                {currentStatus === 'second-review' && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-blue-700 bg-blue-50 rounded-lg px-4 py-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>Escalated for secondary review</span>
                    </div>
                  </div>
                )}

                {currentStatus === 'flagged' && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-red-700 bg-red-50 rounded-lg px-4 py-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Flagged for bias review and model retraining</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredCases.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">No cases found</h3>
              <p className="text-sm text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-5 h-5 text-black" />
              <h3 className="text-lg font-semibold text-black">Script Advisor</h3>
            </div>
            {selectedCase ? (
              <>
                <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="text-xs font-semibold text-blue-900 mb-1">Context-Aware Scripts For:</div>
                  <div className="text-sm font-bold text-blue-900">{selectedCase.customer}</div>
                  <div className="text-xs text-blue-700 mt-1">{getCategoryLabel(selectedCase.category)} • {selectedCase.riskLevel} risk</div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Tailored phrases for this specific case</p>
              </>
            ) : (
              <p className="text-sm text-gray-600 mb-4">Click any case to see context-specific scripts</p>
            )}

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {displayedScripts.map((suggestion, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-600 mb-2">{suggestion.situation}</div>
                  <div className="text-sm text-gray-700 italic">{suggestion.script}</div>
                  <button
                    onClick={() => handleCopyScript(suggestion.script, index)}
                    className="mt-3 flex items-center space-x-1 text-xs font-semibold text-black hover:underline"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy to clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-black" />
              <h3 className="text-lg font-semibold text-black">Feedback Impact</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Cases reviewed today</span>
                <span className="font-semibold text-black">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AI decisions overridden</span>
                <span className="font-semibold text-black">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Learning updates sent</span>
                <span className="font-semibold text-black">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Model accuracy</span>
                <span className="font-semibold text-black">98.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Team Insights</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Your accuracy rate</span>
                <span className="font-semibold">99.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Cases this week</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Avg. review time</span>
                <span className="font-semibold">3.2 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal
        isOpen={feedbackModalOpen}
        onClose={() => {
          setFeedbackModalOpen(false);
          setFeedbackCaseId(null);
        }}
        onSubmit={handleFeedbackSubmit}
        caseId={feedbackCaseId || ''}
        customerName={
          feedbackCaseId
            ? (hitlData.cases.find((c: CaseItem) => c.id === feedbackCaseId)?.customer || '')
            : ''
        }
      />
    </div>
  );
}
