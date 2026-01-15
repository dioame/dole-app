import { Head, Link, router } from '@inertiajs/react';

import HouseholdController from '@/actions/App/Http/Controllers/HouseholdController';
import { Button } from '@/components/ui/button';
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
    {
        title: 'Households',
        href: HouseholdController.index.url(),
    },
    {
        title: 'Household Details',
        href: HouseholdController.show.url({ household: 0 }),
    },
];

interface HouseholdMember {
    id: number;
    name: string | null;
    birth_date: string | null;
    age: number | null;
    sex: string | null;
    civil_status: string | null;
}

interface Household {
    id: number;
    father_name: string | null;
    mother_name: string | null;
    father_occupation: string | null;
    mother_occupation: string | null;
    home_address: string | null;
    family_income: string | null;
    house_status: string | null;
    members: HouseholdMember[];
}

interface Props {
    household: Household;
}

export default function HouseholdsShow({ household }: Props) {
    const handleDeleteMember = (memberId: number) => {
        if (confirm('Are you sure you want to delete this member?')) {
            router.delete(
                `/households/${household.id}/members/${memberId}`,
                {
                    preserveScroll: true,
                }
            );
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Household Details" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Household Details</h1>
                        <p className="text-muted-foreground mt-1">
                            View and manage household information
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link href={HouseholdController.edit.url({ household: household.id })}>
                            <Button variant="outline">Edit Household</Button>
                        </Link>
                        <Link
                            href={`/households/${household.id}/members/create`}
                        >
                            <Button>Add Member</Button>
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Father Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div>
                                <span className="font-medium">Name: </span>
                                <span>{household.father_name || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="font-medium">Occupation: </span>
                                <span>{household.father_occupation || 'N/A'}</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Mother Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div>
                                <span className="font-medium">Name: </span>
                                <span>{household.mother_name || 'N/A'}</span>
                            </div>
                            <div>
                                <span className="font-medium">Occupation: </span>
                                <span>{household.mother_occupation || 'N/A'}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Household Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Home Address: </span>
                            <span>{household.home_address || 'N/A'}</span>
                        </div>
                        <div>
                            <span className="font-medium">Family Income: </span>
                            <span>
                                {household.family_income
                                    ? `₱${parseFloat(household.family_income).toLocaleString()}`
                                    : 'N/A'}
                            </span>
                        </div>
                        <div>
                            <span className="font-medium">House Status: </span>
                            <span>{household.house_status || 'N/A'}</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Household Members</CardTitle>
                        <CardDescription>
                            {household.members.length} member(s) in this household
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {household.members.length > 0 ? (
                            <div className="space-y-4">
                                {household.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center justify-between rounded-lg border p-4"
                                    >
                                        <div className="space-y-1">
                                            <div className="font-medium">
                                                {member.name || 'Unnamed Member'}
                                            </div>
                                            <div className="text-sm text-muted-foreground space-x-4">
                                                {member.age && (
                                                    <span>Age: {member.age}</span>
                                                )}
                                                {member.sex && (
                                                    <span>Sex: {member.sex}</span>
                                                )}
                                                {member.civil_status && (
                                                    <span>Status: {member.civil_status}</span>
                                                )}
                                                {member.birth_date && (
                                                    <span>
                                                        DOB:{' '}
                                                        {new Date(
                                                            member.birth_date
                                                        ).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/households/${household.id}/members/${member.id}/edit`}
                                            >
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() =>
                                                    handleDeleteMember(member.id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-8 text-center text-muted-foreground">
                                No members added yet.{' '}
                                <Link
                                    href={`/households/${household.id}/members/create`}
                                    className="text-primary underline"
                                >
                                    Add a member
                                </Link>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

