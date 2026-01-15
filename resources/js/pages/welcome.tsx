import { Head, Link, usePage } from '@inertiajs/react';

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
            <Head title="DOLE - Department of Labor and Employment">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#1a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold text-sm">
                                DOLE
                            </div>
                            <span className="font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                Department of Labor and Employment
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                    className="inline-block rounded-sm border border-blue-600 bg-blue-600 px-5 py-1.5 text-sm leading-normal text-white hover:bg-blue-700 hover:border-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-blue-200 hover:text-blue-600 dark:text-[#EDEDEC] dark:hover:border-blue-800 dark:hover:text-blue-400"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                            className="inline-block rounded-sm border border-blue-600 bg-blue-600 px-5 py-1.5 text-sm leading-normal text-white hover:bg-blue-700 hover:border-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                        </div>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-5xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-3 text-2xl font-semibold lg:text-3xl">
                                Empowering Filipino Workers
                            </h1>
                            <p className="mb-6 text-base text-[#706f6c] dark:text-[#A1A09A]">
                                Your gateway to comprehensive labor and employment services.
                                <br />
                                Access essential services, track applications, and stay informed.
                            </p>
                            <ul className="mb-6 flex flex-col gap-3 lg:mb-8">
                                <li className="relative flex items-start gap-4 py-2">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20">
                                            <svg
                                                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Job Matching & Placement
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Connect with employers and find job opportunities that match your skills.
                                        </p>
                                    </div>
                                </li>
                                <li className="relative flex items-start gap-4 py-2">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20">
                                            <svg
                                                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Benefits & Claims Processing
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            Apply for and track your SSS, PhilHealth, and other employment benefits.
                                        </p>
                                    </div>
                                </li>
                                <li className="relative flex items-start gap-4 py-2">
                                    <span className="relative bg-white py-1 dark:bg-[#161615]">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20">
                                            <svg
                                                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Labor Standards & Compliance
                                        </h3>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                            File complaints, check workplace compliance, and access labor law information.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                {!auth.user && (
                                    <>
                                        <Link
                                            href={register()}
                                            className="inline-block rounded-sm border border-blue-600 bg-blue-600 px-6 py-2.5 text-sm font-medium leading-normal text-white hover:bg-blue-700 hover:border-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                                        >
                                            Get Started
                                        </Link>
                                        <Link
                                            href={login()}
                                            className="inline-block rounded-sm border border-blue-600 bg-transparent px-6 py-2.5 text-sm font-medium leading-normal text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
                                        >
                                            Sign In
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-600 via-blue-500 to-red-600 lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[500px] lg:rounded-t-none lg:rounded-r-lg dark:from-blue-800 dark:via-blue-700 dark:to-red-800">
                            <div className="flex h-full flex-col items-center justify-center p-8 text-white">
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
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
                                <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
                                    DOLE
                                </h2>
                                <p className="text-center text-sm opacity-90 lg:text-base">
                                    Department of Labor and Employment
                                </p>
                                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="text-2xl font-bold">1M+</div>
                                        <div className="text-xs opacity-80">Active Users</div>
                                    </div>
                                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="text-2xl font-bold">50K+</div>
                                        <div className="text-xs opacity-80">Job Listings</div>
                                    </div>
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
