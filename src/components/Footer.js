import React from 'react';

function Footer({isLoad}) {
    return (
        <footer className={isLoad ? "" : "hide"}>
            <a href="https://onewest.notion.site/369d0689eec0492f9937ece32a7cb2d0" target='_blank' rel='noreferrer'>Documentation</a>
            <div>@Copyright 2023 SIFTER All rights reserved.</div>
        </footer>
    );
}

export default Footer;