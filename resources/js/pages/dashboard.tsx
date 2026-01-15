import { Head, Link } from '@inertiajs/react';
import { Home, Users, DollarSign, TrendingUp, Building2, UserCheck } from 'lucide-react';

import HouseholdController from '@/actions/App/Http/Controllers/HouseholdController';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface Statistics {
    total_households: number;
    total_members: number;
    average_members_per_household: number;
    total_family_income: number;
    average_family_income: number;
}

interface RecentHousehold {
    id: number;
    father_name: string | null;
    mother_name: string | null;
    home_address: string | null;
    house_status: string | null;
    members_count: number;
    created_at: string;
}

interface Props {
    statistics?: Statistics;
    house_status_distribution?: Record<string, number>;
    sex_distribution?: Record<string, number>;
    age_groups?: Record<string, number>;
    recent_households?: RecentHousehold[];
}

export default function Dashboard({
    statistics = {
        total_households: 0,
        total_members: 0,
        average_members_per_household: 0,
        total_family_income: 0,
        average_family_income: 0,
    },
    house_status_distribution = {},
    sex_distribution = {},
    age_groups = {},
    recent_households = [],
}: Props) {
    const formatCurrency = (amount: number) => {
        if (!amount || isNaN(amount)) {
            return '₱0.00';
        }
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 2,
        }).format(amount);
    };

    // Calculate percentages safely
    const getPercentage = (value: number, total: number) => {
        if (!total || total === 0) return 0;
        return Math.round((value / total) * 100);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Statistics Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Households
                            </CardTitle>
                            <Home className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {statistics.total_households}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Registered households
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Members
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {statistics.total_members}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {statistics.average_members_per_household} avg per household
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Family Income
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {formatCurrency(statistics.total_family_income)}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {formatCurrency(statistics.average_family_income)} average
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Avg Members/Household
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {statistics.average_members_per_household}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Average household size
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts and Distribution */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* House Status Distribution */}
                    <Card>
                        <CardHeader>
                            <CardTitle>House Status Distribution</CardTitle>
                            <CardDescription>
                                Distribution of households by house status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(house_status_distribution).map(
                                    ([status, count]) => (
                                        <div key={status} className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{status}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary rounded-full"
                                                        style={{
                                                            width: `${getPercentage(
                                                                count,
                                                                statistics.total_households
                                                            )}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm font-bold w-8 text-right">
                                                    {count}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                )}
                                {Object.keys(house_status_distribution).length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-4">
                                        No data available
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sex Distribution */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Sex Distribution</CardTitle>
                            <CardDescription>
                                Distribution of members by sex
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(sex_distribution).map(([sex, count]) => (
                                    <div key={sex} className="flex items-center justify-between">
                                        <span className="text-sm font-medium">{sex}</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{
                                                        width: `${getPercentage(
                                                            count,
                                                            statistics.total_members
                                                        )}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-bold w-8 text-right">
                                                {count}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {Object.keys(sex_distribution).length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-4">
                                        No data available
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Age Groups */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Age Distribution</CardTitle>
                            <CardDescription>
                                Distribution of members by age groups
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {Object.entries(age_groups).map(([ageGroup, count]) => (
                                    <div key={ageGroup} className="flex items-center justify-between">
                                        <span className="text-sm font-medium">{ageGroup} years</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{
                                                        width: `${getPercentage(
                                                            count,
                                                            statistics.total_members
                                                        )}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm font-bold w-8 text-right">
                                                {count}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Households */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Recent Households</CardTitle>
                            <CardDescription>
                                Latest registered households
                            </CardDescription>
                        </div>
                        <Link href={HouseholdController.index.url()}>
                            <span className="text-sm text-primary hover:underline">
                                View All
                            </span>
                        </Link>
                    </CardHeader>
                    <CardContent>
                        {recent_households.length > 0 ? (
                            <div className="space-y-4">
                                {recent_households.map((household) => (
                                    <Link
                                        key={household.id}
                                        href={HouseholdController.show.url({
                                            household: household.id,
                                        })}
                                        className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <div className="font-semibold">
                                                    {household.father_name || household.mother_name
                                                        ? `${household.father_name || ''} & ${household.mother_name || ''}`.trim()
                                                        : 'Unnamed Household'}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {household.home_address || 'No address'}
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                    {household.house_status && (
                                                        <span className="flex items-center gap-1">
                                                            <Building2 className="h-3 w-3" />
                                                            {household.house_status}
                                                        </span>
                                                    )}
                                                    <span className="flex items-center gap-1">
                                                        <Users className="h-3 w-3" />
                                                        {household.members_count} member(s)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {new Date(household.created_at).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <UserCheck className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <p className="text-sm text-muted-foreground mb-4">
                                    No households registered yet
                                </p>
                                <Link href={HouseholdController.create.url()}>
                                    <span className="text-sm text-primary hover:underline">
                                        Create your first household
                                    </span>
                                </Link>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
