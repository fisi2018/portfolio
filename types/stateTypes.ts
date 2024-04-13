/* eslint-disable no-unused-vars */
import type { StaticImageData } from 'next/image'

export type StateNav = {
  active: boolean
}
export type ProviderValue = {
  nav: StateNav
  toggleNav?: () => void
  changeTheme?: () => void
}
export interface ExperienceItem {
  title: string
  subtitle: string
  description: string | string[]
  rangeDate: string
}
export enum Lang {
  Es = 'Español',
  En = 'English'
}
export type StateLang = {
  content: {
    panel: {
      home: string
      about: string
      projects: string
      contact: string
      theme: string
      langSelected: StaticImageData
      langs: { img: StaticImageData; lang: Lang }[]
    }
    pages: {
      index: {
        title: string
        description: string
      }
      about: {
        moveTitle: string
        title: string
        skills: {
          subtitle: string
          list: string[]
        }
        experience: {
          subtitle: string
          list: ExperienceItem[]
        }
        education: {
          subtitle: string
          list: string[]
        }
        prysmo: {
          subtitle: string
          description: string
          button: string
        }
      }
      projects: {
        title: string
        moveTitle: string
      }
      contact: {
        title: string
        moveTitle: string
        form: {
          title: string
          button: string
          name: string
          email: string
          subject: string
          message: string
        }
        description: string
      }
    }
  }
  lang: Lang
}
export type ProviderLang = {
  state: StateLang
  changeLang?: (lang: Lang) => void
}
export type ContactFormType = {
  name?: string
  email: string
  message: string
  subject?: string
}
