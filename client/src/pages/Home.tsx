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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
              AI Agency
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
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/6kbbxUjCZWE1ZcDYqCRuk8/sandbox/pm3bcTdaU1kLfiPYDXllLL-img-4_1772045957000_na1fn_bWV0YS1hZHMtc2VjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNmtiYnhVakNaV0UxWmNEWXFDUnVrOC9zYW5kYm94L3BtM2JjVGRhVTFrTGZpUFlEWGxsTEwtaW1nLTRfMTc3MjA0NTk1NzAwMF9uYTFmbl9iV1YwWVMxaFpITXRjMlZqZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FQmi8I3gb-ureBpk~RzWoxbD3nKXJ9buLl-aEVR5iitRXqXdMSdec6IDk~cigXYy2BSMXPJ523VW2O~a6JBh8A-y3dOzzaxK2uTp5IBX5dM8u3fRsLMFkm8JDxSl-mtzrJ0Odsakj1d3KnvFpC47CBBogQxWi-KFys581wHpE7oJzeA9fabpkZrqUgbtEUCrZfTcyeRgFBT5icxY~990tGRr8PFRmxrRMWIlUQxaQxd-C4pyqNLl4s~2s36fWSdmYMejRszT6ajMgJETrLpdqr2iWV1CWjr3W~6quD4SOhNZRk7-cWw3DBIciCZTKyZzhU8cMeH1GHnsNGODUzVKXQ__"
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

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                <span className="font-bold" style={{ fontFamily: "Poppins" }}>AI Agency</span>
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
            <p>&copy; 2026 AI Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
