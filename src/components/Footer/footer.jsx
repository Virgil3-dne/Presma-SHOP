import React from 'react';

export default function footer(){
    return(

        <footer>
            <div class="foot moreInformation">
                <h1>More information</h1>
                <a href="">Comming after</a>
            </div>
            <div class="foot social">
                <h1>Social media</h1>
                <a href="">Instagram</a>
                <a href="">Tiktok</a>
            </div>
            <div class="foot newsLater">
                <h1>News later</h1>
                <form action="subNewsLater.php" method="POST" id="formNewsLater">
                    <input id="inputEmail" name="subscriber_email" type="text" placeholder="email" />
                    <button type="submit" id="inputBtn">✓</button>
                </form>
            </div>
        </footer>
    )
}