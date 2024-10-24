<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class SetLocale
{
    private array $lang_supported = ['ru', 'en', 'fr'];
    public function handle($request, Closure $next)
    {

        $langPrefix = request()->segment(1,'');

        if (in_array($langPrefix, $this->lang_supported)) {
            App::setLocale($langPrefix);
        } else {
            abort(404);
        }
        return $next($request);
    }
}