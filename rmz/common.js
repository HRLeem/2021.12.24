$(() => {

    // dropdown
    $('.dropdown').hide();
    // $('.nav_item:nth-child(1) .dropdown').show(); for design
    $('.nav_item > a').on('mouseover', function() {
        let dd = $(this).siblings();
        dd.show(200);
    })
    $('.nav_item ').on('mouseleave', function() {
        $('.dropdown').hide(100);
    })
    $('.dropdown-ul  a').on('mouseover', function() { $(this).addClass('active') })
    $('.dropdown-ul  a').on('mouseleave', function() { $(this).removeClass('active') })
})