<?php

namespace App\Http\Controllers;

use App\Http\Requests\HouseholdStoreRequest;
use App\Http\Requests\HouseholdUpdateRequest;
use App\Models\Household;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HouseholdController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $households = Household::with('members')
            ->latest()
            ->paginate(15);

        return Inertia::render('households/index', [
            'households' => $households,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('households/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(HouseholdStoreRequest $request): RedirectResponse
    {
        $household = Household::create($request->validated());

        return redirect()
            ->route('households.show', $household)
            ->with('success', 'Household created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Household $household): Response
    {
        $household->load('members');

        return Inertia::render('households/show', [
            'household' => $household,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Household $household): Response
    {
        $household->load('members');

        return Inertia::render('households/edit', [
            'household' => $household,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(HouseholdUpdateRequest $request, Household $household): RedirectResponse
    {
        $household->update($request->validated());

        return redirect()
            ->route('households.show', $household)
            ->with('success', 'Household updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Household $household): RedirectResponse
    {
        $household->delete();

        return redirect()
            ->route('households.index')
            ->with('success', 'Household deleted successfully.');
    }
}

