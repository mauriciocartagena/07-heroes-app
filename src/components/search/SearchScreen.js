import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ( { history } ) => {

    const location = useLocation();
    
    const { q = '' } = queryString.parse( location.search );

    
    const initalForm = {
        searchText : q,
    }
    const [ formValues, handleInputChange ] = useForm(initalForm);
    
    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])
    
    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row" >
                <div className="col-5" >
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch } >
                        <input
                            type="text"
                            name="searchText"
                            value={ searchText }
                            placeholder="Find your hero"
                            autoComplete="off"
                            className="form-control"
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7" >
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '')
                            &&
                            <div className="alert alert-info" >
                                Search a Hero
                            </div>
                    } 
                    {
                        (q !== '' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger" >
                                There is not a hero with <b>{ q }</b>
                            </div>
                    }   


                    {
                        heroesFiltered.map( hero =>
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
