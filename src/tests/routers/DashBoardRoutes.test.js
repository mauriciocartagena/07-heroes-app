import React from 'react';
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashBoardRoutes/>', () => {
    
    const contextValue = { 
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:'Mauricio'
        }
    }
   
    test('debe mostrase correctamente', () => {
       
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <DashBoardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Mauricio');
        
    });
    
    
});
