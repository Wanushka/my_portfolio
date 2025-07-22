import React, { useState } from 'react';
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { personalData } from "../../data/personal";
import { useTheme } from "../../hooks/useTheme";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const { theme } = useTheme();

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      description: 'Drop me a line anytime',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      description: 'Let\'s have a quick chat',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500'
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Elements */}

      <AnimatedSection>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 dark:bg-blue-400/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Let's Connect</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-emerald-600 dark:from-white dark:via-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life? I'm here to help you create something extraordinary. 
              Let's discuss your ideas and make them reality.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/60 hover:border-slate-300/70 dark:hover:border-slate-600/70 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/30 dark:hover:shadow-slate-900/30 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {method.label}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {method.description}
                      </p>
                    </div>

                    {/* Contact Value */}
                    <div className="p-3 bg-slate-100/80 dark:bg-slate-700/80 rounded-lg border border-slate-200/50 dark:border-slate-600/50">
                      <p className="text-sm font-mono text-slate-700 dark:text-slate-300 break-all">
                        {method.value}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={method.href}
                        className={`flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${method.gradient} text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200`}
                      >
                        Contact
                      </a>
                      <button
                        onClick={() => copyToClipboard(method.value, method.label)}
                        className="px-4 py-3 bg-slate-200/80 dark:bg-slate-600/80 hover:bg-slate-300/80 dark:hover:bg-slate-500/80 rounded-xl transition-colors duration-200 relative border border-slate-300/50 dark:border-slate-500/50"
                        title={`Copy ${method.label.toLowerCase()}`}
                      >
                        {copiedItem === method.label ? (
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-emerald-400/10 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className={`font-semibold text-slate-900 ${theme === 'light' ? 'text-blue-700' : 'text-gray-200'}`}>
                  Response Time: 24 Hours
                </p>
                <p className={`text-sm ${theme === 'light' ? 'text-black' : 'text-gray-200'}`}>
                  I'll get back to you as soon as possible
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;