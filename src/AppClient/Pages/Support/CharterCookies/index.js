import React, { Component } from 'react'
import SupportPage, {
  QuestionItem,
  QuestionList,
  QuestionCategory
} from '@appCl/Components/Support'

const SupportCharterCookies = () => (
  <SupportPage
    title='Charte des cookies'>

    <QuestionList>
      <QuestionItem
        alwaysOpen={true}
        title="Qu'est-ce qu'un cookie ?"
        content="
        Un cookie est un fichier texte déposé, sous réserve de votre choix, sur votre ordinateur, votre mobile ou votre tablette lors de la visite d’un site ou de la consultation d’une publicité.
        <br><br>Il a pour but de collecter des informations relatives à votre navigation et de vous proposer des services personnalisés.
        <br><br>Les cookies sont gérés par votre navigateur web et seul son émetteur est susceptible de lire ou de modifier les informations qui y sont contenues.
        "/>

      <QuestionItem
        alwaysOpen={true}
        title="Les différents types de cookies"
        content="
        Un cookie est un fichier texte déposé, sous réserve de votre choix, sur votre ordinateur, votre mobile ou votre tablette lors de la visite d’un site ou de la consultation d’une publicité.
        <br><br>Il a pour but de collecter des informations relatives à votre navigation et de vous proposer des services personnalisés.
        <br><br>Les cookies sont gérés par votre navigateur web et seul son émetteur est susceptible de lire ou de modifier les informations qui y sont contenues.
        "/>

    </QuestionList>
  </SupportPage>
)

export default SupportCharterCookies
