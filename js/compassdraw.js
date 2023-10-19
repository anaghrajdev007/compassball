
function showPopup() {

    var loginParam = location.search.split('ShowLogin=')[1];
    var emailMessageParam = location.search.split('ShowEmailMessage=')[1];
    var emailVerificationLink = (location.search.split('ShowEmailLinkVerificationMessage=')[1]);
    var profileChangeSuccessfulParam = location.search.split('ProfileChangeSuccessful=')[1];
    var tournamentRegistrationSuccessfulParam = location.search.split('TournamentRegistrationSuccessful=')[1];
    var partnerFinderParam = location.search.split('ShowPartnerFinder=')[1];
    var oneTimeLoginParam = location.search.split('ShowOneTimeLoginMessage=')[1];

    if (emailVerificationLink != null) {
        emailVerificationLink = emailVerificationLink.split('&')[0]
    }
    if (emailVerificationLink == "True") {
        $("#modal-verification-confirmation").modal('show');
    } else if (loginParam == "True") {
        $("#modal-login").modal('show');
    } else if (emailMessageParam == "True") {
        $("#modal-email-message").modal('show');
    } else if (profileChangeSuccessfulParam == "True") {
        $("#modal-profile-change-successful").modal('show');
    } else if (tournamentRegistrationSuccessfulParam == "True") {
        $("#modal-tournament-registration-successful").modal('show');
    } else if (tournamentRegistrationSuccessfulParam == "False") {
        $("#modal-tournament-registration-cancelled").modal('show');
    } else if (tournamentRegistrationSuccessfulParam == "Error") {
        $("#modal-tournament-registration-payment-error").modal('show');
    } else if (partnerFinderParam == "True") {
        $("#modal-partner-finder").modal('show');
    } else if (oneTimeLoginParam == "True") {
        $("#modal-one-time-login").modal('show');
    }
}
function toggleChangePasswordFields() {
    var divChangePassword = document.getElementById("divChangePassword");
    var chkChangePassword = document.getElementById("chkChangePassword");
    var disabled = true
    if (chkChangePassword.checked) {
        disabled = false;
    }
    divChangePassword.hidden = disabled;
}
function enableDisableButton(btn, disabledState) {
  
    btn.disabled = !disabledState;
    //document.getElementById(btnID).disabled = disabledState;
    //alert("state passed in = "+state);
    
}

function pageRedirect() {
        window.location = "AccountTournament.aspx";

}