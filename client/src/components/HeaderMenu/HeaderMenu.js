import React, { useState, Fragment } from "react";
import './style.css';
import MenuDrop from './../MenuDrop';
import OutsideClick from './../OutsideClicker';


const headerMenu = [
  { 
    title: 'Специальности',
    value: 'specialty',
    items: [
      [
        { title: 'Специальность', value: 'specialty', page: 'percksPage' },
        { title: 'Тракторист', value: 'specialty', page: 'mainPage' },
        { title: 'Повар', value: 'specialty', page: '123' },
      ],
      [
        { title: 'Машинист', value: 'specialty' },
        { title: 'Сварщик', value: 'specialty' },
        { title: 'Механик', value: 'specialty' },
      ],
      [
        { title: 'Садовник', value: 'specialty' },
        { title: 'Уборщик', value: 'specialty' },
        { title: 'Охранник', value: 'specialty' },
      ],
      [
        { title: 'Поездной', value: 'specialty' },
        { title: 'КПЦ', value: 'specialty' },
        { title: 'РДК', value: 'specialty' },
      ],
    ]
  },

  { 
    title: 'Студентам',
    value: 'students',
    items: [
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
      [
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
        { title: 'Студентам', value: 'students' },
      ],
    ]
  },
  { 
    title: 'Выпускникам', 
    value: 'graduates',
    items: [
      [
        { title: 'Выпускникам1', value: 'graduates' },
        { title: 'Выпускникам2', value: 'graduates' },
        { title: 'Выпускникам3', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам4', value: 'graduates' },
        { title: 'Выпускникам5', value: 'graduates' },
        { title: 'Выпускникам6', value: 'graduates' },
        { title: 'Выпускникам6', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам7', value: 'graduates' },
        { title: 'Выпускникам8', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
        { title: 'Выпускникам9', value: 'graduates' },
      ],
      [
        { title: 'Выпускникам10', value: 'graduates' },
        { title: 'Выпускникам11', value: 'graduates' },
      ],

    ]
  },
]

function HeaderMenu() {

  const [activeMenu, setActiveMenu] = useState();

  function repeatTest(repeat){
    activeMenu == repeat ? setActiveMenu() : setActiveMenu(repeat)
  }

  return (
    <OutsideClick setActiveMenu={setActiveMenu}>
      <Fragment>
        <div className="navHead">
            <ul className="menu-list">
              {
                headerMenu.map((item) => (
                  <li key={item.value} onClick={() => repeatTest(item.items)}>
                    {item.title}
                  </li>
                ))
              }
            </ul>
        </div>
        {
          activeMenu && <MenuDrop data={activeMenu} />
        }
      </Fragment>
    </OutsideClick>
  );
}

export default HeaderMenu;