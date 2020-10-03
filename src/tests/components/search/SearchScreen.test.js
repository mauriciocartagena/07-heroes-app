import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen/>', () => {
   
    test('debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']} >
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero');
    });    
    
    test('debe de mostrar a batman y el input con el queryString', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']} >
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )
        
        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar un error si no se encuentra el hero', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman222']} >
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        
        expect( wrapper.find('.alert-danger').text().trim() ).toBe('There is not a hero with batman222');
        expect( wrapper ).toMatchSnapshot();
        
    });
    test('debe de llamar el push del history', () => {
       
        const history = {
            push:jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman222']} >
                <Route 
                    path="/search" 
                    component={ ()=> <SearchScreen history={ history } /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target:{
                name:'searchText',
                value:'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)
        
    });
    
    
    
    
});
