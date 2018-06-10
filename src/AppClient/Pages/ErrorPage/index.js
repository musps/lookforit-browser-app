import React, { Component } from 'react'
import ErrorPage from '@appCl/Components/ErrorPage'

export const PageNotFound = () => (
  <ErrorPage
    code='404'
    codeMessage="La page n'a pas pu être trouvée"
    description="Oups, la page que vous avez recherchée n'a pas pu être trouvée."
  />
)
