import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ExploreDrinks from '../components/search-components/ExploreDrinks';

export default function Search() {

    const { name } = useParams()
    const location = useLocation()

    const [data, setData] = useState([]);

    useEffect(() => {
        if (location.pathname.match(/\/([^\/]+)/)[1] === "name") {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => {
                setData(res.data.drinks)
            })
        } else if (location.pathname.match(/\/([^\/]+)/)[1] === "category") {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => {
                setData(res.data.drinks)
            })
        } else if (location.pathname.match(/\/([^\/]+)/)[1] === "ingredient") {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(res => {
                setData(res.data.drinks)
            })
        }
    }, [])

  return (
    <Layout>
        <ExploreDrinks data={data} name={name}/>
    </Layout>
  )
}
