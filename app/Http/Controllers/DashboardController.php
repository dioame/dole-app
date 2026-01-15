<?php

namespace App\Http\Controllers;

use App\Models\Household;
use App\Models\HouseholdMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index(Request $request): Response
    {
        $totalHouseholds = Household::count();
        $totalMembers = HouseholdMember::count();
        $averageMembersPerHousehold = $totalHouseholds > 0 
            ? round($totalMembers / $totalHouseholds, 2) 
            : 0;

        // House status distribution
        $houseStatusDistribution = Household::selectRaw('house_status, COUNT(*) as count')
            ->whereNotNull('house_status')
            ->groupBy('house_status')
            ->get()
            ->pluck('count', 'house_status')
            ->toArray();

        // Sex distribution
        $sexDistribution = HouseholdMember::selectRaw('sex, COUNT(*) as count')
            ->whereNotNull('sex')
            ->groupBy('sex')
            ->get()
            ->pluck('count', 'sex')
            ->toArray();

        // Total family income
        $totalFamilyIncome = Household::whereNotNull('family_income')
            ->sum('family_income') ?? 0;
        $averageFamilyIncome = $totalHouseholds > 0 
            ? round($totalFamilyIncome / $totalHouseholds, 2) 
            : 0;

        // Recent households (last 5)
        $recentHouseholds = Household::with('members')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($household) {
                return [
                    'id' => $household->id,
                    'father_name' => $household->father_name,
                    'mother_name' => $household->mother_name,
                    'home_address' => $household->home_address,
                    'house_status' => $household->house_status,
                    'members_count' => $household->members->count(),
                    'created_at' => $household->created_at->format('Y-m-d H:i:s'),
                ];
            });

        // Age distribution
        $ageGroups = [
            '0-5' => HouseholdMember::whereBetween('age', [0, 5])->count(),
            '6-12' => HouseholdMember::whereBetween('age', [6, 12])->count(),
            '13-17' => HouseholdMember::whereBetween('age', [13, 17])->count(),
            '18-25' => HouseholdMember::whereBetween('age', [18, 25])->count(),
            '26-40' => HouseholdMember::whereBetween('age', [26, 40])->count(),
            '41-60' => HouseholdMember::whereBetween('age', [41, 60])->count(),
            '60+' => HouseholdMember::where('age', '>', 60)->count(),
        ];

        return Inertia::render('dashboard', [
            'statistics' => [
                'total_households' => $totalHouseholds,
                'total_members' => $totalMembers,
                'average_members_per_household' => $averageMembersPerHousehold,
                'total_family_income' => $totalFamilyIncome,
                'average_family_income' => $averageFamilyIncome,
            ],
            'house_status_distribution' => $houseStatusDistribution,
            'sex_distribution' => $sexDistribution,
            'age_groups' => $ageGroups,
            'recent_households' => $recentHouseholds,
        ]);
    }
}

