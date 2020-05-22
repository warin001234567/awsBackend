var $headline = $('.headline');
$headline.on('mouseenter focus', function(){
    $headline.get(0).play();
});

$headline.on('mouseout blur', function(){
    $headline.get(0).pause();
});
