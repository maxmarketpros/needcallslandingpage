"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowLeft, Clock, Users } from "lucide-react"


export default function ThankYouPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
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
                onClick={() => window.location.href = '/'}
                className="text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
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

      {/* Main Content */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Success Icon */}
            <div
              className={`mx-auto mb-8 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="h-12 w-12 text-white" />
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
              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600 text-sm">
                    We'll contact you within 24 hours to schedule your consultation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with our experienced digital marketing specialists
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Free Strategy Call</h3>
                  <p className="text-gray-600 text-sm">
                    Get personalized recommendations for your business growth
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
                onClick={() => window.open("tel:(949) 603-0389")}
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Us Now (949) 603-0389
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-all duration-300 active:scale-95"
          onClick={() => window.open("tel:(949) 603-0389")}
        >
          <Phone className="mr-2 h-4 w-4" />
          Call Now (949) 603-0389
        </Button>
      </div>
    </div>
  )
}
