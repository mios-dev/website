var dots = 0;
    
$(document).ready(function()
{
    setInterval (type, 600);
});

function type()
{
    if(dots < 3)
    {
        $('#dots').append('.');
        dots++;
    }
    else
    {
        $('#dots').html('');
        dots = 0;
    }
}