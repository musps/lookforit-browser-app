import React from 'react'
import SupportPage, {
  QuestionItem,
  QuestionList,
  QuestionCategory
} from '@appCl/Components/Support'
import { FaqListAll, FasListAcheteur, FaqListLivreur } from './FaqList'

const SupportFAQPage = () => (
  <SupportPage
    title='Foire Aux Questions'>

    <QuestionList>
      <QuestionCategory
        title='Questions générales' />
      {FaqListAll.map((item) =>
        <QuestionItem
          title={item.title}
          content={item.content}
        />
      )}

      <QuestionCategory
        title='Je suis un acheteur' />
      {FasListAcheteur.map((item) =>
        <QuestionItem
          title={item.title}
          content={item.content}
        />
      )}

      <QuestionCategory
        title='Je suis un livreur' />
      {FaqListLivreur.map((item) =>
        <QuestionItem
          title={item.title}
          content={item.content}
        />
      )}
    </QuestionList>
  </SupportPage>
)

export default SupportFAQPage
