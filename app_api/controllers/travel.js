const tripsEndpoint = "http://localhost:3000/api/trips"
const options = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};

const travel = async function (req, res, next){
    await fetch(tripsEndpoint, option)
        .then((res) => res.json())
        .then((json) => {
            let msg = null;
            if(!(json instanceof Array)) {
                msg = "API Lookup error";
                json = [];
            } else {
                if (!json.length){
                    msg = "No trips exist in our database!"
                }
            }
            res.render(travel, {title: "Travlr Getaways"})
        })
        .catch((err) => res.status(500).send(err.msg));
};

module.exports = {
    travel
}