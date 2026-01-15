import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, Home, Users, FileText, Shield, TrendingUp, BarChart3 } from 'lucide-react';

import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="DOLE APP RENDON - Department of Labor and Employment">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#1a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-lg">
                                DOLE
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#1b1b18] dark:text-[#EDEDEC] text-base">
                                    DOLE APP RENDON
                                </span>
                                <span className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                    Department of Labor and Employment
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                    className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-medium leading-normal text-white shadow-md transition-all hover:bg-blue-700 hover:border-blue-700 hover:shadow-lg dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                <BarChart3 className="h-4 w-4" />
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                        className="inline-block rounded-lg border border-transparent px-5 py-2 text-sm font-medium leading-normal text-[#1b1b18] transition-all hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 dark:text-[#EDEDEC] dark:hover:border-blue-800 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-medium leading-normal text-white shadow-md transition-all hover:bg-blue-700 hover:border-blue-700 hover:shadow-lg dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                                    >
                                        Get Started
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                )}
                            </>
                        )}
                        </div>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-6xl lg:flex-row lg:gap-8">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-12 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <div className="mb-6">
                                <div className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                    🎯 Household Management System
                                </div>
                            </div>
                            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-5xl">
                                Empowering Filipino Workers with{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                                    Smart Solutions
                                </span>
                            </h1>
                            <p className="mb-8 text-lg leading-relaxed text-[#706f6c] dark:text-[#A1A09A]">
                                Your comprehensive gateway to labor and employment services. 
                                Manage households, track members, and access essential services all in one platform.
                            </p>
                            
                            <div className="mb-8 grid gap-4 sm:grid-cols-2">
                                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/50 dark:bg-blue-900/10">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                                        <Home className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Household Management
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Register and manage household information efficiently.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/50 dark:bg-blue-900/10">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Member Tracking
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Track household members with detailed analytics.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4 dark:border-red-900/50 dark:bg-red-900/10">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Benefits Processing
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Apply for and track employment benefits seamlessly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4 dark:border-red-900/50 dark:bg-red-900/10">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Labor Compliance
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Access labor standards and compliance information.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 rounded-lg border border-green-100 bg-green-50/50 p-4 dark:border-green-900/50 dark:bg-green-900/10">
                                <div className="mb-3 flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    <h3 className="font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                        Key Features
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        Real-time household analytics and insights
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        Comprehensive member management system
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        Secure and compliant data handling
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        Easy-to-use interface for all users
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                {!auth.user && (
                                    <>
                                        <Link
                                            href={register()}
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold leading-normal text-white shadow-lg transition-all hover:bg-blue-700 hover:border-blue-700 hover:shadow-xl dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                                        >
                                            Get Started Free
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                        <Link
                                            href={login()}
                                            className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 bg-transparent px-6 py-3 text-sm font-semibold leading-normal text-blue-600 transition-all hover:bg-blue-50 hover:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:hover:border-blue-500"
                                        >
                                            Sign In
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-600 via-blue-500 to-red-600 lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[550px] lg:rounded-t-none lg:rounded-r-lg dark:from-blue-800 dark:via-blue-700 dark:to-red-800">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                            <div className="relative flex h-full flex-col items-center justify-center p-8 text-white">
                                <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm">
                                        <svg
                                            className="h-16 w-16 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
                                    DOLE APP RENDON
                                </h2>
                                <p className="mb-8 text-center text-sm opacity-90 lg:text-base">
                                    Department of Labor and Employment
                                </p>
                                <div className="grid w-full grid-cols-2 gap-4">
                                    <div className="rounded-xl bg-white/15 p-5 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                                        <div className="mb-2 text-3xl font-bold">1M+</div>
                                        <div className="text-xs font-medium opacity-90">Active Users</div>
                                    </div>
                                    <div className="rounded-xl bg-white/15 p-5 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                                        <div className="mb-2 text-3xl font-bold">50K+</div>
                                        <div className="text-xs font-medium opacity-90">Job Listings</div>
                                    </div>
                                    <div className="rounded-xl bg-white/15 p-5 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                                        <div className="mb-2 text-3xl font-bold">24/7</div>
                                        <div className="text-xs font-medium opacity-90">Support</div>
                                    </div>
                                    <div className="rounded-xl bg-white/15 p-5 backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                                        <div className="mb-2 text-3xl font-bold">100%</div>
                                        <div className="text-xs font-medium opacity-90">Secure</div>
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                                    <span className="text-xs font-medium">System Online</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.2)] lg:rounded-t-none lg:rounded-r-lg" />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
