"use strict"
const submitBtn = document.querySelector("#submitBtn");
const cityName = document.querySelector("#cityName");
const city_name = document.getElementById("city_name");
const temp_real_value = document.querySelector("#temp_real_value");
const temp_status = document.querySelector("#temp_status");
const data_hide = document.querySelector(".middle_layer");


const getInfo = async(event) => {
  event.preventDefault();
   const cityValue = cityName.value;
  if(cityValue === ""){
      city_name.innerHTML = `Plz Wirte The Name Before Search`;
      data_hide.classList.add('data_hide');

  }else{

    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=7a2d8f0d3fdbd010e0c45a49f1c49b14`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
       
        city_name.innerHTML =`${arrData[0].name},${arrData[0].sys.country}`;

        temp_real_value.innerHTML = arrData[0].main.temp;
        //  const kelvin = arrData[0].main.temp;
        // // const degTemp = (kelvin - 273.15);
        //  temp.innerHTML = kelvin - 273.15;


        // temp_status.innerHTML = arrData[0].weather[0].main;
         const tempMood = arrData[0].weather[0].main;

         //condition to check sunny or clouds  
         if(tempMood === "Clear"){
            temp_status.innerHTML = "<i class ='fas fa-sun' style =' color: #eccc68;'></i>";

         }else if(tempMood === "Clouds"){
          temp_status.innerHTML = "<i class ='fas fa-cloud' style =  'color:#f1f2f6;'></i>";
         }else if(tempMood === "Rain"){
          temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
         }else{
          temp_status.innerHTML = "<i class ='fas fa-sun' style ='color: #eccc68;'></i>";
         }
         data_hide.classList.remove('data_hide');

    }catch{
      data_hide.classList.add('data_hide');
        city_name.innerHTML = `Owww! Sorry Match Not Found😒`;

    }
    
  }

}

submitBtn.addEventListener("click", getInfo);