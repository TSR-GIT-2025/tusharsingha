'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaypal, FaCreditCard, FaLaptopCode, FaMobileAlt, FaServer, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { SiPaytm, SiGooglepay, SiPhonepe } from 'react-icons/si'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
  })

  const [serviceRequest, setServiceRequest] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'web',
    timeline: '1-2 weeks',
    projectDetails: ''
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer a range of services including web development, mobile app development, backend services, and custom software solutions tailored to your specific needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while more complex applications can take several months. I provide a detailed timeline after our initial consultation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'I offer both fixed-price and hourly rates depending on the project scope. After discussing your requirements, I can provide a detailed quote that fits your budget.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer various support and maintenance packages to ensure your project continues to run smoothly after launch.'
    }
  ]
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setServiceRequest(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage(null)

    try {
      const response = await fetch('https://tusharsingha.onrender.com/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceRequest),
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit service request')
      }

      setSubmitStatus('success')
      setServiceRequest({
        name: '',
        email: '',
        phone: '',
        serviceType: 'web',
        timeline: '1-2 weeks',
        projectDetails: ''
      })
    } catch (error) {
      console.error('Service request error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit service request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage(null)

    try {
      const response = await fetch('https://tusharsingha.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        company: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-400 mt-4"
            >
              Feel free to reach out for collaborations!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
              className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:tsingha4296@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>tsingha4296@gmail.com</span>
                </a>
                <a
                  href="tel:+919339554962"
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>+91 9339554962</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>Bagdogra, WB</span>
                </div>
                
                {/* Payment Options */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Payment Options</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                      <FaPaypal className="w-5 h-5" />
                      <span>PayPal: tsingha4296@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                      <SiGooglepay className="w-5 h-5" />
                      <span>Google Pay: +91 9339554962</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                      <SiPhonepe className="w-5 h-5" />
                      <span>PhonePe: +91 9339554962</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                      <SiPaytm className="w-5 h-5" />
                      <span>Paytm: +91 9339554962</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                      <FaCreditCard className="w-5 h-5" />
                      <span>Bank Transfer: Contact for details</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Inquiry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Project Inquiry</h3>
              <div className="space-y-6 flex-1">
                <div className="space-y-2">
                  <h4 className="font-medium text-white flex items-center space-x-2">
                    <FaLaptopCode className="text-purple-400" />
                    <span>Web Development</span>
                  </h4>
                  <p className="text-sm text-gray-400 pl-7">Custom websites, web applications, and e-commerce solutions</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-white flex items-center space-x-2">
                    <FaMobileAlt className="text-purple-400" />
                    <span>Mobile Apps</span>
                  </h4>
                  <p className="text-sm text-gray-400 pl-7">Cross-platform mobile applications for iOS and Android</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-white flex items-center space-x-2">
                    <FaServer className="text-purple-400" />
                    <span>Backend Services</span>
                  </h4>
                  <p className="text-sm text-gray-400 pl-7">API development, database design, and cloud solutions</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-white flex items-center space-x-2">
                    <FaCode className="text-purple-400" />
                    <span>Custom Solutions</span>
                  </h4>
                  <p className="text-sm text-gray-400 pl-7">Tailored software solutions for your specific needs</p>
                </div>

                <div className="pt-4 mt-auto border-t border-purple-800/50">
                  <p className="text-sm text-purple-300">
                    Have a different project in mind? Let's discuss how I can help bring your ideas to life!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="How can I help you?"
                  />
                </div>
                <div>
  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
    Phone Number *
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone || ''}
    onChange={handleInputChange}
    required
    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
    placeholder="+91 9876543210"
  />
</div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white font-medium rounded-lg 
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-purple-500/30'} 
                    transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm mt-2">✅ Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-2">❌ {errorMessage || 'Failed to send message. Please try again.'}</p>
                )}
              </form>
            </motion.div>

            {/* Service Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Service Request</h3>
              <form onSubmit={handleServiceRequest} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="service-name"
                      name="name"
                      value={serviceRequest.name}
                      onChange={handleServiceRequestChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="service-email"
                      name="email"
                      value={serviceRequest.email}
                      onChange={handleServiceRequestChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={serviceRequest.phone}
                    onChange={handleServiceRequestChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-400 mb-1">
                      Service Needed *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={serviceRequest.serviceType}
                      onChange={handleServiceRequestChange}
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    >
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="backend">Backend Services</option>
                      <option value="fullstack">Full-Stack Development</option>
                      <option value="other">Other (Specify in details)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-400 mb-1">
                      Project Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={serviceRequest.timeline}
                      onChange={handleServiceRequestChange}
                      className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    >
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="2-4 months">2-4 months</option>
                      <option value="4+ months">4+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-400 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={serviceRequest.projectDetails}
                    onChange={handleServiceRequestChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-white font-medium rounded-lg 
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-indigo-500/30'} 
                    transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm mt-2">✅ Service request submitted successfully! We'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-2">❌ {errorMessage || 'Failed to submit request. Please try again.'}</p>
                )}
              </form>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Frequently Asked Questions
              </h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-medium text-white text-lg group-hover:text-purple-300 transition-colors">{faq.question}</span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-purple-400" />
                    ) : (
                      <FaChevronDown className="text-purple-400" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 text-gray-300 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}