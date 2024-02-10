<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admins', [
            'admins' => User::all()
        ]);
    }

    public function show($id)
    {
        $admin = User::find($id);

        return Inertia::render('Admin', [
            'admin' => $admin
        ]);
    }

    public function edit(User $admin)
    {
        return Inertia::render('Admins/Edit', [
            'admin' => $admin
        ]);
    }

    public function update(Request $request, User $admin)
    {
        $admin->update($request->all());

        return redirect()->route('admins');
    }


    public function store(Request $request)
    {
        User::create($request->all());

        return redirect()->route('admins');
    }

    public function destroy(User $admin)
    {
        $admin->delete();

        return redirect()->route('admins');
    }
}
