<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     */
    public function index(): Response
    {
        $users = User::select('id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at')
            ->latest()
            ->paginate(15);

        return Inertia::render('users/index', [
            'users' => $users,
        ]);
    }
}

