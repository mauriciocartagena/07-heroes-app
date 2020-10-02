import React from 'react';
import { mount }  from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute }  from "../../routers/PrivateRoute";

describe('Prueba en <PrivateRoute/>', () => {
   
    test('Debe de mostrar el componente si está autenticado y guardar localStorage', () => {
       
        const props = {
            location:{
                pathname:'/marvel'
            }
        }

        const  wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                  isAuthenticated={ true }
                  component={  () => <span>Listo!</span> }
                  { ...props }

                />
            </MemoryRouter>           
        );
        expect( wrapper.find('span').exists() ).toBe( true );
        
    });
    
    
});
