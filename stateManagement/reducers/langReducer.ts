import { LANG } from '../../consts/lang'
import { Lang, StateLang } from '../../types/stateTypes'
import { LANG_ACTIONS } from '../actions/langActions'

export const initialLang: StateLang = {
  content: LANG.ES,
  lang: Lang.Es
}

export const langReducer: (
  state: StateLang,
  action: { type: string }
) => StateLang = (state, action) => {
  switch (action.type) {
    case LANG_ACTIONS.LANG_ES: {
      return {
        content: LANG.ES,
        lang: Lang.Es
      }
    }
    case LANG_ACTIONS.LANG_EN: {
      return {
        content: LANG.EN,
        lang: Lang.En
      }
    }
    default: {
      return state
    }
  }
}
