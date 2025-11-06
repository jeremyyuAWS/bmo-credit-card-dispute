import { useState } from 'react';
import {
  TrendingUp, Target, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, DollarSign,
  Users, Shield, Zap, AlertCircle, Clock, XCircle, TrendingDown, Sparkles,
  Brain, Activity, Bell, Lock, Globe, Phone, MessageSquare, RefreshCw,
  UserX, CreditCard, Mail, Wifi, WifiOff, TrendingUpIcon, ChevronRight,
  ShieldAlert, BadgeAlert, Workflow, Settings, PlayCircle, FileText, UserPlus,
  Calendar, CheckSquare, Send, X, Loader
} from 'lucide-react';

interface ActionableInsight {
  id: string;
  category: 'edge-case' | 'agent-optimization' | 'threat-detection' | 'outage-response';
  priority: 'critical' | 'high' | 'medium';
  title: string;
  problem: string;
  impact: string;
  currentState: string;
  recommendation: string;
  agenticSolution: string;
  implementation: string;
  timeline: string;
  estimatedValue: string;
  confidence: number;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  expertise: string[];
  availability: 'available' | 'busy' | 'away';
  avatar: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'critical' | 'high' | 'medium';
}

interface ActionPlan {
  insightId: string;
  status: 'draft' | 'approved' | 'in-progress' | 'completed';
  approvedBy?: string;
  approvedAt?: string;
  tasks: Task[];
  estimatedBudget?: string;
  expectedCompletion?: string;
}

