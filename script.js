const button = document.querySelector("button");

button.addEventListener("click",
"function(){ alert("PAKYU KA RJ") }")

docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "chmod 777 /srv/jekyll && jekyll build --future"
