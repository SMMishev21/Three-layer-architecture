function Login() {
    var Username = document.getElementById('Username').value;
    var Password = document.getElementById('Password').value;

    // Read data from an external file (for educational purposes, not suitable for production)
    var fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.onchange = function() {
        var file = fileInput.files[0];
        var reader = new FileReader("DATABASE.txt");

        reader.onload = function(e) {
            var data = e.target.result.split('\n');
            var logedUsername = data[0].trim();
            var logedPassword = data[1].trim();

            // Simulate backend authentication
            if (Username === logedUsername && Password === logedPassword) {
                alert('You are logged!');
            } else {
                alert('Try again!');
            }
        };

        reader.readAsText(file);
    };

    fileInput.click();
}
