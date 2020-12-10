import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Cursos from '../Pages/Cursos'
import Eventos from '../Pages/Eventos'
import Home from '../Pages/Home'
import Momsin from '../Pages/Momsin'
import Vagas from '../Pages/Vagas'


function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/momsin" component={Momsin} />
                <Route path="/vagas" component={Vagas} />
                <Route path="/cursos" component={Cursos} />
                <Route path="/eventos" component={Eventos} />
                {/* <Route path='/parentsin' component={() => {
                    window.location.href = 'https://parentsin.co/';
                    return null;
                }} /> */}
            </Switch>
        </BrowserRouter>

    )
}

export default Routes