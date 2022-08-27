// Hide sidebar with less than 2 entries.
var sidebar = $('.bs-sidebar')
var entries = sidebar.children().first()
if (entries.children().length <= 1)
    sidebar.css('display', 'none')
else {
    entries.children(':not(.main)').css('text-indent', '10px')
}

$('h1').css('font-weight', 'bold')
$('h1').css('font-size', '32px')
$('h2').css('font-size', '28px')
