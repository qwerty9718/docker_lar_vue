<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class SetLocale
{
    private array $lang_supported = ['ru', 'en'];
    public function handle($request, Closure $next)
    {

        $langPrefix = $request->route('lang');

        if ($langPrefix){
            $this->hasLangPrefix($langPrefix);
        }
        else $this->hasNotLangPrefix();

        return $next($request);
    }


    private function hasLangPrefix(string $langPrefix) :void{
        if (in_array($langPrefix, $this->lang_supported)) {
            App::setLocale($langPrefix);
        } else {
            abort(404);
        }
    }

    private function hasNotLangPrefix() :void{
        App::setLocale("en");
    }
}