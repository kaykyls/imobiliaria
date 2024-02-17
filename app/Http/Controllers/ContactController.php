<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\PropertyContactRequest;
use App\Mail\PropertyContactMail;

class ContactController extends Controller
{
    public function index(ContactRequest $request) {
        Mail::to('dev.kayky@gmail.com')->send(new ContactMail(
            $request->name,
            $request->email,
            $request->phone,
            $request->userMessage
        ));

        return redirect()->back();
    }

    public function propertyContact(PropertyContactRequest $request) {
        Mail::to('dev.kayky@gmail.com')->send(new PropertyContactMail(
            $request->name,
            $request->email,
            $request->phone,
            $request->userMessage,
            $request->propertyId
        ));
    }
}