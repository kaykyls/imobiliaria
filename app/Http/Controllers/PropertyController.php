<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;
use App\Models\Address;
use Inertia\Inertia;

class PropertyController extends Controller
{
    public function index() {
        return Inertia::render("Property");
    }
}
