import React from 'react';
import { Users, Zap, Calendar, BarChart3, TrendingUp, Bot } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.',
      benefits: ['Client profiles', 'Interaction history', 'Contact management', 'Data organization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.',
      benefits: ['Email automation', 'Task scheduling', 'Follow-up reminders', 'Workflow templates']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.',
      benefits: ['Online booking', 'Calendar sync', 'Appointment reminders', 'Availability management']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.',
      benefits: ['Business analytics', 'Performance metrics', 'Data visualization', 'Strategic insights']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Advanced Reporting & Analytics',
      description: 'Gain deep insights into your business performance.',
      benefits: ['Comprehensive dashboards', 'Customizable reports', 'Performance tracking', 'Growth optimization']
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI-Powered Automation',
      description: 'Streamline operations with intelligent automation.',
      benefits: ['Predictive lead scoring', 'Automated customer segmentation', 'Smart workflow recommendations', 'Efficiency optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Everything you need to manage clients, automate workflows, and grow your business efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-primary-50/30 group"
            >
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-600 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              See how these powerful features can streamline your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border border-gray-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}