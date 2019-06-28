function getForecastForm() {
    Swal.fire({
        input: 'text',
        inputPlaceholder: 'Location',
        background: 'rgba(0, 0, 0, 0.3)',
        focusConfirm: false,
        confirmButtonText: 'Go',
        confirmButtonColor: 'rgba(0, 0, 0, 0.3)',
        showLoaderOnConfirm: true,
        preConfirm: (local) => {
          return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + local + "&APPID=94723f4f0546094811cad5269a872470", { mode: "cors" })
            .then((response) => {
              if (!response.ok) {
                return showMessage("Something went wrong");
              }
              return response.json();
            })
        }
    }).then((result) => {
      if (result.value) {
        if (result.value.cod == "200") {
          showForecast(result.value);
        } else {
          showMessage("City not found");
        }
      }
    });
}

showMessage("Weather App");
getForecastForm();
