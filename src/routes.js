import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import { getCharacterById, getCharacters } from './api/characters-api';
import { Component } from 'react';
import CharacterDetailPage from './pages/CharacterDetailPage';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        loader: async () => {
          // return data from here
          return { characters: await getCharacters() };
        },
        Component: CharactersPage
      },
      {
          path: "/characters/:id",
          Component: CharacterDetailPage,
          loader: ({ params }) => {
            return { character: getCharacterById(params.id) };
          }
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;