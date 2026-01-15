<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Household extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'home_address',
        'family_income',
        'house_status',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'family_income' => 'decimal:2',
        ];
    }

    /**
     * Get the household members for the household.
     */
    public function members(): HasMany
    {
        return $this->hasMany(HouseholdMember::class);
    }
}

