import React from 'react';

function Footer({isLoad}) {
    return (
        <footer className={isLoad ? "" : "hide"}>
            <a href="#">문서화</a>
            <div>@copyright 2023. SIFTER</div>
        </footer>
    );
}

export default Footer;