import React, { useState, useEffect, useRef } from 'react'; 

export default function HeaderMenu() {

    const pointsMenu = [
        {title:'Специальности', name:'1'},
        {title:'Студентам', name:'2'},
        {title:'Сотрудникам', name:'3'},
        {title:'Выпускникам', name:'4'},
        {title:'Партнёрам', name:'5'},
        {title:'Креативное образование', name:'6'},
        {title:'Одно окно', name:'oneWindow'},
        {title:'📞', name:'phone'},
    ]

    const listMenu = [
        {phone: [
            {one: [
               {text:'номер администрации'},
               {text:'номер приёмной'},
            ]},
            {two: [
               {text:'друга контактная информация'},
               {text:'друга контактная информация'},
            ]},
            
            {three: [
               {text:'друга контактная информация'},
               {text:'друга контактная информация'},
            ]},
            {four: [
                {text:'друга контактная информация'},
                {text:'друга контактная информация'},
             ]},
        ]},
        {oneWindow: [
            {one: [
                {text:'номер администрации'},
                {text:'номер приёмной'},
             ]},
             {two: [
                {text:'друга контактная информация'},
                {text:'друга контактная информация'},
             ]},
             
             {three: [
                {text:'друга контактная информация'},
                {text:'друга контактная информация'},
             ]},
             {four: [
                 {text:'друга контактная информация'},
                 {text:'друга контактная информация'},
              ]},
         ]},
    ]

    const [windowOpen, setWindowOpen] = useState(false);

    function windowHeaderMenu(nameWindow) {
        console.log(nameWindow);
    }

    return (
        <div>
            <nav className="navHead">
                <ul> 
                    {pointsMenu.map(item => (
                        <li name={item.name} onClick={(name)=>windowHeaderMenu(name)}> {/*setWindowOpen(name) */}
                            {item.title}
                        </li>
                    ))}
                </ul>
            </nav>
            {(() => {
                switch (windowOpen) {
                    case 'phone':
                        return (
                            <div>
                                <div>
                                    {listMenu.phone.one.map(item => (
                                        <div>
                                            {item.text}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {listMenu.phone.two.map(item => (
                                        <div>
                                            {item.text}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {listMenu.phone.three.map(item => (
                                        <div>
                                            {item.text}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {listMenu.phone.four.map(item => (
                                        <div>
                                            {item.text}
                                        </div>
                                    ))} 
                                </div>
                            </div>
                        )
                    
                }
            })}
        </div>
    );
}