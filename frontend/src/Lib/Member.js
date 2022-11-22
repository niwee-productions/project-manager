import Api from "./Api";

export default class Member {

    constructor() {
        this.api = Api();
    }

    get(id) {
        return this.api.get("/member/" + id)
            .then(response => {
                console.log(response.data.data.member);
            })
        // .catch(error => {})
    }
}