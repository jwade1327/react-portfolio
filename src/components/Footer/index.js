import React from 'react';

const Footer = () => {

    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/jwade1327'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/jessica-wade-4646871a8'
        }   
    ];

    return (
        <footer className="footer">
            <ul className="nav-list footer-list">
                {links.map((link) => (
                    <li className="list-item" key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
     
}

export default Footer;