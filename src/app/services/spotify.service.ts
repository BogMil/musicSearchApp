import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

export class SpotifyService {
    constructor(public http: Http) {
    }

    searchTrack(query: string) {
        const params: string = [
            `q=${query}`,
            `type=track`
        ].join('&');
        const queryURL = `https://api.spotify.com/v1/search?${params}`;
        return this.http.request(queryURL).pipe(map(res => res.json()));
    }
}