export function StrategicInsights() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);
  const [actionPlans, setActionPlans] = useState<Map<string, ActionPlan>>(new Map());
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [selectedInsightForAction, setSelectedInsightForAction] = useState<ActionableInsight | null>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 'tm-1',
      name: 'Sarah Chen',
      role: 'VP of AI & Innovation',
      department: 'Technology',
      expertise: ['AI/ML', 'Agent Development', 'Product Strategy'],
      availability: 'available',
      avatar: 'SC'
    },
    {
      id: 'tm-2',
      name: 'Michael Rodriguez',
      role: 'Director of Fraud Prevention',
      department: 'Risk Management',
      expertise: ['Fraud Detection', 'Risk Analytics', 'Compliance'],
      availability: 'available',
      avatar: 'MR'
    },
    {
      id: 'tm-3',
      name: 'Emily Thompson',
      role: 'Lead ML Engineer',
      department: 'Technology',
      expertise: ['Machine Learning', 'Python', 'Model Training'],
      availability: 'busy',
      avatar: 'ET'
    },
    {
      id: 'tm-4',
      name: 'David Park',
      role: 'Senior Compliance Officer',
      department: 'Legal & Compliance',
      expertise: ['Regulatory Compliance', 'Banking Law', 'Risk Assessment'],
      availability: 'available',
      avatar: 'DP'
    },
    {
      id: 'tm-5',
      name: 'Jessica Williams',
      role: 'Product Manager - Fraud',
      department: 'Product',
      expertise: ['Product Strategy', 'UX Design', 'Customer Research'],
      availability: 'available',
      avatar: 'JW'
    },
    {
      id: 'tm-6',
      name: 'Alex Kumar',
      role: 'Senior Data Scientist',
      department: 'Analytics',
      expertise: ['Data Science', 'Pattern Recognition', 'Statistical Analysis'],
      availability: 'available',
      avatar: 'AK'
    },
    {
      id: 'tm-7',
      name: 'Rachel Martinez',
      role: 'Customer Experience Lead',
      department: 'Customer Success',
      expertise: ['CX Strategy', 'Voice of Customer', 'Service Design'],
      availability: 'available',
      avatar: 'RM'
    },
    {
      id: 'tm-8',
      name: 'James Foster',
      role: 'Infrastructure Architect',
      department: 'Technology',
      expertise: ['System Design', 'Cloud Architecture', 'DevOps'],
      availability: 'busy',
      avatar: 'JF'
    }
  ];

  const insights: ActionableInsight[] = [
    {
      id: 'elder-fraud-1',
      category: 'edge-case',
      priority: 'critical',
      title: 'Elder Fraud Detection & Family Notification',
      problem: 'Customers 65+ are 3x more likely to fall victim to romance scams, tech support fraud, and grandparent scams. Current workflow lacks age-aware fraud detection.',
      impact: 'Vulnerable customers lose significant amounts before disputes are filed. Reputational risk if BMO appears negligent.',
      currentState: 'Generic fraud detection treats all demographics equally. No proactive family notification mechanism.',
      recommendation: 'Build dedicated "Elder Protection Agent" with behavioral pattern recognition, velocity alerts for unusual large transfers, and automatic family notification protocols.',
      agenticSolution: 'Agent monitors transactions for customers 65+, detects anomalies like first-time wire transfers >$5K, Zelle payments to new recipients, or rapid succession of gift card purchases. Automatically sends SMS/email alerts to pre-designated family members or trusted contacts within 15 minutes.',
      implementation: '1) Train ML model on elder fraud patterns, 2) Add customer profile fields for trusted contacts, 3) Deploy new "Elder Protection" agent with family notification API, 4) Create compliance framework for privacy compliance',
      timeline: '6-8 weeks to production',
      estimatedValue: 'Prevent high-value fraud, enhance brand reputation as elder-friendly bank, reduce liability exposure',
      confidence: 94
    },
    {
      id: 'crypto-scam-1',
      category: 'threat-detection',
      priority: 'critical',
      title: 'Cryptocurrency Investment Scam Workflow',
      problem: 'Pig butchering scams and fake crypto investment platforms are emerging rapidly. Victims send multiple payments before realizing fraud. Current agents lack crypto-specific pattern recognition.',
      impact: 'Customers lose life savings. Chargebacks difficult once funds reach crypto exchanges.',
      currentState: 'Fraud Sentinel flags velocity but misses the specific pattern: gradual trust-building payments followed by large "investment" transfers.',
      recommendation: 'Create "Crypto Scam Sentinel" sub-agent with specialized detection for multi-stage crypto fraud patterns.',
      agenticSolution: 'Agent recognizes patterns: small test transfers to crypto exchanges, followed by increasing amounts over 2-4 weeks, combined with new payee relationships and social engineering indicators (urgent language in payment memos). Triggers HITL review and customer education call BEFORE large transfer approval.',
      implementation: '1) Analyze crypto scam case history, 2) Build pattern detection ruleset, 3) Integrate with crypto exchange blocklists, 4) Create educational intervention scripts for customer outreach',
      timeline: '4-6 weeks to production',
      estimatedValue: 'Prevent devastating losses, reduce dispute volume, demonstrate proactive protection',
      confidence: 91
    },
    {
      id: 'authorized-push-1',
      category: 'edge-case',
      priority: 'high',
      title: 'Authorized Push Payment (APP) Fraud Expansion',
      problem: 'Customers are tricked into authorizing legitimate payments to fraudsters (fake invoices, impersonation). Technically not "unauthorized" so current eligibility rules reject disputes.',
      impact: 'Growing complaint volume. Customers angry that BMO won\'t help with social engineering fraud.',
      currentState: 'Eligibility Agent correctly identifies payment as "authorized" and denies claim. No investigation of social engineering.',
      recommendation: 'Build "Social Engineering Investigator" agent that evaluates manipulation tactics separate from authorization status.',
      agenticSolution: 'Agent analyzes: rushed timeline, atypical payment patterns, merchant/payee verification gaps, customer statements for manipulation indicators. If social engineering score >70%, escalates to HITL for manual investigation and potential goodwill credit. Tracks emerging scam patterns across customer base.',
      implementation: '1) Define social engineering indicators, 2) Build scoring model, 3) Create HITL investigation queue, 4) Develop customer education materials for common scams',
      timeline: '8-10 weeks to production',
      estimatedValue: 'Improve customer satisfaction in edge cases, competitive differentiation, reduce escalations',
      confidence: 87
    },
    {
      id: 'outreach-low-csat',
      category: 'agent-optimization',
      priority: 'high',
      title: 'Outreach Agent - Low CSAT in Denied Claims',
      problem: 'When disputes are denied, customers rate Outreach Agent communications poorly. Language feels robotic and unsympathetic despite technically accurate explanations.',
      impact: 'CSAT drops to 62% for denied claims vs 94% for approved claims. NPS impact.',
      currentState: 'Outreach Agent uses template language explaining denial reasons. Lacks empathy and alternative solution suggestions.',
      recommendation: 'Retrain Outreach Agent with advanced empathy model and solution-oriented responses for denials.',
      agenticSolution: 'Enhanced agent responses include: 1) Empathetic acknowledgment of frustration, 2) Clear plain-language explanation (not legalese), 3) Alternative options (merchant negotiation, partial credit consideration), 4) Proactive help with prevention (setting up alerts, card controls). Includes sentiment analysis to adjust tone based on customer emotion.',
      implementation: '1) Collect denied claim transcripts, 2) Train empathy-enhanced language model, 3) Add alternative solution recommendation logic, 4) A/B test with control group',
      timeline: '3-4 weeks to production',
      estimatedValue: 'Improve denied claim CSAT from 62% to target 78%, reduce complaint escalations',
      confidence: 89
    },
    {
      id: 'fraud-confidence-1',
      category: 'agent-optimization',
      priority: 'high',
      title: 'Fraud Sentinel - Low Confidence on Cross-Border Transactions',
      problem: 'Fraud Sentinel confidence drops below 60% for international transactions, triggering excessive HITL reviews (18% vs 4% overall). Slows resolution time.',
      impact: 'Manual review bottleneck. Customer wait times increase for legitimate travel transactions.',
      currentState: 'Agent lacks sufficient training data on legitimate cross-border patterns. Treats all international charges as high-risk.',
      recommendation: 'Enhance Fraud Sentinel with geo-intelligence layer and travel notification integration.',
      agenticSolution: 'Enhanced agent checks: 1) Customer travel notification history (API integration with mobile app), 2) Airline/hotel booking patterns from same card, 3) Progressive transaction patterns (airport → taxi → hotel), 4) Time zone consistency. Confidence increases from 58% to 87% for legitimate travel, reducing HITL escalations by 75%.',
      implementation: '1) Integrate travel notification API, 2) Add merchant category analysis, 3) Retrain model with travel transaction corpus, 4) Deploy geo-pattern recognition',
      timeline: '5-6 weeks to production',
      estimatedValue: 'Reduce HITL volume by 14 percentage points, improve customer experience during travel',
      confidence: 93
    },
    {
      id: 'deep-fake-voice',
      category: 'threat-detection',
      priority: 'critical',
      title: 'AI Deep-Fake Voice Phishing Detection',
      problem: 'Emerging threat: Fraudsters use AI voice cloning to impersonate customers during phone verification. Call center agents unable to detect deep-fakes.',
      impact: 'Account takeover risk. If fraudster passes voice verification, they can authorize large transactions or card changes.',
      currentState: 'No deep-fake detection capability. Relying on human agents to detect voice anomalies (not effective).',
      recommendation: 'Deploy "Voice Biometric Validation Agent" with deep-fake detection algorithms.',
      agenticSolution: 'Agent analyzes voice calls in real-time for: 1) AI synthesis artifacts (unnatural cadence, frequency anomalies), 2) Compares against customer voice biometric baseline, 3) Cross-references with behavioral patterns (rushed requests, unusual account changes), 4) Flags suspicious calls for secondary authentication (one-time code to registered device). Blocks account changes if deep-fake score >75%.',
      implementation: '1) Integrate voice biometric analysis API, 2) Build deep-fake detection model, 3) Add secondary authentication triggers, 4) Train call center staff on new workflow',
      timeline: '10-12 weeks to production',
      estimatedValue: 'Prevent account takeover fraud, stay ahead of emerging AI-based threats, industry leadership',
      confidence: 82
    },
    {
      id: 'merchant-dispute-decline',
      category: 'edge-case',
      priority: 'medium',
      title: 'Merchant Dispute Representment Defense',
      problem: 'When merchants challenge disputes (representments), BMO auto-accepts merchant evidence without customer counter-argument collection. Win rate drops from 83% to 34%.',
      impact: 'Customers frustrated when initially-approved disputes are reversed. Increases complaints and defection risk.',
      currentState: 'Resolution Agent approves initial dispute, but no follow-up agent handles merchant representment. Customer unaware they need to provide additional evidence.',
      recommendation: 'Create "Representment Defense Agent" that proactively collects customer counter-evidence.',
      agenticSolution: 'When merchant submits representment, agent immediately contacts customer via SMS/email: "Merchant challenged your dispute with evidence. We need your response within 72 hours to maintain your refund." Guides customer through counter-evidence collection (screenshots, receipts, communication logs). Auto-formats documentation for card network submission. Tracks deadlines to prevent auto-reversals.',
      implementation: '1) Build merchant representment detection webhook, 2) Create customer notification templates, 3) Develop evidence collection portal, 4) Add deadline tracking and auto-submission',
      timeline: '6-8 weeks to production',
      estimatedValue: 'Improve representment win rate to 68%, reduce dispute reversals, enhance customer trust',
      confidence: 90
    },
    {
      id: 'subscription-trap',
      category: 'edge-case',
      priority: 'medium',
      title: 'Subscription Trap & Dark Pattern Detection',
      problem: 'Customers dispute recurring charges from merchants using "dark patterns" (hidden auto-renewal, difficult cancellation). Current eligibility rules side with merchants showing terms acceptance.',
      impact: 'Customers blame BMO for not protecting them from predatory merchant practices. Reputational risk.',
      currentState: 'Eligibility Agent sees valid merchant agreement, approves charge. Doesn\'t evaluate merchant ethics or cancellation difficulty.',
      recommendation: 'Build "Merchant Ethics Scoring Agent" that flags predatory subscription practices.',
      agenticSolution: 'Agent maintains database of merchant complaint patterns. Tracks: cancellation difficulty scores, FTC enforcement actions, consumer complaint volume, dark pattern detection (free trial to auto-renewal without clear notice). If merchant ethics score <40%, escalates to HITL for goodwill credit consideration. Flags merchant for proactive customer warnings on future transactions.',
      implementation: '1) Build merchant ethics database from public sources, 2) Create complaint pattern aggregation, 3) Define dark pattern detection rules, 4) Add HITL escalation workflow',
      timeline: '7-9 weeks to production',
      estimatedValue: 'Differentiate as consumer-protection leader, reduce subscription disputes, improve NPS',
      confidence: 85
    },
    {
      id: 'system-outage-response',
      category: 'outage-response',
      priority: 'critical',
      title: 'Automated Outage Response & Customer Communication',
      problem: 'When card network or core banking systems have outages, customers cannot complete transactions but agents go offline without proactive communication.',
      impact: 'Customer panic, call center overload, social media complaints amplify during outages.',
      currentState: 'Manual outage response. Agents stop processing. No automated customer notification.',
      recommendation: 'Deploy "Outage Response Orchestrator" that detects system failures and executes communication playbook.',
      agenticSolution: 'Agent monitors system health endpoints. When outage detected: 1) Immediately sends SMS/push notification to affected customers with status update and ETA, 2) Pauses new dispute intake and queues requests, 3) Provides self-service FAQ via chatbot, 4) Sends recovery notification when systems restored with expedited processing offer. Logs all impacts for post-incident review.',
      implementation: '1) Integrate system health monitoring APIs, 2) Build notification distribution system, 3) Create outage communication templates, 4) Develop queue management logic',
      timeline: '5-6 weeks to production',
      estimatedValue: 'Reduce call center volume during outages by 60%, improve customer communication, demonstrate operational excellence',
      confidence: 95
    },
    {
      id: 'compliance-tuning',
      category: 'agent-optimization',
      priority: 'high',
      title: 'Compliance Guard - Over-Conservative Rule Application',
      problem: 'Compliance Guard rejects 12% of legitimate disputes due to over-conservative regulatory interpretation, creating friction and delays.',
      impact: 'Customers wait unnecessarily. Operations team must manually override, defeating automation purpose.',
      currentState: 'Agent applies "maximum safety" approach to ambiguous regulatory scenarios, erring toward rejection.',
      recommendation: 'Fine-tune Compliance Guard with regulatory expert feedback loop and risk-based decision framework.',
      agenticSolution: 'Enhanced agent uses confidence-weighted compliance analysis: 1) Clear violations = auto-reject, 2) Ambiguous cases = consult regulatory decision tree with precedent matching, 3) Low-risk scenarios = approve with documentation flag for audit review. HITL escalation only for genuinely novel regulatory questions. Monthly calibration sessions with compliance officers to update decision trees.',
      implementation: '1) Analyze over-rejection cases with legal team, 2) Build regulatory precedent database, 3) Create risk-tiered decision framework, 4) Add quarterly compliance calibration process',
      timeline: '8-10 weeks to production',
      estimatedValue: 'Reduce false rejections from 12% to 3%, maintain zero compliance violations, improve efficiency',
      confidence: 88
    },
    {
      id: 'synthetic-identity',
      category: 'threat-detection',
      priority: 'critical',
      title: 'Synthetic Identity Fraud Ring Detection',
      problem: 'Organized fraud rings create synthetic identities (real SSN + fake info) and slowly build credit before bust-out. Current fraud detection evaluates accounts individually, missing network patterns.',
      impact: 'Multi-account fraud rings can steal hundreds of thousands before detection.',
      currentState: 'Fraud Sentinel analyzes individual transactions. Lacks cross-account pattern recognition.',
      recommendation: 'Build "Fraud Ring Analyzer" that identifies connected synthetic identity networks.',
      agenticSolution: 'Agent analyzes patterns across accounts: 1) Shared device fingerprints, IP addresses, mailing addresses, 2) Similar transaction patterns (same merchants, amounts, timing), 3) Linked authorized users or beneficiaries, 4) Rapid credit utilization patterns. Maps relationship networks and flags entire rings for investigation. When one account in ring triggers fraud alert, proactively reviews all connected accounts.',
      implementation: '1) Build graph database for account relationships, 2) Develop network analysis algorithms, 3) Create ring detection scoring model, 4) Integrate with identity verification services',
      timeline: '12-14 weeks to production',
      estimatedValue: 'Detect fraud rings before bust-out phase, prevent major losses, enable law enforcement collaboration',
      confidence: 86
    },
    {
      id: 'dispute-fatigue',
      category: 'edge-case',
      priority: 'medium',
      title: 'Serial Disputer Detection & Intervention',
      problem: 'Small percentage of customers file excessive disputes (>10 per year), often for buyer\'s remorse rather than fraud. Abusing dispute process.',
      impact: 'Resource drain, merchant complaints, potential card network penalties if dispute abuse rates are high.',
      currentState: 'Each dispute treated independently. No pattern recognition for serial disputers.',
      recommendation: 'Create "Dispute Pattern Analyzer" that flags potential abuse and triggers intervention.',
      agenticSolution: 'Agent tracks dispute frequency, approval rates, merchant types. Pattern recognition for: 1) Buyer\'s remorse indicators (disputes on legitimate merchants, items received but unwanted), 2) Consistent low-value disputes, 3) Disputes filed immediately after purchase. When pattern score >80%, triggers HITL review and customer education call explaining proper dispute usage. May recommend merchant return policies instead. Flags account for enhanced scrutiny.',
      implementation: '1) Build historical dispute pattern analysis, 2) Create abuse scoring algorithm, 3) Develop customer intervention workflow, 4) Add educational content on proper dispute usage',
      timeline: '6-7 weeks to production',
      estimatedValue: 'Reduce dispute abuse, maintain merchant relationships, comply with card network standards',
      confidence: 83
    }
  ];

  const generateActionPlan = (insight: ActionableInsight) => {
    setIsGeneratingPlan(true);
    setSelectedInsightForAction(insight);

    setTimeout(() => {
      const tasks = generateTasksForInsight(insight);
      const newPlan: ActionPlan = {
        insightId: insight.id,
        status: 'draft',
        tasks: tasks,
        estimatedBudget: calculateBudget(insight),
        expectedCompletion: insight.timeline
      };

      setActionPlans(new Map(actionPlans.set(insight.id, newPlan)));
      setIsGeneratingPlan(false);
      setShowAssignmentModal(true);
    }, 2000);
  };

  const generateTasksForInsight = (insight: ActionableInsight): Task[] => {
    const baseDate = new Date();
    const tasks: Task[] = [];

    const steps = insight.implementation.split(/\d\)/).filter(s => s.trim());

    steps.forEach((step, index) => {
      const dueDate = new Date(baseDate);
      dueDate.setDate(dueDate.getDate() + (index + 1) * 7);

      tasks.push({
        id: `task-${insight.id}-${index}`,
        title: step.trim().substring(0, 80),
        description: step.trim(),
        assignedTo: '',
        dueDate: dueDate.toISOString().split('T')[0],
        status: 'pending',
        priority: index === 0 ? 'critical' : 'high'
      });
    });

    return tasks;
  };

  const calculateBudget = (insight: ActionableInsight): string => {
    const budgetMap: Record<string, string> = {
      'critical': '$150K - $250K',
      'high': '$80K - $150K',
      'medium': '$40K - $80K'
    };
    return budgetMap[insight.priority] || '$50K - $100K';
  };

  const assignTaskToMember = (taskId: string, memberId: string) => {
    if (!selectedInsightForAction) return;

    const plan = actionPlans.get(selectedInsightForAction.id);
    if (!plan) return;

    const updatedTasks = plan.tasks.map(task =>
      task.id === taskId ? { ...task, assignedTo: memberId } : task
    );

    const updatedPlan = { ...plan, tasks: updatedTasks };
    setActionPlans(new Map(actionPlans.set(selectedInsightForAction.id, updatedPlan)));
  };

  const approveAndLaunchPlan = () => {
    if (!selectedInsightForAction) return;

    const plan = actionPlans.get(selectedInsightForAction.id);
    if (!plan) return;

    const updatedPlan: ActionPlan = {
      ...plan,
      status: 'approved',
      approvedBy: 'Executive Leadership',
      approvedAt: new Date().toISOString()
    };

    setActionPlans(new Map(actionPlans.set(selectedInsightForAction.id, updatedPlan)));
    setShowAssignmentModal(false);
    setShowSuccessMessage(true);

    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const filteredInsights = selectedCategory === 'all'
    ? insights
    : insights.filter(i => i.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'edge-case': return Sparkles;
      case 'agent-optimization': return Settings;
      case 'threat-detection': return ShieldAlert;
      case 'outage-response': return AlertCircle;
      default: return Target;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'edge-case': return 'from-purple-500 to-purple-700';
      case 'agent-optimization': return 'from-blue-500 to-blue-700';
      case 'threat-detection': return 'from-red-500 to-red-700';
      case 'outage-response': return 'from-orange-500 to-orange-700';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case 'edge-case': return 'border-purple-200 bg-purple-50';
      case 'agent-optimization': return 'border-blue-200 bg-blue-50';
      case 'threat-detection': return 'border-red-200 bg-red-50';
      case 'outage-response': return 'border-orange-200 bg-orange-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'away': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const categoryStats = {
    'edge-case': insights.filter(i => i.category === 'edge-case').length,
    'agent-optimization': insights.filter(i => i.category === 'agent-optimization').length,
    'threat-detection': insights.filter(i => i.category === 'threat-detection').length,
    'outage-response': insights.filter(i => i.category === 'outage-response').length,
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-slide-in">
          <CheckCircle className="w-6 h-6" />
          <div>
            <div className="font-bold">Action Plan Approved!</div>
            <div className="text-sm text-green-100">Team members have been notified and tasks assigned.</div>
          </div>
        </div>
      )}

      <div className="p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">Strategic Insights & Agentic Opportunities</h2>
          <p className="text-sm text-gray-600">AI-powered recommendations for new workflows, agent optimization, and emerging threat response</p>
        </div>

        <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 text-white">
          <div className="flex items-start space-x-4">
            <Brain className="w-10 h-10 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2">What Agentic AI Can Do For BMO</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Beyond automating existing workflows, agentic AI identifies gaps, anticipates threats, and prescribes solutions in real-time.
                This dashboard surfaces actionable opportunities where deploying new agents or optimizing existing ones will deliver measurable impact.
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{categoryStats['edge-case']}</div>
                  <div className="text-xs text-gray-300">Edge Case Workflows</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{categoryStats['agent-optimization']}</div>
                  <div className="text-xs text-gray-300">Agent Optimizations</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{categoryStats['threat-detection']}</div>
                  <div className="text-xs text-gray-300">Emerging Threats</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{categoryStats['outage-response']}</div>
                  <div className="text-xs text-gray-300">Operational Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-black" />
            <span className="font-semibold text-black">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Insights ({insights.length})
            </button>
            <button
              onClick={() => setSelectedCategory('edge-case')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedCategory === 'edge-case'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              Edge Cases ({categoryStats['edge-case']})
            </button>
            <button
              onClick={() => setSelectedCategory('agent-optimization')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedCategory === 'agent-optimization'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              Agent Tuning ({categoryStats['agent-optimization']})
            </button>
            <button
              onClick={() => setSelectedCategory('threat-detection')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedCategory === 'threat-detection'
                  ? 'bg-red-600 text-white'
                  : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              Emerging Threats ({categoryStats['threat-detection']})
            </button>
            <button
              onClick={() => setSelectedCategory('outage-response')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedCategory === 'outage-response'
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
              }`}
            >
              Outage Response ({categoryStats['outage-response']})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredInsights.map((insight) => {
            const Icon = getCategoryIcon(insight.category);
            const isExpanded = expandedInsight === insight.id;
            const plan = actionPlans.get(insight.id);

            return (
              <div
                key={insight.id}
                className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
                  isExpanded ? getCategoryBorderColor(insight.category) : 'border-gray-200'
                }`}
              >
                <div
                  className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedInsight(isExpanded ? null : insight.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(insight.category)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-black">{insight.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(insight.priority)}`}>
                            {insight.priority.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-500">
                            {insight.confidence}% confidence
                          </span>
                          {plan && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-300">
                              {plan.status === 'approved' ? 'APPROVED' : 'DRAFT'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong className="text-black">Problem:</strong> {insight.problem}
                        </p>
                        {!isExpanded && (
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <ChevronRight className="w-4 h-4" />
                            <span>Click to view agentic solution and implementation plan</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-gray-200 p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-xs font-bold text-gray-600 uppercase">Impact</span>
                        </div>
                        <p className="text-sm text-gray-700">{insight.impact}</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Activity className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-gray-600 uppercase">Current State</span>
                        </div>
                        <p className="text-sm text-gray-700">{insight.currentState}</p>
                      </div>
                    </div>

                    <div className={`rounded-xl p-5 border-2 ${getCategoryBorderColor(insight.category)}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <Sparkles className="w-5 h-5 text-black" />
                        <span className="font-bold text-black">Recommended Agentic Solution</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{insight.recommendation}</p>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-800 leading-relaxed">{insight.agenticSolution}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-5 text-white">
                      <div className="flex items-center space-x-2 mb-3">
                        <Workflow className="w-5 h-5 text-white" />
                        <span className="font-bold">Implementation Plan</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">{insight.implementation}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Timeline to Production</div>
                          <div className="text-lg font-bold">{insight.timeline}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Estimated Value</div>
                          <div className="text-sm font-semibold text-gray-200">{insight.estimatedValue}</div>
                        </div>
                      </div>
                    </div>

                    {!plan && (
                      <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5 border-2 border-green-200">
                        <div className="flex items-center space-x-3">
                          <PlayCircle className="w-8 h-8 text-green-600" />
                          <div>
                            <div className="font-bold text-black mb-1">Ready to Take Action?</div>
                            <div className="text-sm text-gray-600">Generate an action plan and assign tasks to your team</div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            generateActionPlan(insight);
                          }}
                          disabled={isGeneratingPlan}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isGeneratingPlan && selectedInsightForAction?.id === insight.id ? (
                            <>
                              <Loader className="w-5 h-5 animate-spin" />
                              <span>Analyzing...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-5 h-5" />
                              <span>Generate Action Plan</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {plan && plan.status === 'approved' && (
                      <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <div>
                            <div className="font-bold text-black">Action Plan Approved</div>
                            <div className="text-sm text-gray-600">Approved by {plan.approvedBy} on {new Date(plan.approvedAt!).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {plan.tasks.map(task => {
                            const assignedMember = teamMembers.find(m => m.id === task.assignedTo);
                            return (
                              <div key={task.id} className="bg-white rounded-lg p-3 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <CheckSquare className="w-4 h-4 text-gray-400" />
                                  <div>
                                    <div className="text-sm font-semibold text-black">{task.title}</div>
                                    <div className="text-xs text-gray-500">Due: {task.dueDate}</div>
                                  </div>
                                </div>
                                {assignedMember && (
                                  <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                                      {assignedMember.avatar}
                                    </div>
                                    <span className="text-sm text-gray-700">{assignedMember.name}</span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 p-6">
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Next Steps for Executive Team</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>1. Prioritize Critical Opportunities:</strong> Elder fraud protection, crypto scam detection, and deep-fake voice defense represent both high impact and emerging regulatory expectations.</p>
                <p><strong>2. Quick Wins:</strong> Agent optimization items (Outreach empathy tuning, Fraud Sentinel cross-border enhancement) deliver immediate ROI with 3-6 week timelines.</p>
                <p><strong>3. Build Strategic Moat:</strong> Advanced threat detection capabilities (synthetic identity networks, fraud rings) position BMO as innovation leader ahead of competitors.</p>
                <p><strong>4. Operational Excellence:</strong> Outage response orchestration and system monitoring demonstrate enterprise-grade reliability to customers and regulators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAssignmentModal && selectedInsightForAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 flex items-center justify-between text-white">
              <div>
                <h2 className="text-2xl font-bold">Action Plan: {selectedInsightForAction.title}</h2>
                <p className="text-sm text-green-100 mt-1">Assign tasks to team members and approve implementation</p>
              </div>
              <button
                onClick={() => setShowAssignmentModal(false)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-600 mb-1">Timeline</div>
                  <div className="text-lg font-bold text-black">{selectedInsightForAction.timeline}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-600 mb-1">Estimated Budget</div>
                  <div className="text-lg font-bold text-black">{actionPlans.get(selectedInsightForAction.id)?.estimatedBudget}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-600 mb-1">Confidence Score</div>
                  <div className="text-lg font-bold text-black">{selectedInsightForAction.confidence}%</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Available Team Members</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {teamMembers.map(member => (
                    <div key={member.id} className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white text-lg flex items-center justify-center font-bold flex-shrink-0">
                        {member.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-black">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role}</div>
                        <div className="text-xs text-gray-500 mt-1">{member.department}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.expertise.map(skill => (
                            <span key={skill} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full font-semibold ${getAvailabilityColor(member.availability)}`}>
                          {member.availability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-4 flex items-center space-x-2">
                  <CheckSquare className="w-5 h-5" />
                  <span>Implementation Tasks</span>
                </h3>
                <div className="space-y-3">
                  {actionPlans.get(selectedInsightForAction.id)?.tasks.map(task => {
                    const assignedMember = teamMembers.find(m => m.id === task.assignedTo);

                    return (
                      <div key={task.id} className="bg-white border-2 border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="font-semibold text-black mb-1">{task.title}</div>
                            <div className="text-sm text-gray-600 mb-2">{task.description}</div>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>Due: {task.dueDate}</span>
                              </div>
                              <span className={`px-2 py-1 rounded-full font-bold ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-3">
                          <div className="text-xs font-semibold text-gray-600 mb-2">Assign to:</div>
                          <div className="flex flex-wrap gap-2">
                            {teamMembers.filter(m => m.availability !== 'away').map(member => (
                              <button
                                key={member.id}
                                onClick={() => assignTaskToMember(task.id, member.id)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all ${
                                  task.assignedTo === member.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-full ${task.assignedTo === member.id ? 'bg-white text-green-600' : 'bg-blue-600 text-white'} text-xs flex items-center justify-center font-bold`}>
                                  {member.avatar}
                                </div>
                                <span className="font-semibold">{member.name}</span>
                                {task.assignedTo === member.id && <CheckCircle className="w-4 h-4" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t border-gray-200 px-8 py-5 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {actionPlans.get(selectedInsightForAction.id)?.tasks.filter(t => t.assignedTo).length || 0} of{' '}
                {actionPlans.get(selectedInsightForAction.id)?.tasks.length || 0} tasks assigned
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowAssignmentModal(false)}
                  className="px-6 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-200 transition-all"
                >
                  Save as Draft
                </button>
                <button
                  onClick={approveAndLaunchPlan}
                  disabled={!actionPlans.get(selectedInsightForAction.id)?.tasks.every(t => t.assignedTo)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>Approve & Launch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
