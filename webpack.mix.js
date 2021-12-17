const mix = require('laravel-mix');

mix.js('resources/js/main.js', 'public/js').vue()
    .js('resources/js/Services/main.js', 'public/js/services').vue()
    .js('resources/assets/js/plugins/Chart.extension.js', 'public/js/plugins')
    .js('resources/assets/js/soft-ui-dashboard.js', 'public/js')
    .sass('resources/assets/scss/soft-ui-dashboard.scss', 'public/css')

