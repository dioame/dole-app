import { Form, Head, Link } from '@inertiajs/react';
import { useState } from 'react';

import HouseholdController from '@/actions/App/Http/Controllers/HouseholdController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
        title: 'Create Household',
        href: HouseholdController.create.url(),
    },
];

export default function HouseholdsCreate() {
    const [houseStatus, setHouseStatus] = useState<string>('');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Household" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold">Create Household</h1>
                    <p className="text-muted-foreground mt-1">
                        Add a new household to the system
                    </p>
                </div>

                <Form
                    {...HouseholdController.store.form()}
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <input type="hidden" name="house_status" value={houseStatus} />
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h2 className="text-lg font-semibold">Father Information</h2>
                                    
                                    <div className="grid gap-2">
                                        <Label htmlFor="father_name">Father Name</Label>
                                        <Input
                                            id="father_name"
                                            name="father_name"
                                            placeholder="Enter father's name"
                                        />
                                        <InputError message={errors.father_name} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="father_occupation">Father Occupation</Label>
                                        <Input
                                            id="father_occupation"
                                            name="father_occupation"
                                            placeholder="Enter father's occupation"
                                        />
                                        <InputError message={errors.father_occupation} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-lg font-semibold">Mother Information</h2>
                                    
                                    <div className="grid gap-2">
                                        <Label htmlFor="mother_name">Mother Name</Label>
                                        <Input
                                            id="mother_name"
                                            name="mother_name"
                                            placeholder="Enter mother's name"
                                        />
                                        <InputError message={errors.mother_name} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="mother_occupation">Mother Occupation</Label>
                                        <Input
                                            id="mother_occupation"
                                            name="mother_occupation"
                                            placeholder="Enter mother's occupation"
                                        />
                                        <InputError message={errors.mother_occupation} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold">Household Details</h2>
                                
                                <div className="grid gap-2">
                                    <Label htmlFor="home_address">Home Address</Label>
                                    <Input
                                        id="home_address"
                                        name="home_address"
                                        placeholder="Enter home address"
                                    />
                                    <InputError message={errors.home_address} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="family_income">Family Income</Label>
                                    <Input
                                        id="family_income"
                                        name="family_income"
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        placeholder="0.00"
                                    />
                                    <InputError message={errors.family_income} />
                                </div>

                                <div className="grid gap-3">
                                    <Label>House Status</Label>
                                    <div className="space-y-3">
                                        {[
                                            { value: 'Rent', label: 'Rent' },
                                            { value: 'Living Together with Parents or Relative', label: 'Living Together with Parents or Relative' },
                                            { value: 'Owned', label: 'Owned' },
                                            { value: 'Others', label: 'Others' },
                                        ].map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center gap-3 rounded-lg border border-input p-3 cursor-pointer hover:bg-accent transition-colors"
                                            >
                                                <input
                                                    type="radio"
                                                    name="house_status"
                                                    value={option.value}
                                                    checked={houseStatus === option.value}
                                                    onChange={(e) => setHouseStatus(e.target.value)}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                                                />
                                                <span className="text-sm font-medium">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <InputError message={errors.house_status} />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button type="submit" disabled={processing}>
                                    Create Household
                                </Button>
                                <Link href={HouseholdController.index.url()}>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}

