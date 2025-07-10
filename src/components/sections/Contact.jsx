import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { personalData } from "../../data/personal";

const Contact = () => {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
    console.log(`${type} copied to clipboard`);
  };

  return (
    <section id="contact" className="section pt-20 pb-16">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Email Me</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Send me an email and I'll get back to you within 24 hours.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-200 text-center"
                  >
                    Send Email
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalData.email, 'Email')}
                    className="px-4 py-3 bg-white/80 dark:bg-gray-800/80 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                    title="Copy email"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-8 hover:shadow-xl transition-all duration-300">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Call Me</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Prefer to talk? Give me a call for immediate assistance.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${personalData.phone}`}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200 text-center"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalData.phone, 'Phone')}
                    className="px-4 py-3 bg-white/80 dark:bg-gray-800/80 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                    title="Copy phone"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;