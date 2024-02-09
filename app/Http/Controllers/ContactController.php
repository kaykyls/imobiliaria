<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request) {
        Mail::to('dev.kayky@gmail.com')->send(new ContactMail(
            $request->name,
            $request->email,
            $request->phone,
            $request->message
        ));

        return redirect()->back();
    }
}
