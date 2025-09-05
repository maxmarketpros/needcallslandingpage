"use client"

import type React from "react"

// Declare global gtag function
declare global {
  function gtag_report_conversion(url?: string): boolean;
}

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useIsMobile } from "@/components/ui/use-mobile"
import {
  Phone,
  Star,
  Globe,
  MapPin,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showStickyButtons, setShowStickyButtons] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight
        
        // Show sticky buttons when user scrolls past the hero section
        setShowStickyButtons(scrollPosition > heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // Let the browser handle the natural form submission to Netlify
    // Don't preventDefault() - this allows Netlify to process the form
  }

  const testimonials = [
    {
      text: "Brandon and his associates are great! They communicate very well and in a timely manner. They talk you through their system to make every easier. Their software is cutting edge, intuitive and very easy to use. I would highly recommend this company!",
      author: "Jason Schro",
    },
    {
      text: "Absolutely great company and more than happy to have their help at a fairly reasonable price. At the price they charge, the definitely over deliver! Within two weeks of working with them, they all ready were able to get me listed on Google, set up with a website and even land me my first job through Google. Amazing team and Brandon Lopez has top tier customer service!",
      author: "Aubrey Taylor",
    },
    {
      text: "Before we started using Max Market Pros, we were at a standstill. No leads, no place to put potential patients, no organization, no advertisements working, our website was outdated, and so we were just wasting money and coming to a dead end. It's been over a year now with Max Market Pros and we are constantly getting new leads.",
      author: "Jala Hufana",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }



  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleStrategyCall = () => {
    if (isMobile) {
      // On mobile, scroll directly to the form header with "Schedule Your Free Call"
      const formElement = document.getElementById("strategy-form")
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // On desktop, smooth scroll to form
      scrollToForm()
    }
  }

  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
  }



  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="relative sm:sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Enhanced Logo Area */}
            <div className="flex items-center justify-center md:justify-start flex-1 md:flex-initial">
              <div className="relative group">
                <img
                  src="https://cdn.prod.website-files.com/652e046ee9c85f183036c31a/652e2e2c89305f4451c2ec4f_5ee1da5b1fc1382e14c51e0f_Logo-p-1080%20(1)-p-500.png"
                  alt="MaxMarketPros Logo"
                  className="h-16 w-auto group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Navigation Items */}
            <div className="hidden md:flex items-center gap-6 sm:gap-8">
              {/* FAQ Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  variant="ghost"
                  onClick={scrollToFAQ}
                  className="relative bg-white border border-blue-200/50 text-slate-700 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 text-xl px-10 py-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
                  style={{fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}
                >
                  <span className="relative z-10 font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">FAQ</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Talk to Expert Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
                <Button
                  variant="ghost"
                  onClick={handleStrategyCall}
                  className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 hover:from-violet-700 hover:via-purple-700 hover:to-violet-800 text-white font-semibold rounded-xl px-10 py-5 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 text-xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-white">Talk to an Expert</span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 via-cyan-600/40 to-blue-700/40 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
                              <Button
                asChild
                className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white px-10 py-5 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-xl overflow-hidden"
              >
                <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    <span className="font-semibold text-white text-xl">Call Now</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/20 pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-20 md:pb-32">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/12 to-violet-600/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/8 to-orange-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating geometric shapes - only on far edges, away from content */}
        <div className="absolute top-20 left-4 w-4 h-4 bg-blue-500/10 rotate-45 animate-bounce delay-500" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-4 w-3 h-3 bg-violet-500/15 rounded-full animate-ping delay-1000" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-4 w-5 h-5 bg-cyan-400/8 rotate-12 animate-bounce delay-1500" style={{animationDuration: '2.5s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-white/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="relative z-10 text-center lg:text-left px-2 sm:px-4 flex flex-col items-center lg:items-start max-w-full">
              {/* Enhanced trust indicator badge */}
              <div
                className={`inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold mb-3 sm:mb-4 shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl group max-w-full ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative">
                  <Award className="h-4 w-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="bg-gradient-to-r from-blue-800 to-violet-700 bg-clip-text text-transparent">
                  Trusted by 900+ Local Businesses
                </span>
                <div className="flex ml-0.5 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <span className="text-xs text-blue-600 font-bold">4.9/5</span>
              </div>

              {/* Enhanced headline with better hierarchy */}
              <h1 className="font-black mb-6 sm:mb-8 leading-tight max-w-full">
                <div
                  className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-slate-900 transition-all duration-700 ease-out hover:scale-105 transform-gpu ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    fontWeight: 900
                  }}
                >
                  Your Phone Should Be
                </div>
                <div
                  className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 ease-out delay-150 hover:scale-105 transform-gpu relative ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    fontWeight: 900,
                    WebkitTextStroke: '1px rgba(59,130,246,0.1)'
                  }}
                >
                  Ringing All Day
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/5 to-violet-600/5 blur-xl -z-10 rounded-lg"></div>
                </div>
                <div
                  className={`hidden sm:block text-xl sm:text-2xl md:text-2xl lg:text-3xl text-blue-600 font-bold mt-3 sm:mt-4 transition-all duration-700 ease-out delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  ⚡ Not Silent. Not Struggling. Just Success.
                </div>
              </h1>

              {/* Enhanced value proposition */}
              <div
                className={`mb-8 sm:mb-10 transition-all duration-700 ease-out delay-400 max-w-full ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium px-2 sm:px-0">
                  We build <span className="font-bold text-slate-900 bg-gradient-to-r from-blue-600/10 to-violet-600/10 px-1 sm:px-2 py-1 rounded-lg">high-converting websites</span> and 
                  <span className="font-bold text-slate-900 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 px-1 sm:px-2 py-1 rounded-lg"> dominate Google search</span> so qualified customers find you first and call you instead of your competitors.
                </p>
                
                {/* Benefit highlights */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0">
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-sm">More Calls</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-300"></div>
                    <span className="font-semibold text-sm">Higher Rankings</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse delay-500"></div>
                    <span className="font-semibold text-sm">Beat Competition</span>
                  </div>
                </div>
              </div>

              {/* Enhanced CTAs with better design and clearance */}
              <div
                className={`relative z-20 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start items-center mb-8 sm:mb-10 p-2 sm:p-4 transition-all duration-700 ease-out delay-500 w-full max-w-full ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Primary CTA - Call Now */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <Button
                    asChild
                    size="lg"
                    className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-6 sm:px-10 py-3 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 active:scale-95 w-full sm:w-auto"

                  >
                    <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="relative">
                        <Phone className="h-5 w-5 sm:h-7 sm:w-7 group-hover:animate-bounce" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                      <span className="font-bold">Call (888) 401-4221</span>
                    </div>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </Button>
                </div>

                {/* Secondary CTA - Free Strategy */}
                <div className="relative group">
                  {/* Protective background area */}
                  <div className="absolute -inset-4 bg-white/50 rounded-3xl -z-10"></div>
                  <Button
                    size="lg"
                    onClick={handleStrategyCall}
                    className="relative z-30 bg-white/95 backdrop-blur-sm border-2 border-blue-600/50 text-blue-700 hover:bg-blue-600 hover:text-white px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"

                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Get Free Strategy Call</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>

              {/* Social proof under CTAs */}
              <div
                className={`text-center lg:text-left transition-all duration-700 ease-out delay-600 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-sm text-slate-600 mb-2">
                  <span className="font-semibold text-green-600">✓ No pressure.</span> 
                  <span className="font-semibold text-blue-600"> ✓ No spam.</span> 
                  <span className="font-semibold text-violet-600"> ✓ Just results.</span>
                </p>
              </div>

              {/* Trust indicators row */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 transition-all duration-700 ease-out delay-700 w-full px-2 sm:px-0 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">We'll answer in 2 rings</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">USA Based Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-gold" />
                  <span className="font-medium">No Setup Fees</span>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visual Elements */}
            <div className="relative mt-8 lg:mt-0">
              <div
                className={`transition-all duration-1000 ease-out delay-300 ${
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                {/* Enhanced main visual card */}
                <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-violet-50/20 rounded-3xl p-8 shadow-2xl border border-blue-100/50 backdrop-blur-sm overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(139,92,246,0.03)_25%,transparent_25%)] bg-[size:1rem_1rem]"></div>
                  
                  {/* Header with enhanced phone visual */}
                  <div className="relative text-center mb-8">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 rounded-3xl mb-4 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl animate-pulse opacity-75"></div>
                      <Phone className="relative h-12 w-12 text-white animate-bounce" style={{animationDuration: '1.5s'}} />
                      
                      {/* Multiple ring indicators */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Ring waves */}
                      <div className="absolute inset-0 rounded-3xl border-4 border-green-400/30 animate-ping" style={{animationDuration: '2s'}}></div>
                      <div className="absolute inset-0 rounded-3xl border-4 border-blue-400/20 animate-ping delay-500" style={{animationDuration: '2s'}}></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-3">
                      Your Phone Ringing
                    </h3>
                    <p className="text-slate-600 font-medium">With qualified customers ready to buy</p>
                    
                    {/* Live status indicator */}
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>LIVE - 3 calls today</span>
                    </div>
                  </div>

                  {/* Enhanced mock call stats with animations */}
                  <div className="relative space-y-5">
                    {/* Incoming call notification */}
                    <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Phone className="h-6 w-6 text-white animate-pulse" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
                        </div>
                        <div>
                          <p className="font-bold text-green-900 text-lg">Incoming Call</p>
                          <p className="text-sm text-green-700 font-medium">Local customer ready to hire</p>
                          <p className="text-xs text-green-600 mt-1">📍 Within 5 miles • 💰 $2,500 budget</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-green-600">+3</p>
                        <p className="text-xs text-green-600 font-semibold">Today</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Google ranking boost */}
                    <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp className="h-6 w-6 text-white" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">#1</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-blue-900 text-lg">Google Ranking</p>
                          <p className="text-sm text-blue-700 font-medium">Now ranking #1 for main keyword</p>
                          <p className="text-xs text-blue-600 mt-1">🚀 +340% visibility increase</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-blue-600">+12</p>
                        <p className="text-xs text-blue-600 font-semibold">This week</p>
                      </div>
                    </div>

                    {/* Website conversion */}
                    <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Globe className="h-6 w-6 text-white" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                          <p className="font-bold text-violet-900 text-lg">Website Converts</p>
                          <p className="text-sm text-violet-700 font-medium">Visitors calling within minutes</p>
                          <p className="text-xs text-violet-600 mt-1">⏱️ Average: 2.3 mins to call</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-violet-600">+28</p>
                        <p className="text-xs text-violet-600 font-semibold">This month</p>
                      </div>
                    </div>

                    {/* Bottom summary bar */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700">Total Revenue Impact</span>
                        <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">+$47,250</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements - contained within right column only */}
                <div className="absolute -top-4 right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-500 shadow-lg opacity-60"></div>
                <div className="absolute -bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce delay-1000 shadow-lg opacity-60"></div>
                <div className="absolute top-2/3 right-0 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-ping delay-700 opacity-50"></div>
                
                {/* Success badge */}
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  WORKING NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-slate-100/80 via-blue-50/60 to-violet-50/60 border-t border-slate-200/50 py-6">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_1px] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-6">
            
            {/* USA Based - Compact Banner Style */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200/40 rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group min-w-[250px]">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-white"></div>
              </div>
              <div className="flex-1">
                <span className="font-bold text-slate-900 text-lg">USA Based</span>
                <p className="text-xs text-blue-600 font-medium">Local support team</p>
              </div>
            </div>

            {/* Social Proof - Compact Banner Style */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-amber-200/40 rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group min-w-[280px]">
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current drop-shadow-sm group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
                <span className="text-amber-600 font-bold text-lg">4.9</span>
              </div>
              <div className="border-l border-amber-300/50 pl-3 flex-1">
                <span className="font-bold text-slate-900 text-lg">900+ Businesses</span>
                <p className="text-xs text-amber-600 font-medium">trust our results</p>
              </div>
            </div>

            {/* Reviews - Compact Banner Style */}
            <div className="group cursor-pointer" onClick={scrollToTestimonials}>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-violet-200/40 rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group min-w-[220px]">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">★</span>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-slate-900 text-lg group-hover:text-violet-700 transition-colors duration-300">See Reviews</span>
                  <p className="text-xs text-violet-600 font-medium flex items-center gap-1">
                    Real customer stories
                    <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple accent line */}
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Value Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/20 py-20">
        {/* Sophisticated background elements matching hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/8 to-cyan-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-8 w-4 h-4 bg-blue-500/10 rotate-45 animate-bounce delay-500" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-32 right-8 w-3 h-3 bg-violet-500/15 rounded-full animate-ping delay-1000" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-8 w-5 h-5 bg-cyan-400/8 rotate-12 animate-bounce delay-1500" style={{animationDuration: '2.5s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-2xl">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-800 to-violet-700 bg-clip-text text-transparent">
                Complete Marketing System
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <div className="text-slate-900 mb-1">Everything You Need to</div>
              <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Get More Calls
              </div>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
              Professional digital marketing solutions engineered to make your phone ring with 
              <span className="font-bold text-slate-900 bg-gradient-to-r from-blue-600/10 to-violet-600/10 px-2 py-1 rounded-lg mx-1">qualified leads</span> 
              and drive real revenue growth.
            </p>

            {/* Key stats row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">Results in 30-60 days</span>
          </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="font-semibold">900+ successful businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse delay-500"></div>
                <span className="font-semibold">Average +340% more calls</span>
              </div>
            </div>
          </div>

          {/* Enhanced service cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            
            {/* Website Development Card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 rounded-3xl p-7 shadow-2xl border border-blue-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(59,130,246,0.03)_25%,transparent_25%)] bg-[size:1rem_1rem]"></div>
                
                {/* Icon and badge */}
                <div className="relative text-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl mb-3 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Globe className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>MOST POPULAR</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    High-Converting Websites
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-5 text-base">
                    Modern, mobile-responsive websites engineered to convert visitors into phone calls within minutes. 
                    Built for performance, speed, and lead generation.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Call-to-action optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Mobile-first responsive design</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Lightning-fast loading speeds</span>
                    </div>
                  </div>

                  {/* Results preview */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-3 border border-blue-200/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">Average Conversion Rate</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">8.5%</span>
                    </div>
                    <p className="text-xs text-blue-600 mt-1">vs 2.1% industry average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Business Profile Card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 rounded-3xl p-7 shadow-2xl border border-emerald-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(16,185,129,0.03)_25%,transparent_25%)] bg-[size:1rem_1rem]"></div>
                
                {/* Icon and badge */}
                <div className="relative text-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl mb-3 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-white">#1</span>
                </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold mb-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>FASTEST RESULTS</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    Google Business Profile
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-5 text-base">
                    Complete verification, optimization, and strategic management to dominate local search results 
                    and get your phone ringing from qualified prospects.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Complete profile verification</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Strategic keyword optimization</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Review management system</span>
                    </div>
                  </div>

                  {/* Results preview */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-3 border border-emerald-200/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">Ranking Improvement</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">+340%</span>
                    </div>
                    <p className="text-xs text-emerald-600 mt-1">visibility increase average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local SEO Card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20 rounded-3xl p-7 shadow-2xl border border-violet-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.03)_25%,transparent_25%),linear-gradient(-45deg,rgba(139,92,246,0.03)_25%,transparent_25%)] bg-[size:1rem_1rem]"></div>
                
                {/* Icon and badge */}
                <div className="relative text-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl mb-3 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <TrendingUp className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-xs font-semibold mb-3">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
                    <span>LONG-TERM GROWTH</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">
                    Local SEO Mastery
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-5 text-base">
                    Strategic optimization that gets you found by customers actively searching and ready to call. 
                    Drive qualified leads directly to your phone line.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Local keyword domination</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Citation building & management</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium">Competitor analysis & strategy</span>
                    </div>
                  </div>

                  {/* Results preview */}
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-3 border border-violet-200/30">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">Monthly Call Increase</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">+250%</span>
                    </div>
                    <p className="text-xs text-violet-600 mt-1">within 90 days average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-violet-50/90 backdrop-blur-md border border-violet-200/50 text-violet-800 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl">
              <Phone className="h-4 w-4 text-violet-600 animate-pulse" />
              <span>Ready to see results? Let's talk strategy.</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 hover:from-blue-700 hover:via-violet-700 hover:to-purple-700 text-white px-7 py-3 text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={handleStrategyCall}
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Get Your Free Strategy Call
              </Button>
              
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="border-2 border-violet-300/50 text-violet-700 hover:bg-violet-50 px-7 py-3 text-base font-bold rounded-xl hover:scale-105 transition-all duration-300"
              >
                <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
                <Phone className="mr-2 h-4 w-4" />
                <span className="font-bold">Call (888) 401-4221</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Offer Bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 py-8">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_1px]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-2 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-16 w-3 h-3 bg-white/15 rounded-full animate-bounce delay-500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Special Offers Available</h3>
                <p className="text-blue-100 text-sm font-medium">Exclusive pricing for new & small businesses</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">Limited Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tools Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 to-white">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:6rem_1px] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Award className="h-4 w-4 text-blue-600" />
              <span>Professional-Grade Technology</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Powered by Industry-Leading Tools</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Enterprise-level technology stack driving results for our clients</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-blue-100/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Contact Center</p>
                  <p className="text-xs text-slate-500 mt-1">Advanced CRM</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-violet-100/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Call Tracking</p>
                  <p className="text-xs text-slate-500 mt-1">Real-time Analytics</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-emerald-100/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Review Management</p>
                  <p className="text-xs text-slate-500 mt-1">Reputation Control</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-amber-100/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Analytics Dashboard</p>
                  <p className="text-xs text-slate-500 mt-1">Performance Insights</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Trusted by 900+ businesses nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-8 w-3 h-3 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-8 w-2 h-2 bg-violet-500/15 rounded-full animate-bounce delay-700"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="text-lg">💡</span>
              <span>Common Questions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get answers to common questions about our services and process.</p>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            {/* FAQ Item 1 */}
            <div className="group relative w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-blue-100/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      How quickly can you get my phone ringing?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Most clients see increased call volume within 30-60 days. Google Business Profile optimization can
                      show results even faster, sometimes within 2-3 weeks.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-blue-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Average: 30-60 days for results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group relative w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-emerald-100/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      Do you work with businesses nationwide?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Yes! We're USA-based and work with businesses across all 50 states. Our local SEO strategies are
                      customized for each market.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>All 50 states coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group relative w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-violet-100/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">
                      What makes your approach different?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We focus specifically on generating phone calls, not just website traffic. Every strategy is designed
                      to get qualified prospects to pick up the phone and call your business.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-violet-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Call-focused approach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group relative w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-amber-100/50">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                      Do you provide call tracking and reporting?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      We provide detailed call tracking, analytics, and monthly reports so you can see exactly how many
                      calls and leads we're generating for your business.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-amber-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Complete tracking & reporting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Phone className="h-4 w-4 text-blue-600 animate-pulse" />
              <span>Still have questions? Let's talk.</span>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
              <Phone className="mr-2 h-4 w-4" />
              Call (888) 401-4221
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30">
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/8 to-violet-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-violet-600/6 to-purple-600/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        {/* Floating quote marks */}
        <div className="absolute top-16 left-16 text-6xl text-blue-200/30 font-serif">"</div>
        <div className="absolute bottom-16 right-16 text-6xl text-violet-200/30 font-serif rotate-180">"</div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span>Client Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real results from real businesses we've helped grow their revenue</p>
          </div>

          <div className="relative">
            {/* Enhanced testimonial card */}
            <div className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100/50 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(59,130,246,0.02)_25%,transparent_25%)] bg-[size:2rem_2rem]"></div>
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Enhanced star rating */}
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl px-4 py-2 border border-amber-200/50 shadow-lg">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-6 w-6 text-amber-400 fill-current drop-shadow-sm animate-pulse" 
                          style={{animationDelay: `${i * 100}ms`}}
                        />
                      ))}
                      <span className="ml-2 text-amber-600 font-bold text-lg">5.0</span>
                    </div>
                  </div>

                  {/* Large quote icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-3xl text-white font-serif">"</span>
                    </div>
                  </div>

                  {/* Enhanced testimonial text */}
                  <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-medium max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Enhanced author section */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-slate-500 text-sm font-medium">Verified Business Owner</div>
                    </div>
                  </div>

                  {/* Results highlight */}
                  <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full px-4 py-2 border border-green-200/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 text-sm font-semibold">
                      {currentTestimonial === 0 && "Increased call volume within 2 weeks"}
                      {currentTestimonial === 1 && "First job through Google in 2 weeks"}
                      {currentTestimonial === 2 && "Constantly getting new leads after 1 year"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced navigation */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="relative group w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-600 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>

              {/* Enhanced dots indicator */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`relative transition-all duration-300 rounded-full ${
                      index === currentTestimonial 
                        ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg" 
                        : "w-3 h-3 bg-slate-300 hover:bg-slate-400 hover:scale-110"
                    }`}
                  >
                    {index === currentTestimonial && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse opacity-50"></div>
                    )}
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="relative group w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-600 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">900+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="font-medium">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse delay-500"></div>
                <span className="font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lead Form Section */}
      <section id="lead-form" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20">
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-violet-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-violet-600/6 to-purple-600/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-8 w-3 h-3 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-8 w-2 h-2 bg-violet-500/15 rounded-full animate-bounce delay-700"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
              <div className="relative">
                <Phone className="h-5 w-5 text-blue-600 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="bg-gradient-to-r from-blue-800 to-violet-700 bg-clip-text text-transparent">
                Free Strategy Session
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <div className="text-slate-900 mb-2">Ready to</div>
              <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Get More Calls?
              </div>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              Get your free strategy call and discover how we can make your phone ring with 
              <span className="font-bold text-slate-900 bg-gradient-to-r from-blue-600/10 to-violet-600/10 px-2 py-1 rounded-lg mx-1">qualified leads</span> 
              in the next 30-60 days.
            </p>

            {/* Key benefits row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">100% Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="font-semibold">Custom Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse delay-500"></div>
                <span className="font-semibold">No Pressure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Enhanced background glow effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-purple-600/15 rounded-3xl blur-2xl opacity-60"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl"></div>

            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100/50 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(59,130,246,0.02)_25%,transparent_25%)] bg-[size:2rem_2rem]"></div>
              
              {/* Form header */}
              <div id="strategy-form" className="relative text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Phone className="h-8 w-8 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule Your Free Call</h3>
                <p className="text-slate-600">Takes less than 2 minutes • No commitment required</p>
              </div>

              <form name="contact" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleFormSubmit} className="relative space-y-6 w-full">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="h-14 text-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-slate-300 bg-white/80 backdrop-blur-sm shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <span className="text-blue-600">@</span>
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 text-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-slate-300 bg-white/80 backdrop-blur-sm shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-14 text-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-slate-300 bg-white/80 backdrop-blur-sm shadow-sm"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="business" className="text-sm font-bold text-slate-700 block flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      Business Name
                    </label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Your business name"
                      className="h-14 text-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-slate-300 bg-white/80 backdrop-blur-sm shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="relative group w-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 hover:from-blue-700 hover:via-violet-700 hover:to-purple-700 disabled:from-slate-400 disabled:via-slate-500 disabled:to-slate-600 disabled:cursor-not-allowed text-white py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 active:scale-95 disabled:scale-100 disabled:translate-y-0 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <div className="relative">
                        <Phone className={`h-6 w-6 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:scale-110'}`} />
                        {!isSubmitting && <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>}
                      </div>
                      <span className="hidden sm:inline">
                        {isSubmitting ? 'Submitting...' : 'Schedule My Free Strategy Call'}
                      </span>
                      <span className="sm:hidden">
                        {isSubmitting ? 'Submitting...' : 'Get Free Strategy Call'}
                      </span>
                    </div>
                  </Button>
                </div>

                {/* Enhanced trust indicators */}
                <div className="text-center space-y-3 pt-4">
                  <div className="flex justify-center items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold">No spam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                      <span className="font-semibold">24-hour response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse delay-500"></div>
                      <span className="font-semibold">Custom strategy</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">
                    We'll call you within 24 hours to discuss your marketing goals and create a custom strategy.
                  </p>
                </div>
              </form>
            </div>

            {/* Enhanced alternative call button */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md border border-blue-200/50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                <span>⚡</span>
                <span>Need immediate help? Call now</span>
              </div>
              
              <Button
                asChild
                size="lg"
                className="relative group bg-white/90 backdrop-blur-sm border-2 border-blue-300/50 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Call Now (888) 401-4221</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 MaxMarketPros. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Footer */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 transition-transform duration-300 ${showStickyButtons ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex gap-3 justify-center max-w-md mx-auto">
          <Button
            asChild
            className="flex-1 bg-cobalt hover:bg-electric-blue text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <a href="tel:+18884014221" onClick={() => { return gtag_report_conversion('tel:+18884014221') }}>
            <Phone className="mr-2 h-4 w-4" />
            Call Now
            </a>
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95"
            onClick={handleStrategyCall}
          >
            Talk to an Expert
          </Button>
        </div>
      </div>
    </div>
  )
}
