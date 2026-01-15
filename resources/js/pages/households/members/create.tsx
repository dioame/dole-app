import { Form, Head, Link } from '@inertiajs/react';
import { useState } from 'react';

import HouseholdController from '@/actions/App/Http/Controllers/HouseholdController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
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
        title: 'Add Member',
        href: '#',
    },
];

interface Household {
    id: number;
    father_name: string | null;
    mother_name: string | null;
}

interface Props {
    household: Household;
}

export default function HouseholdMembersCreate({ household }: Props) {
    const [sex, setSex] = useState<string>('');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Household Member" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold">Add Household Member</h1>
                    <p className="text-muted-foreground mt-1">
                        Add a new member to this household
                    </p>
                </div>

                <Form
                    action={`/households/${household.id}/members`}
                    method="post"
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <input type="hidden" name="sex" value={sex} />
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Enter member's name"
                                        required
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="birth_date">Birth Date</Label>
                                    <Input
                                        id="birth_date"
                                        name="birth_date"
                                        type="date"
                                    />
                                    <InputError message={errors.birth_date} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="age">Age</Label>
                                    <Input
                                        id="age"
                                        name="age"
                                        type="number"
                                        min="0"
                                        max="150"
                                        placeholder="Enter age"
                                    />
                                    <InputError message={errors.age} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="sex">Sex</Label>
                                    <Select value={sex} onValueChange={setSex}>
                                        <SelectTrigger id="sex">
                                            <SelectValue placeholder="Select sex" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Male">Male</SelectItem>
                                            <SelectItem value="Female">Female</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.sex} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="civil_status">Civil Status</Label>
                                    <Input
                                        id="civil_status"
                                        name="civil_status"
                                        placeholder="Enter civil status"
                                    />
                                    <InputError message={errors.civil_status} />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button type="submit" disabled={processing}>
                                    Add Member
                                </Button>
                                <Link
                                    href={HouseholdController.show.url({
                                        household: household.id,
                                    })}
                                >
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

