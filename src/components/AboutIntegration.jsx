import React from "react"
import { motion } from "framer-motion"
import { Globe, GitMerge, BarChart3, Shield, Zap, Database, MonitorSmartphone, Cloud, Target, ArrowRight} from 'lucide-react'
import { Link } from "react-router-dom"

const AboutIntegration = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-l from-orange-400 via-cyan-100 to-purple-600">
            Who Are We?
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mx-auto text-gray-300">
            A cross-functional team of experts, bridging the gap between front-end interfaces and back-end systems to
            elevate operational efficiency and user experience.
          </p>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Our Mission",
              description:
                "To implement a robust integrating network for payment applications, leveraging open APIs and microservices.",
              icon: <Target className="w-12 h-12" />,
              bgColor: "from-blue-600 to-blue-800",
            },
            {
              title: "Our Vision",
              description:
                "To achieve unparalleled competency in cutting-edge technology, ensuring end-to-end monitoring and minimal service failures across our product ecosystem.",
              icon: <Globe className="w-12 h-12" />,
              bgColor: "from-purple-600 to-purple-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-100 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-cyan-600"
        >
          Our Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Integration Scale",
              icon: <Database className="w-12 h-12 text-blue-400 mb-4" />,
              description:
                "1600+ integrations including REST APIs and SOAP services exposed to 100+ consumer applications bank-wide.",
              points: [
                "150 million middleware hits monthly",
                "50 million API hits monthly",
              ],
            },
            {
              title: "Online Middleware",
              icon: <MonitorSmartphone className="w-12 h-12 text-purple-400 mb-4" />,
              description:
                "Enterprise service layer enabling integration between applications using SOAP, RESTful, JSON, XML, with HTTPS, MQ, FTP, TCP/IP, WebSocket, DB interactions.",
              points: ["Synchronous & Asynchronous support", "Multiple protocol support"],
            },
            {
              title: "Global Presence",
              icon: <Cloud className="w-12 h-12 text-blue-400 mb-4" />,
              description:
                "Integrated in UAE, Qatar, Bahrain, Egypt, India, Kuwait, Pakistan with ongoing expansion to Oman, US, HK, and UK.",
              points: ["21 Utility Bill providers", "Multiple remittance corridors"],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center mb-6">
                {item.icon}
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 text-center">{item.description}</p>
              <ul className="space-y-2 text-gray-300">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <Zap className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 bg-opacity-40 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Monitoring Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {[
              { icon: <BarChart3 className="w-12 h-12 text-blue-400" />, name: "ElasticSearch" },
              { icon: <GitMerge className="w-12 h-12 text-purple-400" />, name: "Logstash" },
              { icon: <Shield className="w-12 h-12 text-blue-400" />, name: "Kibana" },
            ].map((tool, index) => (
              <div key={index} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg hover:bg-opacity-75 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
                {tool.icon}
                <span className="mt-2 text-lg font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's transform your business with our cutting-edge integration solutions.
          </p>
          <Link to="/products">
          <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-red-600 hover:to-orange-300 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Get Started
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutIntegration

