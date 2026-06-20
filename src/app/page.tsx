import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import {
  ArrowRight,
  Brain,
  Users,
  BarChart3,
  Shield,
  Zap,
  Target,
  ChevronRight,
  GraduationCap,
  Building2,
  Sparkles,
  TrendingUp,
  Globe,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(148,163,184,0.4) 59px, rgba(148,163,184,0.4) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(148,163,184,0.4) 59px, rgba(148,163,184,0.4) 60px)',
          }}
        />

        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/25 blur-[160px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[120px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-5 py-2 text-sm font-medium text-slate-300 shadow-lg backdrop-blur-md">
            🇮🇳 PM Internship Scheme 2025
          </span>

          {/* Logo */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 animate-pulse rounded-full bg-cyan-400/30 blur-xl" />
            <Logo className="relative h-16 w-16 text-cyan-400 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]" />
          </div>

          {/* Heading */}
          <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
              Smart AI Allocation
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
              for a Fair Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300/90 md:text-xl">
            Revolutionizing India&apos;s internship allocation with AI&#8209;powered
            matching. Ensuring equity, transparency, and opportunity for every
            student across 28&nbsp;states.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-6 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              <Link href="/app">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-slate-600 bg-transparent px-8 py-6 text-base font-semibold text-slate-300 backdrop-blur transition-all duration-300 hover:border-slate-400 hover:bg-slate-800/50 hover:text-white"
            >
              <Link href="#features">
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2 — STATS COUNTER ROW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {[
            { icon: Users, number: '10,000+', label: 'Students Registered' },
            { icon: Building2, number: '500+', label: 'Partner Companies' },
            { icon: Target, number: '95%', label: 'Match Accuracy' },
            { icon: Globe, number: '28', label: 'States Covered' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-cyan-800/50 hover:bg-slate-900/90 hover:shadow-cyan-900/20"
            >
              <stat.icon className="h-7 w-7 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <p className="font-headline text-3xl font-bold text-white md:text-4xl">
                {stat.number}
              </p>
              <p className="text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3 — FEATURES
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="features"
        className="scroll-mt-20 bg-white px-6 py-24 dark:bg-slate-950 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              Features
            </span>
            <h2 className="font-headline text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
              Why InternLink&nbsp;AI?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500 dark:text-slate-400">
              Our platform combines cutting-edge AI with policy-driven equity
              to create the most fair and efficient allocation engine.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Matching',
                description:
                  'Our intelligent algorithms analyze skills, preferences, and company requirements to produce optimal intern-company pairings in seconds.',
                color: 'from-cyan-500 to-blue-600',
                bgLight: 'bg-cyan-50 dark:bg-cyan-950/30',
                textColor: 'text-cyan-600 dark:text-cyan-400',
              },
              {
                icon: Shield,
                title: 'Diversity & Equity',
                description:
                  'Built-in fairness constraints ensure balanced representation across gender, region, and socio-economic backgrounds — no student left behind.',
                color: 'from-indigo-500 to-purple-600',
                bgLight: 'bg-indigo-50 dark:bg-indigo-950/30',
                textColor: 'text-indigo-600 dark:text-indigo-400',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                description:
                  'Live dashboards provide data-driven insights on allocation progress, diversity metrics, and system performance at a glance.',
                color: 'from-amber-500 to-orange-600',
                bgLight: 'bg-amber-50 dark:bg-amber-950/30',
                textColor: 'text-amber-600 dark:text-amber-400',
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <CardHeader className="pb-2">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgLight}`}
                  >
                    <feature.icon className={`h-7 w-7 ${feature.textColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4 — HOW IT WORKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 dark:bg-slate-900 md:py-32">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/20" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Process
            </span>
            <h2 className="font-headline text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500 dark:text-slate-400">
              Three simple steps to launch your career through AI-driven
              matching.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                step: 1,
                icon: GraduationCap,
                title: 'Register & Profile',
                description:
                  'Students create comprehensive profiles with their skills, education history, and regional preferences.',
              },
              {
                step: 2,
                icon: Sparkles,
                title: 'AI Matching',
                description:
                  'Our engine analyzes thousands of data points to find the most optimal internship matches for every student.',
              },
              {
                step: 3,
                icon: CheckCircle2,
                title: 'Start Interning',
                description:
                  'Get your allocation letter and begin your professional career journey with a top company.',
              },
            ].map((item, idx) => (
              <div key={item.title} className="relative flex flex-col items-center text-center">
                {/* Connector line — visible between steps on md+ */}
                {idx < 2 && (
                  <div className="pointer-events-none absolute left-[calc(50%+48px)] top-10 hidden h-[2px] w-[calc(100%-96px)] bg-gradient-to-r from-indigo-300 to-cyan-300 dark:from-indigo-700 dark:to-cyan-700 md:block" />
                )}

                {/* Numbered circle */}
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25">
                  <item.icon className="h-9 w-9 text-white" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-indigo-600 shadow dark:bg-slate-900 dark:text-indigo-400">
                    {item.step}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="max-w-xs text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5 — FOOTER CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-24 md:py-32">
        {/* Orbs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Zap className="h-12 w-12 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
          <h2 className="font-headline text-4xl font-extrabold text-white md:text-5xl">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Your Future?
            </span>
          </h2>
          <p className="max-w-lg text-lg text-slate-400">
            Join thousands of students already matched with top companies
            through our AI-powered platform.
          </p>
          <Button
            asChild
            size="lg"
            className="group rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-10 py-7 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <Link href="/app">
              Launch Portal
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm text-slate-500">
          © 2025 InternLink AI. Built for Smart India Hackathon.
        </p>
      </footer>
    </div>
  );
}
