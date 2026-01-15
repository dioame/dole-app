import { Head, Link, router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import HouseholdController from '@/actions/App/Http/Controllers/HouseholdController';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Households',
        href: HouseholdController.index.url(),
    },
];

interface Household {
    id: number;
    father_name: string | null;
    mother_name: string | null;
    father_occupation: string | null;
    mother_occupation: string | null;
    home_address: string | null;
    family_income: string | null;
    house_status: string | null;
    members_count?: number;
    members?: Array<{
        id: number;
        name: string | null;
    }>;
}

interface Props {
    households: {
        data: Household[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function HouseholdsIndex({ households }: Props) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this household?')) {
            router.delete(HouseholdController.destroy.url({ household: id }));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Households" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Households</h1>
                        <p className="text-muted-foreground mt-1">
                            Manage household information and members
                        </p>
                    </div>
                    <Link href={HouseholdController.create.url()}>
                        <Button>Add Household</Button>
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {households.data.map((household) => (
                        <Card key={household.id}>
                            <CardHeader>
                                <CardTitle>
                                    {household.father_name || household.mother_name
                                        ? `${household.father_name || ''} & ${household.mother_name || ''}`.trim()
                                        : 'Unnamed Household'}
                                </CardTitle>
                                <CardDescription>
                                    {household.home_address || 'No address'}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2 text-sm">
                                    {household.family_income && (
                                        <div>
                                            <span className="font-medium">Income: </span>
                                            ₱{parseFloat(household.family_income).toLocaleString()}
                                        </div>
                                    )}
                                    {household.house_status && (
                                        <div>
                                            <span className="font-medium">Status: </span>
                                            {household.house_status}
                                        </div>
                                    )}
                                    <div>
                                        <span className="font-medium">Members: </span>
                                        {household.members?.length || 0}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        href={HouseholdController.show.url({
                                            household: household.id,
                                        })}
                                        className="flex-1"
                                    >
                                        <Button variant="outline" className="w-full">
                                            View
                                        </Button>
                                    </Link>
                                    <Link
                                        href={HouseholdController.edit.url({
                                            household: household.id,
                                        })}
                                        className="flex-1"
                                    >
                                        <Button variant="outline" className="w-full">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleDelete(household.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {households.data.length === 0 && (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <p className="text-muted-foreground">
                                No households found. Create your first household to get
                                started.
                            </p>
                            <Link href={HouseholdController.create.url()} className="mt-4 inline-block">
                                <Button>Add Household</Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}

                {households.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Showing {((households.current_page - 1) * households.per_page) + 1} to{' '}
                            {Math.min(households.current_page * households.per_page, households.total)} of{' '}
                            {households.total} households
                        </div>
                        <div className="flex gap-2">
                            {households.current_page > 1 && (
                                <Link
                                    href={HouseholdController.index.url({
                                        query: { page: households.current_page - 1 },
                                    })}
                                >
                                    <Button variant="outline">Previous</Button>
                                </Link>
                            )}
                            {households.current_page < households.last_page && (
                                <Link
                                    href={HouseholdController.index.url({
                                        query: { page: households.current_page + 1 },
                                    })}
                                >
                                    <Button variant="outline">Next</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
