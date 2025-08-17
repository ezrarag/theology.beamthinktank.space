'use client';

import { useState } from 'react';
import { Heart, CreditCard, Calendar, DollarSign } from 'lucide-react';

const donationAmounts = [25, 50, 100, 250, 500];
const recurringOptions = [
  { id: 'monthly', label: 'Monthly', icon: Calendar },
  { id: 'quarterly', label: 'Quarterly', icon: Calendar },
  { id: 'yearly', label: 'Yearly', icon: Calendar },
];

export default function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringType, setRecurringType] = useState('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async () => {
    setIsProcessing(true);
    
    // Simulate Stripe checkout process
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your donation! You will be redirected to Stripe to complete your payment.');
    }, 2000);
  };

  const getFinalAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your donation helps us provide quality education, foster interfaith dialogue, 
            and build bridges between communities worldwide.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Donation Type Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setIsRecurring(false)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  !isRecurring 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setIsRecurring(true)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  isRecurring 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Recurring
              </button>
            </div>
          </div>

          {/* Recurring Options */}
          {isRecurring && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                Choose Recurring Frequency
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {recurringOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setRecurringType(option.id)}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        recurringType === option.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Amount Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
              Select Amount
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedAmount === amount && !customAmount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <DollarSign className="w-5 h-5 mx-auto mb-1" />
                  <span className="font-semibold">{amount}</span>
                </button>
              ))}
            </div>
            
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Donation Summary */}
          <div className="bg-slate-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600">Donation Amount:</span>
              <span className="text-2xl font-bold text-slate-900">
                ${getFinalAmount().toFixed(2)}
              </span>
            </div>
            {isRecurring && (
              <div className="flex justify-between items-center text-sm text-slate-600">
                <span>Frequency:</span>
                <span className="capitalize">{recurringType}</span>
              </div>
            )}
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonation}
            disabled={isProcessing || getFinalAmount() <= 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                {isRecurring ? 'Start Recurring Donation' : 'Donate Now'}
              </>
            )}
          </button>

          <p className="text-sm text-slate-500 text-center mt-4">
            Secure payment powered by Stripe
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$50K+</div>
            <p className="text-slate-600">Raised This Year</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-slate-600">Donors</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-slate-600">Goes to Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
