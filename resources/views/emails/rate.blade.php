@component('mail::message')
# Soporte FYCLS ingeniería

Tu servicio fue solucionado califícalo.

@component('mail::button', ['url' => $url, 'color' => 'success'])
Calificar servicio
@endcomponent

@isset($url)
@lang(
"Enlace para calificar:",
[
'actionText' => $url,
]
) <span class="break-all">[{{ $url }}]({{ $url }})</span>
@endisset

Gracias,<br>
{{ config('app.name') }}
@endcomponent
