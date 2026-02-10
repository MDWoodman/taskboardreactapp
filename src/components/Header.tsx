import React from 'react'


interface Props {
  title:string;
  description : string;

}

function Header({title , description} : Props  ){

    const publishDate = new Date('2026-02-10').toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const publishTime = '12:00';

    return (
        <header className="app-header">
            <h1 className="app-title">{title}</h1>
            <p className="app-description">{description}</p>
            <p className="app-publish-info">Opublikowano: {publishDate} o godzinie {publishTime}</p>
        </header>
    );

}

export default Header;