import { Head, Link } from '@inertiajs/react';
import { Mail, User as UserIcon, Calendar, CheckCircle2, XCircle } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Users',
        href: '/users',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    users: {
        data: User[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function UsersIndex({ users }: Props) {
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Users</h1>
                        <p className="text-muted-foreground mt-1">
                            Manage and view all registered users
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {users.data.map((user) => (
                        <Card key={user.id} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarFallback className="bg-blue-600 text-white">
                                            {getInitials(user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="truncate">{user.name}</CardTitle>
                                        <CardDescription className="truncate flex items-center gap-1 mt-1">
                                            <Mail className="h-3 w-3" />
                                            {user.email}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <UserIcon className="h-4 w-4" />
                                        Status
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {user.email_verified_at ? (
                                            <>
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                <span className="text-green-600 font-medium">Verified</span>
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-4 w-4 text-orange-600" />
                                                <span className="text-orange-600 font-medium">Unverified</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        Joined
                                    </span>
                                    <span className="font-medium">
                                        {formatDate(user.created_at)}
                                    </span>
                                </div>

                                <div className="pt-2 border-t">
                                    <div className="text-xs text-muted-foreground">
                                        User ID: {user.id}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {users.data.length === 0 && (
                    <Card>
                        <CardContent className="py-12 text-center">
                            <UserIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                            <p className="text-muted-foreground">
                                No users found.
                            </p>
                        </CardContent>
                    </Card>
                )}

                {users.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                            Showing {((users.current_page - 1) * users.per_page) + 1} to{' '}
                            {Math.min(users.current_page * users.per_page, users.total)} of{' '}
                            {users.total} users
                        </div>
                        <div className="flex gap-2">
                            {users.current_page > 1 && (
                                <Link
                                    href={`/users?page=${users.current_page - 1}`}
                                >
                                    <span className="inline-block rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                        Previous
                                    </span>
                                </Link>
                            )}
                            {users.current_page < users.last_page && (
                                <Link
                                    href={`/users?page=${users.current_page + 1}`}
                                >
                                    <span className="inline-block rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                                        Next
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

