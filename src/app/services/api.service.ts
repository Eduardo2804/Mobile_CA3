import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class ApiService {


    constructor(private http: HttpClient) { }


    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
    }
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get(`https://www.breakingbadapi.com/api/characters`);
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);

    }

    getQuotes() {
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            this.allSearch = data as Array<any>;
        });

        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);

    }

    getDeaths() {

        this.http.get(('https://breakingbadapi.com/api/deaths')).subscribe(data => {
            this.allSearch = data as Array<any>;
        });

        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }

    getDeath(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths/${id}`)
    }
}