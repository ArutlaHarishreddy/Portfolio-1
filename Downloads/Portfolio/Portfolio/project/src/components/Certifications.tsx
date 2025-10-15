import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { FaAws, FaChartLine, FaRobot } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const [currentCert, setCurrentCert] = useState(0);

  const certifications = [
    {
      title: "Intro to Analytic Thinking, Data Science, and Data Mining",
      issuer: "UCI",
      date: "2024",
      level: "Fundamentals",
      icon: <FaChartLine className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      description: "Foundational certification in analytic thinking, data science, and data mining, focusing on data analysis, pattern discovery, and insight generation.",
      skills: ["Analytical Thinking", "Data Science", "Data Optimization", "Data Mining"],
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/3FHM2V4QW748"
    },
    {
      title: "Machine Learning with Python",
      issuer: "freecodecamp",
      date: "2024",
      level: "Fundamentals",
      icon: <FaRobot className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Machine learning fundamentals, algorithms, and real-world applications covering supervised and unsupervised learning.",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Data Analysis"],
      verificationUrl: "https://freecodecamp.org/certification/fccc321004e-56c6-43fb-a644-60a38595dffd/machine-learning-with-python-v7"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "AWS",
      date: "2024",
      level: "Fundamentals",
      icon: <FaAws className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      description: "AWS Cloud fundamentals covering core services, security, architecture, and pricing models.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Management"],
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/TEKKN4JEICMQ"
    }
  ];

  const nextCert = () => setCurrentCert((prev) => (prev + 1) % certifications.length);
  const prevCert = () => setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <section id="certifications" className="section bg-black/20">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="section-title">Certifications</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning
          </motion.p>

          {/* Certification Carousel */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCert}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Certificate Icon and Info */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${certifications[currentCert].color} mb-4`}>
                        <div className="text-white">{certifications[currentCert].icon}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Level</div>
                        <div className="font-semibold text-blue-400">{certifications[currentCert].level}</div>
                        <div className="text-sm text-gray-400">Issued</div>
                        <div className="font-semibold">{certifications[currentCert].date}</div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-2">{certifications[currentCert].title}</h3>
                      <p className="text-lg text-gray-300 mb-4">{certifications[currentCert].issuer}</p>
                      <p className="text-gray-400 mb-6">{certifications[currentCert].description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 gradient-text">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {certifications[currentCert].skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full text-sm border border-blue-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Certificate Button */}
                      <div className="mt-4">
                        <a
                          href={certifications[currentCert].verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
                        >
                          View Certificate
                          <HiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevCert}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={nextCert}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              <HiChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCert(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCert
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Certification Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <div className="glass-card">
              <div className="text-3xl font-bold text-blue-500 mb-2">3</div>
              <div className="text-gray-400">Professional Certifications</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold text-purple-500 mb-2">1</div>
              <div className="text-gray-400">Cloud Platforms</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold text-emerald-500 mb-2">2024</div>
              <div className="text-gray-400">Latest Certification</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
