import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let projectID = 3665670;
    let url = 'http://localhost:5000/filmes?project_id=${projectID}';

    let response = http.get(url);
    check(response, { 'status is 200': (r) => r.status === 200 });
}