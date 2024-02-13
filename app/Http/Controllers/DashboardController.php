<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Property;

class DashboardController extends Controller
{
    public function index()
    {
        $active = Property::where('status', true)->count();
        $inactive = Property::where('status', false)->count();
        $forSale = Property::where('isForRent', false)->count();
        $forRent = Property::where('isForRent', true)->count();
        $houses = Property::where('category', false)->count();
        $apartments = Property::where('category', true)->count();

        return Inertia::render('Dashboard', [
            'active' => $active,
            'inactive' => $inactive,
            'forSale' => $forSale,
            'forRent' => $forRent,
            'data' => [
                ['name' => 'Houses', 'value' => $houses],
                ['name' => 'Apartments', 'value' => $apartments],
            ],
        ]);
    }
}
