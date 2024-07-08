/*
experimenting on JavaScript to make a sliding animation for diff. segments of the portfolio to make overall design more compact and pretty
*/


$(document).ready(function() {
    $('nav a').click(function(e) {
        e.preventDefault(); // Stop the page from jumping to the section

        var targetId = $(this).attr('href'); // Get the href attribute of the clicked link
        var $targetSection = $(targetId); // Select the corresponding section

        // Hide other sections and show the selected one with a slide effect
        $('section').not($targetSection).slideUp(500); // Hide all sections except the target
        $targetSection.delay(500).slideDown(500); // Delay to prevent overlaps, then show target
    });
});

//future: add clicking effects on options and home logo
//add background effects
//add assent elements(more)
//make better ICON, maybe 3D