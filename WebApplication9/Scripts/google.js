function getAccssessToken() {


    if (location.hash) {

        if (location.hash.split('access_token=')) {

            var accesstoken = location.split('access_token=')[1].split('&')[0];
            if (accesstoken) {
                isuserregisterd(accesstoken);

            }
        }
    }
}


function isuserregisterd(accesstoken) {

    $.ajax({

        url: '/api/Account/UserInfo',
         

        method: 'GET',

        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accesstoken

        },

        success: function (response) {

            if (response.hasRegistered) {

                localStorage.setItem('access_token', accesstoken);
                localStorage.setItem('username', response.Email)
            }
            else {

                signupExternaluser(accesstoken);
            }
        }


    });

}


function signupExternaluser(accesstoken) {

    $.ajax({

        url: '/api/Account/RegisterExternal',


        method: 'POST',
     
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accesstoken

        },

        success: function (response) {
            window.location.href = "/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=https%3A%2F%2Flocalhost%3A44301%2Flogin.html%2F";

        }


    });

}