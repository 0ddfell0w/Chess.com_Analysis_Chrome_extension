function getCurrentPgn() {
    var pgn = $('input[name="pgn"]').val();
    if (!pgn) {
        var button = $('[id*="_ShareMenuGlobalDialogDownloadButton"')[0] || $(":button[ng-click='downloadPgn()']")[0];
        button.click();
        pgn = $('textarea[class="full"]').val();
        var closeButton = $(':button[class="close"][id]').click();
        closeButton.click();
    }
    if (pgn) {    
        // The termination field confuses the PDF converter so the result
        // is often output as a draw. This replaces the content with "Normal"
        // which seems to work correctly.
        if (pgn.indexOf(" won on time") !== -1) {
            pgn = pgn.replace(/Termination "([^"]+)"/g, 'Termination "Time forfeit"');
        } else {
            pgn = pgn.replace(/Termination "([^"]+)"/g, 'Termination "Normal"');
        }
    }
    return pgn;
}

function popuptoast(message) {
    var toastMessage = $('<div class="popuptoast" style="display:none">' + message + '</div>');

    $(document.body).append(toastMessage);
    toastMessage.stop().fadeIn(400).delay(2000).fadeOut(400); //fade out after 2 seconds
}