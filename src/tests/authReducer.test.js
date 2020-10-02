import '@testing-library/jest-dom';
import { authReducer } from '../auth/authReducer';
import { types } from '../types/types';

describe('Pruebas de <authReducer/> ', () => {
   
    test('Debe de retonar el stado por defecto ', () => {
       
        const state = authReducer( { logged:false },{} );
        
        expect( state ).toEqual( { logged:false } );
        
    });
    test('Debe de autenticar y coloar el name del usuario', () => {

        const action = {
            type:types.login,
            payload:{ 
                name:'Mauricio'
            }
        }
       
        const state = authReducer( { logged:false }, action  );
        
        expect( state ).toEqual({
            logged:true,
            name:"Mauricio"
        });
        
    });
    test('Debe de borrar  el name y del usuario  y logged en false', () => {

        const action = {
            type:types.logout,
        }
       
        const state = authReducer( { logged:false,name:"Hello" }, action  );
        
        expect( state ).toEqual({
            logged:false,
        });
        
    });
    
    
});
