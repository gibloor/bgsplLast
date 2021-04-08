import React, {Fragment} from 'react';
import './LangChangeMenu.css';

function LangChangeMenu() {

  return (
    <Fragment>
      <div className="langChange">
        <div className="activeLang">
          RU
        </div>
        <div className="listLang">
            <ul>
            <li>
              ENG
            </li>
            <li>
              BY
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default LangChangeMenu;