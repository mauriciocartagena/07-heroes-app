import React from 'react';
import { AppRouter } from '../../routers/AppRouter';
const { mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");


describe('Pruebas de <AppRouter/>', () => {
   
    const contextValue = {
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }

    test('debe de mostrar login si no está autenticado', () => {
       
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        
    });
    test('debe de mostrar el componente marvel si esta autenticado', () => {
       
        const contextValue = {
            dispatch:jest.fn(),
            user:{
                logged:true,
                name:'Juan'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper.find('.navbar').exists() ).toBe(true);
        
    });
    
    
});
