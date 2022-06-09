$(document).ready(function() {
    $("#updateBtn").click(function(e) {
        availFoods = [];
        unavailFoods = [];
        fetch('./data.json')
            .then(results => results.json())
            .then(data => {
                // console.log(data["Food"]);
                availFoods.push(data["Food"]["Available Food"])
                unavailFoods.push(data["Food"]["Unavailable Food"])
                console.log(availFoods[0]);
                for(let i = 0; i < availFoods[0].length; i++) {
                    if(availFoods[0][i]["ID"]) {
                        const node = document.createElement("ul");
                        node.setAttribute("id", i);
                        const name = document.createElement("li");
                        const quantity = document.createElement("li");
                        const date = document.createElement("li");
                        name.innerHTML = availFoods[0][i]["Name"];
                        quantity.innerHTML = availFoods[0][i]["Quantity"];
                        availFoods[0][i]["Expiration Date"] != "" ? date.innerHTML = availFoods[0][i]["Expiration Date"] : date.innerHTML = "N/A";
                        // add all list items to the list
                        node.appendChild(name);
                        node.appendChild(quantity);
                        node.appendChild(date);
                        $(".availItems")[0].appendChild(node);
                    }
                }
                console.log(unavailFoods[0][0]);
                for(let i = 0; i < unavailFoods[0].length; i++) {
                    if(unavailFoods[0][i]["ID"]) {
                        const node = document.createElement("ul");
                        node.setAttribute("id", i);
                        const name = document.createElement("li");
                        name.setAttribute("id", "foodName");
                        const date = document.createElement("li");
                        date.setAttribute("id", "shipmentDate")
                        name.innerHTML = unavailFoods[0][i]["Name"];
                        unavailFoods[0][i]["Shipment Date"] != "" ? date.innerHTML = unavailFoods[0][i]["Shipment Date"] : date.innerHTML = "Shipment Date Not Set";
                        // add all list items to the list
                        node.appendChild(name);
                        node.appendChild(date);
                        $(".unavailItems")[0].appendChild(node);
                    }
                }
        })
        .catch((error) => {
            console.error(error);
        })
    })
})