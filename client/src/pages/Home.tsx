import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Globe, Zap, BarChart3, Headphones, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Futuristic Minimalism Design:
 * - Deep navy background (#0F1419) with electric cyan (#00D9FF) and purple (#7C3AED) accents
 * - Asymmetric layouts with generous whitespace
 * - Animated gradient orbs and glowing accent lines
 * - Bold Poppins typography for headlines, Inter for body
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380626562/npYcoS56irkU9VnnMQFbwb/stratify-ai-logo-colorful-VPhYTqm4VBcLSZWWCD3uKj.webp" alt="Stratify AI" className="w-8 h-8" />
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              Stratify AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-cyan-400 transition">Services</a>
            <a href="#platform" className="text-sm hover:text-cyan-400 transition">Platform</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
          </div>
          <Button variant="outline" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380626562/npYcoS56irkU9VnnMQFbwb/hero-lead-management-2wjxXnynpYxTssjbE4YTCe.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "Poppins" }}
            >
              AI Agents That <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Scale Your Business</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Deploy intelligent voice, text, and website agents powered by advanced AI. Automate lead qualification, nurturing, and booking—24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                Book a Free Consultation Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Our AI Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI agent services designed to transform your sales and customer engagement operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Voice Agents */}
            <div 
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService("voice")}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Voice Agents</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Inbound receptionist agents that answer calls 24/7. Outbound agents for warm follow-ups and cold calling campaigns.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    24/7 Inbound Call Handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Outbound Lead Follow-up
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Natural Conversation Flow
                  </li>
                </ul>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Text Agents */}
            <div 
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-purple-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService("text")}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Text Agents</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  SMS and chat-based AI agents for instant lead engagement. Qualify prospects and schedule appointments via text.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    SMS & Chat Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Instant Lead Qualification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Appointment Booking
                  </li>
                </ul>
                <div className="flex items-center text-purple-400 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Website Agents */}
            <div 
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService("website")}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Website Agents</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Interactive AI chatbots embedded on your website. Engage visitors, answer questions, and capture leads in real-time.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Website Chat Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Lead Capture Forms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Visitor Engagement
                  </li>
                </ul>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Meta Ads Integration */}
            <div 
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-purple-400 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService("meta")}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Meta Ads</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  AI-powered Meta ads campaigns with intelligent lead routing. Automatically connect ads to your AI agents.
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Campaign Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Lead Routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Performance Analytics
                  </li>
                </ul>
                <div className="flex items-center text-purple-400 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Management Platform Section */}
      <section id="platform" className="py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "Poppins" }}
              >
                Unified Lead Management System
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our integrated platform orchestrates your entire lead lifecycle. From generation through qualification, nurturing, and conversion—all powered by AI.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-black">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lead Generation</h4>
                    <p className="text-sm text-muted-foreground">Capture leads from Meta ads, website forms, and inbound calls.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intelligent Qualification</h4>
                    <p className="text-sm text-muted-foreground">AI agents qualify leads based on custom criteria and scoring.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-black">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Nurturing</h4>
                    <p className="text-sm text-muted-foreground">Multi-channel follow-up sequences via voice, text, and email.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Appointment Booking</h4>
                    <p className="text-sm text-muted-foreground">Automated scheduling with calendar integration and confirmations.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                Explore Platform
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/6kbbxUjCZWE1ZcDYqCRuk8/sandbox/pm3bcTdaU1kLfiPYDXllLL-img-3_1772045962000_na1fn_bGVhZC1tYW5hZ2VtZW50LXNlY3Rpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNmtiYnhVakNaV0UxWmNEWXFDUnVrOC9zYW5kYm94L3BtM2JjVGRhVTFrTGZpUFlEWGxsTEwtaW1nLTNfMTc3MjA0NTk2MjAwMF9uYTFmbl9iR1ZoWkMxdFlXNWhaMlZ0Wlc1MExYTmxZM1JwYjI0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P359v8WQxyE3SCrYa32-ZZCuyt148aua8nDpULFLy5qoUedVRPyNxeq3O~dTCw4VyTmufQVElAXuiaUa~St9OUJMUmgvLEFqdr9W12SjCEMLn5PjUaqUMeUMoh3dcu1RJ5oD23qUyA9f8-21AZpgeqwQB6OkV2GeB0W35sc3rYcBvan5mseVmzBTB29l7yYeuxSjzkoRujOZ1syXFuDg87xDCFXzbNfSzJt0r7JjfG6Tx9ERCFyUg2BfF0Z18QfXsK21UBlFdhJn3M2Mp8wrG04cemPdtPtHsei1BKB2HE0X3HKQRd1cPHKUdOC0imwYHP016vQ9O0ZBex23Gunm6w__"
                alt="Lead Management System"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale your sales with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "Natural Conversations",
                description: "AI agents that sound human and handle complex conversations with context awareness."
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track call duration, lead quality, conversion rates, and ROI across all channels."
              },
              {
                icon: Zap,
                title: "Instant Integration",
                description: "Connect with your CRM, calendar, and communication tools in minutes."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-cyan-400 transition-colors">
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Our Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the solution that fits your business needs. Let's discuss pricing on your consultation call.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Package 1 */}
            <div className="relative p-8 rounded-2xl border-2 border-border bg-card hover:border-cyan-400 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>AI Voice & Text Suite</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for businesses with existing leads</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-black font-bold">✓</span>
                  </span>
                  <span className="text-sm">24/7 Inbound Receptionist Agent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-black font-bold">✓</span>
                  </span>
                  <span className="text-sm">Outbound Follow-up & Cold Calling Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-black font-bold">✓</span>
                  </span>
                  <span className="text-sm">AI Text & SMS Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-black font-bold">✓</span>
                  </span>
                  <span className="text-sm">AI-Powered CRM & Lead Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-black font-bold">✓</span>
                  </span>
                  <span className="text-sm">Lead Qualification & Scoring</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Package 2 */}
            <div className="relative p-8 rounded-2xl border-2 border-purple-500 bg-card hover:border-purple-400 transition-all duration-300 ring-1 ring-purple-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>Complete Lead-to-Booking System</h3>
                <p className="text-sm text-muted-foreground mb-4">Full-funnel solution with lead generation</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">✓</span>
                  </span>
                  <span className="text-sm">Everything in AI Voice & Text Suite</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">✓</span>
                  </span>
                  <span className="text-sm">Meta Ads Campaign Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">✓</span>
                  </span>
                  <span className="text-sm">AI-Powered Lead Generation & Targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">✓</span>
                  </span>
                  <span className="text-sm">Intelligent Lead Routing to AI Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold">✓</span>
                  </span>
                  <span className="text-sm">Campaign Optimization & A/B Testing</span>
                </li>
              </ul>
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses using Stratify AI to transform their sales operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Stratify AI generated 47 qualified leads in our first 90 days. The AI agents are incredibly natural and our conversion rate increased by 35%.",
                author: "Sarah Mitchell",
                company: "Real Estate Group",
                metric: "47 qualified leads"
              },
              {
                quote: "We reduced our sales cycle from 14 days to 8 days. The AI receptionist handles all our inbound calls perfectly, and our team can focus on closing deals.",
                author: "James Chen",
                company: "SaaS Startup",
                metric: "43% faster sales cycle"
              },
              {
                quote: "Our roofing crew was drowning in leads but couldn't handle them all. Stratify AI's system qualified leads before they reached us, and we closed 28 jobs in 60 days. Best investment we've made.",
                author: "Marcus Thompson",
                company: "Thompson Roofing Co.",
                metric: "28 jobs closed in 60 days"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-border bg-card/50 hover:border-cyan-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyan-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold" style={{ fontFamily: "Poppins" }}>{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.company}</p>
                  <p className="text-sm font-semibold text-cyan-400">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Poppins" }}
            >
              Ready to Transform Your Sales?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. Let's discuss which Stratify AI solution is right for you and how we can help you scale.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-black font-semibold">
              Book Your Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Feature Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each package.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold" style={{ fontFamily: "Poppins" }}>Feature</th>
                  <th className="text-center py-4 px-4 font-bold" style={{ fontFamily: "Poppins" }}>AI Voice & Text Suite</th>
                  <th className="text-center py-4 px-4 font-bold" style={{ fontFamily: "Poppins" }}>Complete Lead-to-Booking</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Inbound Receptionist Agent (24/7)", package1: true, package2: true },
                  { feature: "Outbound Follow-up & Cold Calling", package1: true, package2: true },
                  { feature: "AI Text & SMS Agents", package1: true, package2: true },
                  { feature: "AI-Powered CRM & Lead Management", package1: true, package2: true },
                  { feature: "Lead Qualification & Scoring", package1: true, package2: true },
                  { feature: "Appointment Booking & Calendar Integration", package1: true, package2: true },
                  { feature: "Real-time Analytics & Reporting", package1: true, package2: true },
                  { feature: "Meta Ads Campaign Management", package1: false, package2: true },
                  { feature: "AI-Powered Lead Generation", package1: false, package2: true },
                  { feature: "Intelligent Lead Routing from Ads", package1: false, package2: true },
                  { feature: "Campaign Optimization & A/B Testing", package1: false, package2: true },
                  { feature: "ROI Tracking & Performance Analytics", package1: false, package2: true },
                  { feature: "Dedicated Account Manager", package1: false, package2: true },
                  { feature: "Priority Support", package1: false, package2: true },
                  { feature: "Custom Integration Setup", package1: false, package2: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="py-4 px-4 text-sm">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.package1 ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-400 text-black font-bold">✓</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.package2 ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-400 text-white font-bold">✓</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your AI agents learn and improve throughout your commitment period.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Package 1 Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "Poppins" }}>AI Voice & Text Suite (30 Days)</h3>
              <div className="space-y-8">
                {[
                  {
                    week: "Week 1",
                    title: "Setup & Training",
                    description: "We integrate your systems, train AI agents on your business processes, and configure call routing."
                  },
                  {
                    week: "Week 2",
                    title: "Initial Learning",
                    description: "AI agents begin handling calls and texts. We monitor quality and make real-time adjustments."
                  },
                  {
                    week: "Week 3",
                    title: "Optimization",
                    description: "Based on call data, we refine agent responses, improve lead qualification accuracy, and boost booking rates."
                  },
                  {
                    week: "Week 4",
                    title: "Performance Review",
                    description: "Full analytics review. You see qualified leads, conversion rates, and ROI. Ready to scale or adjust."
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center font-bold text-black flex-shrink-0">
                        {idx + 1}
                      </div>
                      {idx < 3 && <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent mt-2" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-bold mb-1" style={{ fontFamily: "Poppins" }}>{phase.week}: {phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 2 Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: "Poppins" }}>Complete Lead-to-Booking System (90 Days)</h3>
              <div className="space-y-8">
                {[
                  {
                    week: "Weeks 1-2",
                    title: "Full Integration & Setup",
                    description: "Complete system integration, Meta ads account setup, AI agent training, and CRM configuration."
                  },
                  {
                    week: "Weeks 3-4",
                    title: "Campaign Launch & Learning",
                    description: "Meta ads go live. AI agents begin qualifying leads from ads. We collect initial performance data."
                  },
                  {
                    week: "Weeks 5-8",
                    title: "Optimization & Scaling",
                    description: "AI agents refine lead qualification. Ads are optimized based on lead quality and conversion data. Lead volume increases."
                  },
                  {
                    week: "Weeks 9-12",
                    title: "Full Performance & ROI",
                    description: "System reaches peak efficiency. Full lead pipeline established. Clear ROI metrics and booking conversions visible."
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                        {idx + 1}
                      </div>
                      {idx < 3 && <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-transparent mt-2" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-bold mb-1" style={{ fontFamily: "Poppins" }}>{phase.week}: {phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            Ready to Transform Your Sales?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading companies using AI agents to scale their sales operations. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
              Book a Free Consultation Call
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Stratify AI and how it works.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to get started?",
                answer: "Most clients are up and running within 1-2 weeks. We handle the integration, AI agent training, and system configuration. Your first week focuses on setup and initial learning, with agents handling calls by week 2."
              },
              {
                question: "What integrations do you support?",
                answer: "We integrate with most popular CRMs (HubSpot, Salesforce, Pipedrive), calendar systems (Google Calendar, Outlook), and communication platforms. Custom integrations are available for enterprise clients."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes. While we recommend committing to the full period to see optimal results, you can cancel your subscription anytime. If you're not satisfied within the guarantee period, we'll refund you."
              },
              {
                question: "How natural do the AI agents sound?",
                answer: "Our AI agents use advanced voice synthesis and natural language processing. They sound like real humans, handle complex conversations, and can transfer to your team when needed. Most customers say they can't tell the difference."
              },
              {
                question: "What about data privacy and security?",
                answer: "We take security seriously. All data is encrypted in transit and at rest, we comply with GDPR and CCPA, and your call recordings are stored securely. You own all your data and can export it anytime."
              },
              {
                question: "What kind of ROI can I expect?",
                answer: "Most clients see results within 30 days. Common outcomes include 40-50% more qualified leads, 30-40% faster sales cycles, and 3-5x more appointment bookings. Your specific ROI depends on your industry and current processes."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border hover:border-cyan-400 transition-all duration-300">
                <h3 className="font-bold mb-3" style={{ fontFamily: "Poppins" }}>{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                <span className="font-bold" style={{ fontFamily: "Poppins" }}>Stratify AI</span>
              </div>
              <p className="text-sm text-muted-foreground">Intelligent automation for modern sales teams.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition">Voice Agents</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Text Agents</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Website Agents</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Stratify AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
