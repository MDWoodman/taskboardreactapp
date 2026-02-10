import React from 'react'


interface Props {
  title:string;
  description : string;

}

function Header({title , description} : Props  ){


    return (
        <header className="app-header">
            <h1 className="app-title">{title}</h1>
            <p className="app-description">{description}</p>
        </header>
    );

}

export default Header;