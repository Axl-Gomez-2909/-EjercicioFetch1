$(document).ready(function() {
    // URL de la API
    var apiUrl = 'https://api.escuelajs.co/api/v1/users';

    
    $.get(apiUrl, function(data) {
        
        data.forEach(function(user) {
            
            var userCard = `
                <div class="col-md-4 mb-4">
                    <div class="card bg-primary text-white">
                        <img src="${user.avatar}" class="card-img-top" alt="${user.name}">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">Email: ${user.email}</p>
                            <p class="card-text">Contraseña: ${user.password}</p>
                        </div>
                    </div>
                </div>
            `;

            
            $('#userList').append(userCard);
        });
    });
});
