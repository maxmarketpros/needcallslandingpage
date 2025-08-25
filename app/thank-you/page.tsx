"use client"

import type React from "react"

// Declare global gtag functions
declare global {
  function gtag_report_conversion(url?: string): boolean;
  function gtag(command: string, targetId: string, config?: any): void;
}
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowLeft, Clock, Users } from "lucide-react"


export default function ThankYouPage() {
  const [isLoaded, setIsLoaded] = useState(false)



  useEffect(() => {
    setIsLoaded(true)
    // Track form submission conversion when user reaches thank you page
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {'send_to': 'AW-17503097114/FnDVCOmRyo0bEJqikJpB'})
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/20">
      {/* Hidden form for Netlify forms detection */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="business" />
        <input name="bot-field" />
      </form>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
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

            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                onClick={() => window.location.href = '/'}
                className="text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-2 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <a href="tel:+19496030389" onClick={() => { return gtag_report_conversion('tel:+19496030389') }}>
                <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/12 to-violet-600/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/8 to-orange-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Success Icon */}
            <div
              className={`mx-auto mb-8 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <CheckCircle className="h-16 w-16 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-black text-slate-900 mb-6 leading-tight transition-all duration-700 ease-out delay-150 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-2">
                Thank You!
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Your Request Has Been Received
              </div>
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A member of our expert team will reach out to you within the next{" "}
              <span className="font-semibold text-slate-900">24 hours</span> to discuss your marketing goals
              and schedule your free strategy call.
            </p>

            {/* Information Cards */}
            <div
              className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ease-out delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <Card className="relative bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 rounded-3xl shadow-2xl border border-blue-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">Quick Response</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We'll contact you within 24 hours to schedule your consultation
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <Card className="relative bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20 rounded-3xl shadow-2xl border border-violet-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">Expert Team</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Connect with our experienced digital marketing specialists
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <Card className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 rounded-3xl shadow-2xl border border-emerald-100/50 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">Free Strategy Call</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Get personalized recommendations for your business growth
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                <a href="tel:+19496030389" onClick={() => { return gtag_report_conversion('tel:+19496030389') }}>
                <Phone className="mr-3 h-5 w-5" />
                Call Us Now (949) 603-0389
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-2 border-slate-300/50 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 bg-white/80 backdrop-blur-sm"
              >
                <ArrowLeft className="mr-3 h-5 w-5" />
                Return to Home
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

      {/* Mobile Call Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <a href="tel:+19496030389" onClick={() => { return gtag_report_conversion('tel:+19496030389') }}>
          <Phone className="mr-2 h-4 w-4" />
          Call Now (949) 603-0389
          </a>
        </Button>
      </div>
    </div>
  )
}
