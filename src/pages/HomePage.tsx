import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Play, Users, Zap, Calendar, BarChart3, CheckCircle, Star, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onScrollToVideo?: () => void;
}

export default function HomePage({ onNavigate, onScrollToVideo }: HomePageProps) {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.'
    }
  ];

  const stats = [
    { label: 'Customer Satisfaction', value: '100%' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Support', value: '24/7' },
  ];

  const testimonials = [
    {
      name: 'Nora Ali',
      company: 'Digital Marketing Expert',
      text: 'Inflow transformed how I used to manage clients. The automation features alone now saves me 20 hours every week.',
      rating: 5
    },
    {
      name: 'Simone Brooks',
      company: 'Real Estate Agent',
      text: 'Having all my client info in one place makes my day so much easier. Honestly, it's a game changer.',
      rating: 5
    },
    {
      name: 'Lillian Clarke',
      company: 'Nail Stylist',
      text: 'Finally, a platform that actually makes client management much more convenient. The ROI has been incredible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-purple-100/30"></div>
          
          {/* Floating gradient shapes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF4DA6%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight tracking-tight">
             Elevate Your Sales With The All-in-One CRM Platform
            </h1>       
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Automate client management and keep everything organized all in one place, 
              from onboarding to billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => onNavigate?.('pricing')}
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25"
              >
                Get Started
              </button>
              
              <button 
                onClick={onScrollToVideo}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-gray-900 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-pink-200/50 hover:border-transparent hover-lift"
              >
                <Play className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
                <span>See Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              All You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Powerful features designed to help you manage clients more efficiently and grow your business faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 transition-all duration-300 hover-lift shadow-sm hover:shadow-lg group"
              >
                <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              See Inflow in Action
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Watch how easy it is to transform your business operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50/50 to-purple-50/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto hover-lift cursor-pointer shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">Demo Video Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">1920 × 1080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Trusted With Thousands
            </h2>
            <p className="text-xl text-gray-600 font-light">
              See what our customers are saying about their Inflow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift group"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium text-base leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-pink-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Integrate with your favorite tools
            </h2>
          </div>

          {/* Logo Carousel */}
          <div className="relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden">
              <div className="flex animate-scroll hover:pause-animation">
                {/* First set of logos */}
                <div className="flex items-center gap-12 min-w-max">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.605-2.068 4.777-1.172 1.172-2.92 1.899-4.777 2.068-.927.084-1.848.084-2.775 0-1.858-.169-3.605-.896-4.777-2.068C1.999 11.765 1.272 10.018 1.103 8.16c-.084-.927-.084-1.848 0-2.775.169-1.858.896-3.605 2.068-4.777C4.343 1.436 6.091.709 7.948.54c.927-.084 1.848-.084 2.775 0 1.858.169 3.605.896 4.777 2.068 1.172 1.172 1.899 2.92 2.068 4.777.084.927.084 1.848 0 2.775z" fill="#FF6900"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" fill="#FF6900"/>
                    <path d="M12 6.545c-.727 0-1.455.273-2.018.818L7.636 9.709c-.563.545-.563 1.427 0 1.972l2.346 2.346c.563.545 1.291.818 2.018.818s1.455-.273 2.018-.818l2.346-2.346c.563-.545.563-1.427 0-1.972l-2.346-2.346c-.563-.545-1.291-.818-2.018-.818z" fill="#FF6900"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.942 13.98l-2.955-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.777z" fill="#0088cc"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635bff"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" fill="#bd081c"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.942 13.98l-2.955-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.777z" fill="#95E1D3"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#25D366"/>
                  </svg>
                </div>
                
                {/* Duplicate set for infinite scroll */}
                <div className="flex items-center gap-12 min-w-max">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.605-2.068 4.777-1.172 1.172-2.92 1.899-4.777 2.068-.927.084-1.848.084-2.775 0-1.858-.169-3.605-.896-4.777-2.068C1.999 11.765 1.272 10.018 1.103 8.16c-.084-.927-.084-1.848 0-2.775.169-1.858.896-3.605 2.068-4.777C4.343 1.436 6.091.709 7.948.54c.927-.084 1.848-.084 2.775 0 1.858.169 3.605.896 4.777 2.068 1.172 1.172 1.899 2.92 2.068 4.777.084.927.084 1.848 0 2.775z" fill="#FF6900"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" fill="#FF6900"/>
                    <path d="M12 6.545c-.727 0-1.455.273-2.018.818L7.636 9.709c-.563.545-.563 1.427 0 1.972l2.346 2.346c.563.545 1.291.818 2.018.818s1.455-.273 2.018-.818l2.346-2.346c.563-.545.563-1.427 0-1.972l-2.346-2.346c-.563-.545-1.291-.818-2.018-.818z" fill="#FF6900"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.942 13.98l-2.955-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.777z" fill="#0088cc"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#635bff"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" fill="#bd081c"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.942 13.98l-2.955-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.777z" fill="#95E1D3"/>
                  </svg>
                  <svg className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="#25D366"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Join thousands of successful businesses using Inflow to streamline their operations and accelerate growth.
            </p>
            <button 
              onClick={() => onNavigate?.('pricing')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25"
            >
              Start Your 7-Day Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}