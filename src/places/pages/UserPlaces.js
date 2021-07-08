import React from 'react'
import { useParams } from 'react-router'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: "This is Title",
    description: "This is description",
    imageUrl: "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    address: "Katargm Surat",
    location: {
      lat: "21.2411563",
      lng: "72.8212487"
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: "This is Second Title",
    description: "This is Second description",
    imageUrl: "https://images.unsplash.com/photo-1589992193583-064921588655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    address: "Katargm Surat",
    location: {
      lat: "21.2411563",
      lng: "72.8212487"
    },
    creator: 'u2'
  },
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  console.log(loadedPlaces)
  return (
    <PlaceList items={loadedPlaces} />
  )
}

export default UserPlaces
