"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    email: "",
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-center md:justify-start flex-1 md:flex-initial">
              <img
                src="https://cdn.prod.website-files.com/652e046ee9c85f183036c31a/652e2e2c89305f4451c2ec4f_5ee1da5b1fc1382e14c51e0f_Logo-p-1080%20(1)-p-500.png"
                alt="MaxMarketPros Logo"
                className="h-12 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                onClick={scrollToFAQ}
                className="text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 rounded-full"
              >
                FAQ
              </Button>
              <Button
                variant="ghost"
                onClick={scrollToForm}
                className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-3 sm:px-6 py-2 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                Talk to an Expert
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-2 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-xs sm:text-sm"
                onClick={() => window.open("tel:(949) 603-0389")}
              >
                <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Call Now </span>(949) 603-0389
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white pt-32 pb-32 md:pt-40 md:pb-40">
        {/* Radial glow backgrounds */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Two-line headline with staggered animation */}
            <h1 className="font-black text-slate-900 mb-5 leading-none">
              <div
                className={`text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Need Customers?
              </div>
              <div
                className={`text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent transition-all duration-700 ease-out delay-150 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Call Now.
              </div>
            </h1>

            {/* Subhead with emphasis */}
            <p
              className={`text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide transition-all duration-700 ease-out delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Websites, Google Business Profiles, and Local SEO that{" "}
              <span className="font-semibold text-slate-900">make your phone ring</span>.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Primary CTA - Phone number with gradient and pulse */}
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
                onClick={() => window.open("tel:(949) 603-0389")}
              >
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </Button>

              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Location */}
            <div className="flex items-center gap-2 text-slate-600 font-semibold">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span>USA Based</span>
            </div>

            {/* Separator - hidden on mobile */}
            <div className="hidden md:block w-px h-6 bg-slate-300"></div>

            {/* Social Proof with stars */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-600 font-medium">
                Trusted by <span className="font-bold text-slate-900">900+ businesses</span>
              </span>
            </div>

            {/* Separator - hidden on mobile */}
            <div className="hidden md:block w-px h-6 bg-slate-300"></div>

            {/* Testimonials Link */}
            <Button
              variant="link"
              className="text-transparent bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text font-semibold hover:from-blue-700 hover:to-violet-700 p-0 h-auto hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=maxmarketpros&oq=maxmarketpros+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhAAGB4yBggDEEUYQTIGCAQQRRhBMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEIMjUyMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#",
                  "_blank",
                )
              }
            >
              See Testimonials →
            </Button>
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to <span className="text-cobalt">Get More Calls</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional digital marketing solutions designed to make your phone ring with qualified leads.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="gradient-cobalt-electric w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Launch Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern, mobile-responsive websites optimized to convert visitors into phone calls. Built for
                  performance and lead generation.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="gradient-teal-aqua w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Business Profile</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete verification, optimized categories, and strategic management to get your phone ringing from
                  local search results.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-deep-violet w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local SEO</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic optimization that gets you found by customers ready to call. Drive qualified leads directly
                  to your phone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Bar */}
      <section className="bg-gradient-to-r from-cobalt to-electric-blue py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">🎯 Special Offers for New & Small Businesses</h3>
          </div>
        </div>
      </section>

      {/* Proof Row */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Powered by Industry-Leading Tools</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
                <Users className="h-12 w-12 text-cobalt mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-gray-600 font-medium">Contact Center</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
                <Phone className="h-12 w-12 text-deep-violet mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-gray-600 font-medium">Call Tracking</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
                <Award className="h-12 w-12 text-teal mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-gray-600 font-medium">Review Management</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 active:scale-95">
                <BarChart3 className="h-12 w-12 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-gray-600 font-medium">Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-cobalt">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services and process.</p>
          </div>
          <div className="space-y-6">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you get my phone ringing?</h3>
                <p className="text-gray-600">
                  Most clients see increased call volume within 30-60 days. Google Business Profile optimization can
                  show results even faster, sometimes within 2-3 weeks.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with businesses nationwide?</h3>
                <p className="text-gray-600">
                  Yes! We're USA-based and work with businesses across all 50 states. Our local SEO strategies are
                  customized for each market.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What makes your approach different?</h3>
                <p className="text-gray-600">
                  We focus specifically on generating phone calls, not just website traffic. Every strategy is designed
                  to get qualified prospects to pick up the phone and call your business.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide call tracking and reporting?</h3>
                <p className="text-gray-600">
                  We provide detailed call tracking, analytics, and monthly reports so you can see exactly how many
                  calls and leads we're generating for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/30 to-violet-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-cobalt">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses we've helped grow</p>
          </div>

          <div className="relative">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="text-cobalt font-bold text-lg">- {testimonials[currentTestimonial].author}</div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0 border-cobalt text-cobalt hover:bg-cobalt hover:text-white bg-transparent hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-cobalt w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0 border-cobalt text-cobalt hover:bg-cobalt hover:text-white bg-transparent hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-cobalt">Get More Calls?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
              Get your free strategy call and discover how we can make your phone ring with qualified leads.
            </p>
          </div>

          <div className="relative">
            {/* Background glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-3xl blur-xl"></div>

            <Card className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-10">
                <form name="contact" method="POST" data-netlify="true" className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 block">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email || ""}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700 block">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-semibold text-gray-700 block">
                        Business Name
                      </label>
                      <Input
                        id="business"
                        name="business"
                        placeholder="Your business name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-300 hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                    >
                      <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                      Schedule my free strategy call
                    </Button>

                    <div className="mt-4">
                      <Button
                        type="button"
                        size="lg"
                        onClick={() => window.open("tel:(949) 603-0389")}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                      >
                        <Phone className="mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        Call Now (949) 603-0389
                      </Button>
                    </div>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    No spam. We'll call you within 24 hours to discuss your marketing goals.
                  </p>
                </form>
              </CardContent>
            </Card>
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button
            className="flex-1 bg-cobalt hover:bg-electric-blue text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95"
            onClick={() => window.open("tel:(949) 603-0389")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95"
            onClick={scrollToForm}
          >
            Talk to an Expert
          </Button>
        </div>
      </div>
    </div>
  )
}
