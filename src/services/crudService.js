import {HttpClient} from 'aurelia-fetch-client';
  
let httpClient = new HttpClient();

httpClient.fetch('https://backendcrud-production.up.railway.app/user/')
  .then(response => response.json())
  .then(data => {
    console.log(data.description);
  });

