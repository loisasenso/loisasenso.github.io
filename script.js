let xhttp;
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        xhttp = JSON.parse(this.responseText);
        let repo_list = document.createElement("li");
        let repo_list_1 = document.createElement("li");
        let repo_list_2 = document.createElement("li")
        document.getElementById("repos").appendChild(repo_list);
        document.getElementById("repos").appendChild(repo_list_1);
        document.getElementById("repos").appendChild(repo_list_2);
        repo_list.innerHTML =  xhttp[0].name;
        repo_list_1.innerHTML =  xhttp[1].name;
        repo_list_2.innerHTML =  xhttp[2].name;
        
        //document.getElementById("repos").innerHTML = xhttp[0].name + \n + xhttp[1].name;

    }
};

request.open("GET", "https://api.github.com/users/loisasenso/repos", true);
request.send();