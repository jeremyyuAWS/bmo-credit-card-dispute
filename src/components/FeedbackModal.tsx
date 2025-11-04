import { useState } from 'react';
import { X, Star } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: FeedbackData) => void;
  caseId: string;
  customerName: string;
}

export interface FeedbackData {
  rating: number;
  feedbackType: string;
  suggestedResponse: string;
  notes: string;
  reviewerEmail: string;
}

export function FeedbackModal({ isOpen, onClose, onSubmit, caseId, customerName }: FeedbackModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('accurate-helpful');
  const [suggestedResponse, setSuggestedResponse] = useState('');
  const [notes, setNotes] = useState('');
  const [reviewerEmail, setReviewerEmail] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Please provide a rating');
      return;
    }

    const feedback: FeedbackData = {
      rating,
      feedbackType,
      suggestedResponse,
      notes,
      reviewerEmail
    };

    onSubmit(feedback);

    setRating(0);
    setFeedbackType('accurate-helpful');
    setSuggestedResponse('');
    setNotes('');
    setReviewerEmail('');
  };

  const handleCancel = () => {
    setRating(0);
    setFeedbackType('accurate-helpful');
    setSuggestedResponse('');
    setNotes('');
    setReviewerEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">Provide Feedback to Agent Network</h2>
              <p className="text-sm text-gray-600">Case: {customerName} • ID: {caseId}</p>
            </div>
            <button
              onClick={handleCancel}
              className="text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoverRating || rating)
                          ? 'fill-yellow-400 stroke-yellow-400'
                          : 'fill-gray-200 stroke-gray-300'
                      }`}
                    />
                  </button>
                ))}
                {rating > 0 && (
                  <span className="ml-3 text-sm font-semibold text-gray-700">
                    {rating === 1 && 'Poor'}
                    {rating === 2 && 'Fair'}
                    {rating === 3 && 'Good'}
                    {rating === 4 && 'Very Good'}
                    {rating === 5 && 'Excellent'}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="feedbackType" className="block text-sm font-semibold text-black mb-2">
                Feedback Type
              </label>
              <select
                id="feedbackType"
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="accurate-helpful">Accurate & Helpful</option>
                <option value="missed-context">Missed Important Context</option>
                <option value="incorrect-analysis">Incorrect Analysis</option>
                <option value="policy-misinterpretation">Policy Misinterpretation</option>
                <option value="bias-detected">Potential Bias Detected</option>
                <option value="insufficient-evidence">Insufficient Evidence Review</option>
                <option value="excellent-catch">Excellent Edge Case Handling</option>
                <option value="needs-improvement">General - Needs Improvement</option>
              </select>
            </div>

            <div>
              <label htmlFor="suggestedResponse" className="block text-sm font-semibold text-black mb-2">
                Suggested Improved Decision (Optional)
              </label>
              <textarea
                id="suggestedResponse"
                value={suggestedResponse}
                onChange={(e) => setSuggestedResponse(e.target.value)}
                placeholder="Provide an improved version of the AI decision or resolution path..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-black mb-2">
                Notes/Comments
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional context, reasoning for override, or suggestions for the agent network..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <div>
              <label htmlFor="reviewerEmail" className="block text-sm font-semibold text-black mb-2">
                Reviewer Email (Optional)
              </label>
              <input
                type="email"
                id="reviewerEmail"
                value={reviewerEmail}
                onChange={(e) => setReviewerEmail(e.target.value)}
                placeholder="your.email@bmo.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900">
                <strong>Your feedback helps improve our AI:</strong> Every human decision is captured and used to retrain
                the agent network, improving accuracy and reducing future escalations.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-colors ${
                rating === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Submit Feedback & Override
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 rounded-xl text-sm font-semibold border border-gray-200 text-black hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
