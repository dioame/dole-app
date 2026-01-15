<?php

namespace App\Http\Controllers;

use App\Http\Requests\HouseholdMemberStoreRequest;
use App\Http\Requests\HouseholdMemberUpdateRequest;
use App\Models\Household;
use App\Models\HouseholdMember;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class HouseholdMemberController extends Controller
{
    /**
     * Show the form for creating a new member.
     */
    public function create(Household $household): Response
    {
        return Inertia::render('households/members/create', [
            'household' => $household,
        ]);
    }

    /**
     * Store a newly created member in storage.
     */
    public function store(HouseholdMemberStoreRequest $request, Household $household): RedirectResponse
    {
        $household->members()->create($request->validated());

        return redirect()
            ->route('households.show', $household)
            ->with('success', 'Household member added successfully.');
    }

    /**
     * Show the form for editing the specified member.
     */
    public function edit(Household $household, HouseholdMember $member): Response
    {
        return Inertia::render('households/members/edit', [
            'household' => $household,
            'member' => $member,
        ]);
    }

    /**
     * Update the specified member in storage.
     */
    public function update(HouseholdMemberUpdateRequest $request, Household $household, HouseholdMember $member): RedirectResponse
    {
        $member->update($request->validated());

        return redirect()
            ->route('households.show', $household)
            ->with('success', 'Household member updated successfully.');
    }

    /**
     * Remove the specified member from storage.
     */
    public function destroy(Household $household, HouseholdMember $member): RedirectResponse
    {
        $member->delete();

        return redirect()
            ->route('households.show', $household)
            ->with('success', 'Household member deleted successfully.');
    }
}

